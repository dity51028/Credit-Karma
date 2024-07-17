import { Login, Signup } from "../components";
import { NavBarContainer } from "../components/navbar";
import { AuthContainer, DashboardContainer } from "../pages";

export const routes = [
  {
    path: "auth",
    element: <AuthContainer />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },

  {
    path: "/",
    element: <DashboardContainer />,
  },
];
