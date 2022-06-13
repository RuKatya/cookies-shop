import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="authUser">
      <Outlet />
    </div>
  );
};

export default Auth;
