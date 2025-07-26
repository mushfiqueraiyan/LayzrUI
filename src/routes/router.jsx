import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import DocLayout from "../layouts/DocLayout";
import Docs from "../Docs/Docs";
import NormalBtn from "../components/Button/NormalBtn";
import Installation from "../pages/GettingStarted/Installation";

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
    ],
  },
]);
