import { Outlet } from "react-router-dom";

const AuthLayout = ({ children }: any) => {
  return (
    <div>
      {children && children}
      {!children && <Outlet />}
    </div>
  );
};

export default AuthLayout;
