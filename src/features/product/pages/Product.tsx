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
        <>
            <div className="p-2">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Product Management</h2>
                <Tabs
                    activeKey={activeKey}
                    onChange={(key) =>
                        navigate(key === "categories" ? "categories" : "/product")
                    }
                    items={[
                        { key: "product", label: "Products" },
                        { key: "categories", label: "Categories" },
                    ]}
                />
                <Outlet />
            </div>
        </>
    );
};

export default memo(Product);
