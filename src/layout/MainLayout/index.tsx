import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { setCookie } from "typescript-cookie";
import { useGlobalContext } from "utils/useGlobalContext";

const MainLayout = ({ children }: any) => {
  const navigate = useNavigate();
  const { setData } = useGlobalContext();

  const isAuthentication = () => {
    setCookie("any-key", "any value");
    setData("Hello World");
    navigate("../../signin");
  };
  useEffect(() => {
    isAuthentication();

    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {children && children}
      {!children && <Outlet />}
    </div>
  );
};

export default MainLayout;
