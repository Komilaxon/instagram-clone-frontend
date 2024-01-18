import { Link } from "react-router-dom"
import { Burger_icon, Instagram_sider_icon } from "../helpers/icons"
import { Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react"
import { dropdown_items, menu_categories } from "../helpers/sider.data"
const Sider = () => {
    return (
        <aside className='w-[244px] border-r px-3 pt-2 pb-5 h-screen flex flex-col justify-between'>
            <div>
                <Link to={'/'}>
                    <div className="pt-[25px] pb-4 px-3">
                        <Instagram_sider_icon />
                    </div>
                </Link>
                <div>{
                    menu_categories.map(category => <button key={category.label} className="text-base w-full flex rounded-lg mt-1 items-center p-3 gap-x-3 hover:bg-[#F2F2F2]">
                        {category.icon}
                        {category.label}
                    </button>)
                }</div>
            </div>
            <Menu placement="top-end">
                <MenuHandler>
                    <button className="text-base w-full flex rounded-lg mt-1 items-center p-3 gap-x-3 hover:bg-[#F2F2F2]">
                        <Burger_icon />
                        Ещё
                    </button>
                </MenuHandler>
                <MenuList className="w-[266px] !p-2">
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