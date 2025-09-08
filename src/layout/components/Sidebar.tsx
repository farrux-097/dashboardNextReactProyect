import { memo } from 'react';

const Sidebar = () => {
  return (
    <div className="w-[250px] h-screen bg-slate-900 text-white">
      <h2>Dashboard</h2>
    </div>
  );
};

export default memo(Sidebar);