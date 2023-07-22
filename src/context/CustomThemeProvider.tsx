import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// カスタムテーマの定義
const theme = createTheme({
  palette: {
    primary: {
      main: "#202123",
      contrastText: "#fff",
    },
    secondary: {
      main: "#343441",
      contrastText: "#fff",
    },
    background: {
      default: "#fff",
      paper: "#f7f7f8",
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
      main: "#19C37D", // 情報カラー
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
