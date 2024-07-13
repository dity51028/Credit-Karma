import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./constants/routes";
import ThemeContextProvider from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App: FC = () => {
  const router = createBrowserRouter(routes);
  return (
    <>
      <ThemeContextProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </ThemeContextProvider>
    </>
  );
};
