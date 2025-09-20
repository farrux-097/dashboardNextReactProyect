import { lazy } from "react"
import { useRoutes } from "react-router-dom"
import Statistics from "../features/statistics/pages/Statistics"
import User from "../features/user/pages/User"
import Product from "../features/product/pages/Product"
import Otp from "../features/auth/pages/Otp"
import Categories from "../features/product/pages/Categories"
import Dashboard from "../features/product/pages/Dashboard"
import Profile from "../features/profile/pages/Profile"
const DashboardLayout = lazy(() => import("../layout/DashboardLayout"))
const Auth = lazy(() => import("../features/auth/pages/Auth"))
const Register = lazy(() => import("../features/auth/pages/Register"))
const Login = lazy(() => import("../features/auth/pages/Login"))

const AppRoutes = () => {
  return (
    useRoutes([
      {
        path: "/", element: <Auth />, children: [
          {
            path: "/", element: <DashboardLayout />, children: [
              { index: true, element: <Statistics /> },
              { path: "user", element: <User /> },
              {
                path: "product", element: <Product />, children: [
                  { index: true, element: <Dashboard /> },
                  { path: "categories", element: <Categories /> },
                ]
              },
              { path: "profile", element: <Profile /> }
            ]
          }
        ]
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/otp", element: <Otp /> },
    ])
  )
}

export default AppRoutes