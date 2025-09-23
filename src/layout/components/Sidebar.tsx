import { memo } from "react";
import { NavLink } from "react-router-dom";
import { BarChart2, Users, ShoppingBag } from "lucide-react";

const Sidebar = () => {
  const links = [
    { to: "", label: "Statistics", icon: <BarChart2 size={18} /> },
    { to: "user", label: "Users", icon: <Users size={18} /> },
    { to: "product", label: "Products", icon: <ShoppingBag size={18} /> },
  ];

  return (
    <aside
      className="
        w-[240px] h-screen bg-white shadow-md flex flex-col border-r border-gray-200
        sticky top-0 overflow-hidden
      "
    >
      {/* Header */}
      <div className="px-6 py-4 text-lg font-semibold text-gray-800 border-b border-gray-200">
        E-commerce
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-2">
        <ul className="space-y-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors duration-200
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-600 border-r-4 border-blue-500"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`
                }
              >
                {link.icon}
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-200 text-xs text-gray-500">
        © 2025 Dashboard
      </div>
    </aside>
  );
};

export default memo(Sidebar);
