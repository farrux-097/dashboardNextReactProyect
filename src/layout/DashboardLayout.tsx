import { memo } from "react"
import { Layout } from "antd"
import Sidebar from "./components/Sidebar"
import Header from "./components/header/Header"
import { Outlet } from "react-router-dom"

const { Content } = Layout

const DashboardLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout
        style={{
          marginLeft: 250,
          background: "#f5f6fa",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <Header />
        </div>
        <Content
          style={{
            padding: "24px",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default memo(DashboardLayout)
