import { memo } from "react"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom"
import Header from "./components/header/Header"

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="w-[250px] h-screen fixed left-0 top-0">
        <Sidebar />
      </div>
      <div className="flex-1 ml-[250px] flex flex-col h-screen">
        <div className="sticky top-0 z-10 bg-white shadow">
          <Header />
        </div>
        <main className="flex-1 overflow-y-auto p-5 bg-slate-50">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default memo(DashboardLayout)
