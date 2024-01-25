import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

const SearchContainer = () => {
    const { search_visible } = useSelector((state: RootState) => state.sider)
    if (!search_visible) {
        return null;
    }
    return (
        <div className="absolute top-0 left-[73px] w-[397px] bg-black h-screen z-[9999999999999999999]">SearchContainer</div>
    )
}
export default SearchContainer