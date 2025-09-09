import { lazy } from "react"
import { useRoutes } from "react-router-dom"


const DashboardLayout = lazy(()=> import("../layout/DashboardLayout"))
const Auth = lazy(()=> import("../features/auth/pages/Auth"))
const Register = lazy(()=> import("../features/auth/pages/Register"))
const Login = lazy(()=> import("../features/auth/pages/Login"))


// dashboar elementlari 

const User = lazy(()=> import("../features/user/User"))
const Statistic = lazy(()=> import("../features/statistic/Statistic"))
const Product= lazy(()=> import("../features/product/Product"))
const Header= lazy(()=> import("../layout/components/header/Header"))

const AppRoutes = () => {
  return (
    useRoutes([
        {path: "/", element: <Auth/>, children: [
            { element:<DashboardLayout/>, children:[
              {
                index: true , element:<Statistic/>
              },
              {
                path:"user", element:<User/>
              },
              {
                path:"product", element:<Product/>
              },
            ]},
            {
              path:"/header",
              element:<Header/>
            }
        ]},
        {path: "/login", element: <Login/>},
        {path: "/register", element: <Register/>}
    ])
  )
}

export default AppRoutes