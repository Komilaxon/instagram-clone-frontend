import { Link, useLocation, useNavigate } from "react-router-dom"
import { Burger_icon, Instagram_sider_icon, Instagram_sider_mini_icon } from "../../helpers/icons"
import { Badge, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react"
import { dropdown_items, menu_categories } from "../../helpers/sider.data"
import { useDispatch, useSelector } from "react-redux"
import { clearSiderState, setSiderState } from "../../redux/reducers/sider.reducer"
import { RootState } from "../../redux/store"

const Sider = () => {
    const location = useLocation();
    const nativete = useNavigate()
    const dispatch = useDispatch()
    const { search_visible, messages_visible } = useSelector((state: RootState) => state.sider)
    const handleChangeCategory = (path: string) => {
        dispatch(clearSiderState())
        if (path === "/search") {
            dispatch(setSiderState({ search_visible: !search_visible }))
        } else if (path === "/notifications") {

        } else if (path === "/create_post") {

        }
        else if (path === "/direct/inbox") {
            nativete(path)
            dispatch(setSiderState({ messages_visible: true }));
        }
        else {
            nativete(path)
        }
    }
    return (
        <aside className={`${search_visible || messages_visible ? 'w-[73px]' : 'w-full'} border-r border-global_silver px-3 pt-9 pb-5 h-screen flex flex-col justify-between relative `}>
            <div>
                <Link to={'/'}>
                    <div className="h-[48px] px-3">
                        {
                            (search_visible || messages_visible) ? <Instagram_sider_mini_icon /> : <Instagram_sider_icon />
                        }
                    </div>
                </Link>
                <div className="mt-5 flex flex-col gap-y-[3px]">
                    {
                        menu_categories.map((category, index) => <div key={index} className="w-full">
                            <button onClick={() => handleChangeCategory(category.path)} key={category.label} className={`${category.path === location.pathname ? 'font-semibold' : 'font-normal'} text-base w-full flex rounded-lg mt-1 items-center p-3  gap-x-3 hover:bg-[#F2F2F2]`}>
                                <Badge content={10} className={`${index === 4 || index == 5 ? 'flex text-[.6875rem] !px-0 !min-w-[20px] !min-h-[20px] justify-center !h-5' : "!hidden"}`}>
                                    {location.pathname === category.path ? category.iconSelected : category.icon}
                                </Badge>
                                {
                                    !search_visible && !messages_visible &&
                                    <span className="lg:block hidden">{category.label}</span>
                                }
                            </button>
                        </div>
                        )
                    }</div>
            </div>
            <Menu placement="top-start">
                <MenuHandler>
                    <button className="text-base w-full flex rounded-lg mt-1 items-center p-3 gap-x-3 hover:bg-[#F2F2F2]">
                        <Burger_icon />
                        {
                            (!search_visible || !messages_visible) &&
                            <span className="lg:block hidden">Ещё</span>
                        }
                    </button>
                </MenuHandler>
                <MenuList className="w-[266px] !p-2 !left-24">
                    {
                        dropdown_items.map(item => <MenuItem key={item.label} className="flex text-[14px] text-black p-3 gap-x-2 hover:bg-[#F2F2F2]">
                            {item.icon}
                            {item.label}
                        </MenuItem>)
                    }
                </MenuList>
            </Menu>
        </aside>
    )
}

export default Sider