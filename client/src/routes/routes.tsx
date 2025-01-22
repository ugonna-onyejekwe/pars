import HomePage from "@/pages/HomePage";
import UserPage from "@/pages/UserPage";
import { createBrowserRouter } from "react-router-dom";
import PlainDefaultLayout from "./PlainDefaultLayout";
import SecondaryLayout from "./SecondaryLayout";
import AuthPage from "@/pages/Auth";

export const router = createBrowserRouter([
  {
    element: <PlainDefaultLayout />,
    children: [
      {
        path: "/",
        element: <AuthPage />,
      },
    ],
  },

  {
    element: <SecondaryLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/user/:id",
        element: <UserPage />,
      },
    ],
  },
]);
