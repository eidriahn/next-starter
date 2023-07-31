import React, { type FC, type PropsWithChildren } from "react";
import "../styles/globals.css";
import AppProviders from "./providers";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
};

export default AppLayout;
