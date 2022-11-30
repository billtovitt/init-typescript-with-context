import MainLayout from "layout/MainLayout";

import Dashboard from "pages/Dashboard";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ],
};

export default MainRoutes;
