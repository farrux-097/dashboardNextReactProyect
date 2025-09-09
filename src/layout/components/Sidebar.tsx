import { ChartColumn, Package, Users } from "lucide-react"
import { memo } from "react"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="w-[250px] h-screen bg-gray-300 text-gray-500 border-r-1 shadow-md">
      <h2 className="font-bold ml-2 text-[24px] py-4">Dashboard</h2>
      <div className="w-full h-[1px] bg-gray-500"></div>
      <ul className="mt-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "py-3 pl-2 border-l-4 border-blue-500 text-blue-500 mb-2 flex items-center gap-2 hover:bg-gray-100"
                : "py-3 pl-2 border-l-4 border-transparent mb-2 flex items-center gap-2 hover:bg-gray-100"
            }
          >
            <ChartColumn />
            <span>Statistic</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user"
            className={({ isActive }) =>
              isActive
                ? "py-3 pl-2 border-l-4 border-blue-500 text-blue-500 mb-2 flex items-center gap-2 hover:bg-gray-100"
                : "py-3 pl-2 border-l-4 border-transparent mb-2 flex items-center gap-2 hover:bg-gray-100"
            }
          >
            <Users />
            <span>User</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive
                ? "py-3 pl-2 border-l-4 border-blue-500 text-blue-500 mb-2 flex items-center gap-2 hover:bg-gray-100"
                : "py-3 pl-2 border-l-4 border-transparent mb-2 flex items-center gap-2 hover:bg-gray-100"
            }
          >
            <Package />
            <span>Product</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default memo(Sidebar)
