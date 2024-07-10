import { FC, createContext, useState } from "react";
import { TThemeContext, TContextProps } from "../@types";

export const ThemeContext = createContext<TThemeContext | null>(null);

const ThemeContextProvider: FC<TContextProps> = ({ children }) => {
  const [theme, setTheme] = useState<boolean>(false);
  const toggleTheme = () => {
    setTheme((previous) => !previous);
  };
  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
