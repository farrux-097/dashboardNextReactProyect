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
    <aside className="w-[250px] h-screen bg-slate-900 text-white flex flex-col">
      <div className="px-6 py-4 tracking-wide text-xl font-bold border-b border-slate-700">
        E-commerce
      </div>
      <nav className="flex-1 mt-4">
        <ul className="space-y-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "bg-slate-800 text-blue-400 border-r-4 border-blue-500"
                      : "text-gray-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-6 py-4 border-t border-slate-700 text-xs text-gray-400">
        © 2025 Dashboard
      </div>
    </aside>
  );
};

export default memo(Sidebar);
