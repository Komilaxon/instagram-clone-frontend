
import { Avatar } from "@material-tailwind/react"
import { Create_post_icon, Explore_icon, Home_icon, Messages_icon, Notification_icon, Reels_icon, Saved_icon, Search_icon, Settings_icon } from "../helpers/icons"
export const menu_categories = [
    { path: "/", icon: <Home_icon />, label: "Главная" },
    { path: "/search", icon: <Search_icon />, label: "Поисковый запрос" },
    { path: "/explore", icon: <Explore_icon />, label: "Интересное" },
    { path: "/direct", icon: <Reels_icon />, label: "Reels" },
    { path: "/direct/inbox/", icon: <Messages_icon />, label: "Сообщения" },
    { path: "/notifications", icon: <Notification_icon />, label: "Уведомления" },
    { path: "/create_post", icon: <Create_post_icon />, label: "Создать" },
    { path: "/profile", icon: <Avatar src="https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/computer-user-icon.png" withBorder={true} size="xs" alt="#404" />, label: "Профиль" },
]
export const dropdown_items = [
    { path: "/settings", icon: <Settings_icon />, label: "Настройки" },
    { path: "/saved", icon: <Saved_icon />, label: "Сохраненное" },
    { path: null, icon: null, label: "Выйти" },
]