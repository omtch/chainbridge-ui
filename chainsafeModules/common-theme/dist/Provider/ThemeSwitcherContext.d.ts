import * as React from "react";
import { ITheme } from "../Create/CreateTheme";
import "reset-css";
import "simplebar/dist/simplebar.min.css";
declare type ThemeSwitcherContext = {
  themeKey: string;
  availableThemes: string[];
  setTheme(themeName: string): void;
};
declare const ThemeSwitcherContext: React.Context<
  ThemeSwitcherContext | undefined
>;
declare type ThemeSwitcherProps = {
  children: React.ReactNode;
  themes: Record<string, ITheme>;
};
declare const ThemeSwitcher: React.FC<ThemeSwitcherProps>;
declare const useThemeSwitcher: () => ThemeSwitcherContext;
export { ThemeSwitcher, useThemeSwitcher };
