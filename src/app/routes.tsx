import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Product from "../features/product/pages/Product";

// Layout
const DashboardLayout = lazy(() => import("../layout/DashboardLayout"));

// Auth pages
const Auth = lazy(() => import("../features/auth/pages/Auth"));
const Register = lazy(() => import("../features/auth/pages/Register"));
const Login = lazy(() => import("../features/auth/pages/Login"));
const Otp = lazy(() => import("../features/auth/pages/Otp"));

// Dashboard elementlari
const User = lazy(() => import("../features/user/User"));
const Statistic = lazy(() => import("../features/statistic/Statistic"));
const Header = lazy(() => import("../layout/components/header/Header"));
const Categories = lazy(() => import("../features/product/pages/Categories"));
const Dashboard = lazy(() => import("../features/product/pages/Dashboard"));


const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          
          element: <DashboardLayout />,
          children: [
            { index: true, element: <Statistic /> },
            { path: "user", element: <User /> },
            {
              path: "product",
              element: <Product />,
              children: [
                { index: true, element: <Dashboard /> },
                { path: "categories", element: <Categories /> },
              ],
            },
          ],
        },
      ],
    },

    { path: "/header", element: <Header /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/otp", element: <Otp /> },
  ]);
};

export default AppRoutes;
