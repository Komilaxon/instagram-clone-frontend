import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

const SearchContainer = () => {
    const { search_visible } = useSelector((state: RootState) => state.sider)
    if (!search_visible) {
        return null;
    }
    return (
        <div>SearchContainer</div>
    )
}
export default SearchContainer