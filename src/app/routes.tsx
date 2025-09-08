import { lazy } from "react"
import { useRoutes } from "react-router-dom"
const DashboardLayout = lazy(()=> import("../layout/DashboardLayout"))
const Auth = lazy(()=> import("../features/auth/pages/Auth"))
const Register = lazy(()=> import("../features/auth/pages/Register"))
const Login = lazy(()=> import("../features/auth/pages/Login"))

const AppRoutes = () => {
  return (
    useRoutes([
        {path: "/", element: <Auth/>, children: [
            {index: true, element:<DashboardLayout/>}
        ]},
        {path: "/login", element: <Login/>},
        {path: "/register", element: <Register/>}
    ])
  )
}

export default AppRoutes