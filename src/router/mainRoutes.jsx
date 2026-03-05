import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../layout/Layout";
import Chat from "../pages/Chat";
import Settings from "../pages/Settings";
import ForgotPassword from "../pages/ForgotPassword";
import CompleteSubmission from "../pages/CompleteSubmission";

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
    },
    {
      path: "forgot-password",
      element: <ForgotPassword/>
    },
    {
      path: "reset-success",
      element: <CompleteSubmission/>
    }
  ],
};

export default mainRoutes;
