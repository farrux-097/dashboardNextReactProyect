import { memo, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../features/auth/service/useAuth';
import { removeToken } from '../features/auth/store/authSlice';


const DashboardLayout = () => {


  const { getProfile } = useAuth()
  const { isError, data } = getProfile()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      dispatch(removeToken())
    }
  }, [isError])


  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <Sidebar />
        </div>
      </aside>

      <div className="flex flex-col flex-1">
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-700">Dashboard</h1>
          <span className="text-sm text-gray-500">Welcome, <span className="font-medium text-gray-800">
            {data?.data?.fname || "Guest"}
          </span></span>
        </header>

        <main className="flex-1 p-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <Outlet />
          </div>
        </main>

        <footer className="bg-white border-t border-gray-200 py-4 text-center text-sm text-gray-500">
          &copy; 2025 E-Commerce Dashboard
        </footer>
      </div>
    </div>
  );
};

export default memo(DashboardLayout);