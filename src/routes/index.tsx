import { useRoutes } from "react-router-dom";

import MainRoutes from "./MainRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";
import Error from "pages/Error";

export default function ThemeRoutes() {
  return useRoutes([
    MainRoutes,
    AuthenticationRoutes,
    { path: "*", element: <Error /> },
  ]);
}
