import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { Search_input_icon } from "../../helpers/icons";

const SearchContainer = () => {
    const { search_visible } = useSelector((state: RootState) => state.sider)
    if (!search_visible) {
        return null;
    }
    return (
        <div className="absolute  top-0 left-[73px] w-[397px] pr-[1px] bg-white h-screen z-[99] rounded-e-2xl">
            <div className="px-4 py-5 border-b border-global_silver">
                <h1 className="font-semibold text-2xl mb-9">Search</h1>
                <div className="bg-[#EFEFEF] text-[#8E8E8E] text-base w-full flex items-center gap-x-2 h-[40px] rounded-lg px-4">
                    <Search_input_icon />
                    <input type="text" className="bg-transparent placeholder:font-light text-base w-full h-full text-black outline-none" placeholder="Search" />
                </div>
            </div>
            <div className="px-4 py-[14px]">
                <div className="flex w-full items-center justify-between">
                    <h1 className="text-base font-semibold">Recent</h1>
                    <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                </div>
            </div>
            <div className="h-[calc(100vh-211px)] w-full overflow-y-auto rounded-br-2xl">
                <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>  <div className="px-4 py-[14px]">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-base font-semibold">Recent</h1>
                        <button><span className="text-global_blue text-[14px] font-semibold">Clear all</span></button>
                    </div>
                </div>v
            </div>
        </div>
    )
}
export default SearchContainer