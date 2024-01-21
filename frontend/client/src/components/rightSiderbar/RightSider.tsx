import { Link } from "react-router-dom";
import { navbarList, rightSiderData } from "../../helpers/right.sider.data";
import { user } from "../../helpers/right.sider.data";
import { RightSiderCard } from "./RightSiderCard";

const RightSider = () => {
  return (
    <aside className="w-[319px] px-3 h-screen justify-between space-y-5 pt-[16px]">
      {user.map((user) => (
        <RightSiderCard {...user} key={user.title} />
      ))}
      <div className="flex items-center justify-between pb-3">
        <p className="text-sm text-[#4A4A4A] font-semibold">
          Рекомендации для вас
        </p>
        <p className="text-xs font-semibold">Все</p>
      </div>
      {rightSiderData.map((item) => (
        <RightSiderCard {...item} key={item.title} />
      ))}
      <ul className="flex flex-wrap py-4">
        {navbarList.map((item, i) => (
          <li
            key={i}
            className={
              i === navbarList.length - 1
                ? "after:hidden"
                : "after:content-['•'] after:text-[6px] after:mx-0.5 after:text-[#D2D2D2]"
            }
          >
            <Link
              to={item.path}
              className="text-xs text-[#D2D2D2] font-semibold"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <span className="text-xs font-semibold uppercase text-[#D2D2D2]">
        © 2024 Instagram from Meta
      </span>
    </aside>
  );
};

export default RightSider;
