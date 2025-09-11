import { memo } from "react"
import { Layout, Menu } from "antd"
import {
  BarChartOutlined,
  UserOutlined,
  AppstoreOutlined,
} from "@ant-design/icons"
import { useNavigate, useLocation } from "react-router-dom"

const { Sider } = Layout

const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Sider
      width={250}
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        background: "#fff",
        position: "fixed",    // ← qotib turadi
        left: 0,
        top: 0,
        bottom: 0,
        boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
        zIndex: 100,
      }}
    >
      <div
        className="h-16 flex items-center justify-center text-indigo-600 text-2xl font-bold"
      >
        Dashboard
      </div>

      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={(info) => navigate(info.key)}
        items={[
          { key: "/", icon: <BarChartOutlined />, label: "Statistic" },
          { key: "/user", icon: <UserOutlined />, label: "User" },
          { key: "/product", icon: <AppstoreOutlined />, label: "Product" },
        ]}
      />
    </Sider>
  )
}

export default memo(Sidebar)
