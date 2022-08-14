import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="authUser">
      <h1>Hi i'm AUTH</h1>
      <Outlet />
    </div>
  );
};

export default Auth;
