import { Login, Signup } from "../components/auth";
import { AuthContainer } from "../pages";

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
];
