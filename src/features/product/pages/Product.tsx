import { memo } from "react";
import { Tabs } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeKey = location.pathname.includes("/categories")
    ? "categories"
    : "product";

  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm">
      {/* Sarlavha */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800 tracking-wide">
        Product Management
      </h2>

      {/* Tabs */}
      <Tabs
        className="mb-6"
        activeKey={activeKey}
        onChange={(key) =>
          navigate(key === "categories" ? "categories" : "/product")
        }
        items={[
          { key: "product", label: "Products" },
          { key: "categories", label: "Categories" },
        ]}
      />

      {/* Nested route chiqadigan joy */}
      <div className="mt-2">
        <Outlet />
      </div>
    </div>
  );
};

export default memo(Product);
