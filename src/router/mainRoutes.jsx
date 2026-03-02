import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../layout/Layout";
import Chat from "../pages/Chat";
import Settings from "../pages/Settings";

const mainRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Navigate to="login" replace />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "app",
      element: <Chat />
    },
    {
      path: "settings",
      element: <Settings />
    }
  ],
};

export default mainRoutes;
