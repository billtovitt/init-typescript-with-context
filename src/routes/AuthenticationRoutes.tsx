import AuthLayout from "layout/AuthLayout";
import Signin from "pages/Auth/signin";
import Signup from "pages/Auth/signup";

const AuthenticationRoutes = {
  path: "/",
  element: <AuthLayout />,
  children: [
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ],
};

export default AuthenticationRoutes;
