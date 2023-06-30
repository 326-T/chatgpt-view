"use client";
import { DrawerProvider } from "@/context/DrawerProvider";
import CustomThemeProvider from "@/context/CustomThemeProvider";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomThemeProvider>
          <DrawerProvider>{children}</DrawerProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
