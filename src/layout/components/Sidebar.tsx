import { memo } from "react"
import { Layout, Menu } from "antd"
import {
  BarChartOutlined,
  UserOutlined,
  AppstoreOutlined,
} from "@ant-design/icons"
import { useNavigate, useLocation } from "react-router-dom"
import { CircleUserRound } from 'lucide-react';
const { Sider } = Layout

const Sidebar = ({ data }: { data: any }) => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Sider
      width={250}
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        background: "#fff",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
        zIndex: 100,
      }}
    >
    <div className="flex items-center text-black gap-3 px-5 mt-2">
        <div className="size-10 bg-gray-300 rounded-full text-gray-900 grid place-items-center font-bold">
          {data?.fname.slice(0, 1)}
        </div>
        <div className="flex flex-col">
          <b>{data?.fname}</b>
          <small>{data?.role || "Admin"}</small>
        </div>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={(info) => navigate(info.key)}
        items={[
          { key: "/", icon: <BarChartOutlined />, label: "Statistic" },
          { key: "/user", icon: <UserOutlined />, label: "User" },
          { key: "/product", icon: <AppstoreOutlined />, label: "Product" },
          { key: "/profile", icon: <CircleUserRound />, label: "Profile" },
        ]}
      />
    </Sider>
  )
}

export default memo(Sidebar)
