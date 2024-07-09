import { FC } from "react";
import { Outlet } from "react-router-dom";
import ImageAuthBackgroundIcon from "../assets/image-auth-bg.jpg";
const AuthContainer: FC = () => {
  return (
    <div className="h-screen flex">
      <div className="flex-1">
        <img src={ImageAuthBackgroundIcon} alt="" className="h-full" />
      </div>
      <div
        className="flex-1
      flex
      items-center
      justify-center
      "
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AuthContainer;
