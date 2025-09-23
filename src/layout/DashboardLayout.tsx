import { memo, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../features/auth/service/useAuth';
import { removeToken } from '../features/auth/store/authSlice';

const DashboardLayout = () => {
  const { getProfile } = useAuth();
  const { isError, data } = getProfile();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      dispatch(removeToken());
    }
  }, [isError, dispatch]);

  return (
    <div className="flex bg-gray-50">
      {/* === Sidebar: fixed, chap tomonda qotadi === */}
      <aside
        className="
          fixed top-0 left-0
          w-[240px] h-screen
          bg-white border-r border-gray-200 shadow-md
        "
      >
        <Sidebar />
      </aside>

      {/* === Main kontent (scroll faqat shu qismda) === */}
      <div
        className="
          flex flex-col flex-1
          ml-[240px]        /* Sidebar kengligi bo‘shliq */
          min-h-screen
        "
      >
        {/* Header: yuqorida qotadi */}
        <header
          className="
            bg-white border-b border-gray-200
            px-6 py-4 flex items-center justify-between
            sticky top-0 z-40 shadow-sm
          "
        >
          <h1 className="text-lg font-semibold text-gray-800 tracking-wide">
            Dashboard
          </h1>
          <span className="text-sm text-gray-600">
            Welcome,&nbsp;
            <span className="font-medium text-gray-800">
              {data?.data?.fname || 'Guest'}
            </span>
          </span>
        </header>

        {/* Scrollable main area */}
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
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
