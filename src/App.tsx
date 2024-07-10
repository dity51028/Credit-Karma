import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./constants/routes";
import ThemeContextProvider from "./context/ThemeContext";

export const App: FC = () => {
  const router = createBrowserRouter(routes);
  return (
    <>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </>
  );
};
