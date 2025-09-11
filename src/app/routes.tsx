import { lazy } from "react"
import { useRoutes } from "react-router-dom"




const DashboardLayout = lazy(()=> import("../layout/DashboardLayout"))
const Auth = lazy(()=> import("../features/auth/pages/Auth"))
const Register = lazy(()=> import("../features/auth/pages/Register"))
const Login = lazy(()=> import("../features/auth/pages/Login"))
const Otp = lazy(()=> import("../features/auth/pages/Otp"))


// dashboar elementlari 

const User = lazy(()=> import("../features/user/User"))
const Statistic = lazy(()=> import("../features/statistic/Statistic"))
const Product= lazy(()=> import("../features/product/Product"))
const Header= lazy(()=> import("../layout/components/header/Header"))
const Category= lazy(()=> import("../features/product/Category"))
const AllProducts= lazy(()=> import("../features/product/AllProducts"))

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
                  path:"product", element:<Product/>,children:[
                    {
                      index:true, element:<AllProducts/>
                    },
                    {
                      path:"category", element:<Category/>
                    }
                  ]
              },
            ]},
            {
              path:"/header",
              element:<Header/>
            }
        ]},
        {path: "/login", element: <Login/>},
        {path: "/register", element: <Register/>},
        {path: "/otp", element: <Otp/>}
    ])
  )
}

export default AppRoutes