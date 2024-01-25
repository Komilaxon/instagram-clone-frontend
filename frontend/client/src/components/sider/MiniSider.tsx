import { Link, useLocation, useNavigate } from "react-router-dom"
import { Burger_icon, Instagram_sider_mini_icon } from "../../helpers/icons"
import { Badge, IconButton, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react"
import { dropdown_items, menu_categories } from "../../helpers/sider.data"
import { useDispatch } from "react-redux"
import { setSiderState } from "../../redux/reducers/sider.reducer"

const MiniSider = () => {
    const location = useLocation();
    const nativete = useNavigate()
    const dispatch = useDispatch()
    const handleChangeCategory = (path: string) => {
        if (path === "/search") {
            dispatch(setSiderState({ search_visible: false }))

        } else if (path === "/notifications") {

        } else if (path === "/create_post") {

        } else {
            nativete(path)
        }
    }
    return (
        <aside className='w-[73px] border-r px-3 pt-2 pb-5 h-screen flex flex-col justify-between'>
            <div>
                <Link to={'/'}>
                    <div className="pt-[20px] pb-[8px] pl-1">
                        <IconButton className="block bg-transparent text-black dark:text-white shadow-none hover:shadow-none">
                            <Instagram_sider_mini_icon />
                        </IconButton>
                    </div>
                </Link>
                <div>
                    {
                        menu_categories.map((category, index) => <div key={index} className="w-full">
                            <button onClick={() => handleChangeCategory(category.path)} key={category.label} className={`${category.path === location.pathname ? 'font-semibold' : 'font-normal'} text-base w-full flex rounded-lg mt-1 items-center p-3  gap-x-3 hover:bg-[#F2F2F2]`}>
                                <Badge content={10} className={`${index === 4 || index == 5 ? 'flex text-[.6875rem] !px-0 !min-w-[20px] !min-h-[20px] justify-center !h-5' : "!hidden"}`}>
                                    {location.pathname === category.path ? category.iconSelected : category.icon}
                                </Badge>
                            </button>
                        </div>
                        )
                    }</div>
            </div>
            <Menu placement="top-start">
                <MenuHandler>
                    <button className="text-base w-full flex rounded-lg mt-1 items-center p-3 gap-x-3 hover:bg-[#F2F2F2]">
                        <Burger_icon />
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

export default MiniSider