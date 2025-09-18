import { memo, useEffect } from "react"
import { Layout } from "antd"
import Sidebar from "./components/Sidebar"
import Header from "./components/header/Header"
import { Outlet } from "react-router-dom"
import { useAuth } from "../features/auth/service/useAuth"
import { useDispatch } from "react-redux"
import { removeToken } from "../features/auth/store/authSlice"

const { Content } = Layout

const DashboardLayout = () => {
    const { getAuthMe } = useAuth();
  const {isError, data: user } = getAuthMe();
  const dis = useDispatch();

  useEffect(() => {
    if (isError) {
      dis(removeToken());
    }
  }, [isError]);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar data={user?.data} />
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
          <Header data={user?.data} />
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
