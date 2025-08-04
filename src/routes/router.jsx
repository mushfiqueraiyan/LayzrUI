import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import DocLayout from "../layouts/DocLayout";
import Docs from "../Docs/Docs";
import Installation from "../pages/GettingStarted/Installation";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminLayout from "../layouts/AdminLayout";
import NormalBtn from "../components/Button/NormalButton/NormalBtn";
import AnimatedBtn from "../components/Button/AnimatedButton/AnimatedBtn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/docs",
    element: <DocLayout />,
    children: [
      {
        index: true,
        element: <Docs />,
      },
      {
        path: "/docs/installation",
        element: <Installation />,
      },
      {
        path: "/docs/components/button",
        element: <NormalBtn />,
      },
      {
        path: "/docs/components/AnimatedButton",
        element: <AnimatedBtn />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
    ],
  },
]);
