import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// カスタムテーマの定義
const theme = createTheme({
  palette: {
    primary: {
      main: "#00bcd4",
      contrastText: "#fff",
    },
    secondary: {
      main: "#b2ebf2",
      contrastText: "#00bcd4",
    },
    background: {
      default: "#fff",
      paper: "#e0f7fa",
    },
    common: {
      white: "#fff",
      black: "#000",
    },
    error: {
      main: "#FF0000", // エラーカラー
    },
    warning: {
      main: "#FFC107", // 警告カラー
    },
    info: {
      main: "#2196F3", // 情報カラー
    },
    success: {
      main: "#4CAF50", // 成功カラー
    },
    text: {
      primary: "#000000", // テキストカラー
      secondary: "#757575", // セカンダリーテキストカラー
    },
  },
});

export default function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
