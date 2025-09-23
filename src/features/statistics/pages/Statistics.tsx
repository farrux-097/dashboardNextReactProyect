import { memo } from "react";
import UsersSta from "../components/users-sta/users-sta";
import VerticalSta from "../components/vertical-sta/vertical-sta";
import PieSta from "../components/pie-sta/pie-sta";

const Statistic = () => {
  return (
    <>
      <title>Dashboard | Statistic</title>
        <div className="mb-10">
          <h2 className="text-center mt-2 mb-4 font-semibold text-lg">
            Month New info Numbers
          </h2>
          <UsersSta />
        </div>
        <div className="grid grid-cols-2 gap-5 h-[40vh]">
          <PieSta />
          <VerticalSta />
        </div>
    </>
  );
};

export default memo(Statistic);