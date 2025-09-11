import { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";



const Product = () => {
  return (
    <div className="p-2 w-full">
      <div className="flex items-center gap-4">
          <NavLink className={({isActive}) => `${isActive ? 'text-yellow-500 ': ""}`} end={true} to={""}>All</NavLink>
          <NavLink className={({isActive}) => `${isActive ? 'text-yellow-500 ': ""}`}  to={"category"}>Category</NavLink>
      </div>
         <Outlet/>
    </div>
  );
};

export default memo(Product);
