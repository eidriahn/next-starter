import React, { type FC, type PropsWithChildren } from "react";
import "../styles/globals.css";
import UrqlProvider from "../components/UrqlProvider/UrqlProvider";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <UrqlProvider>{children}</UrqlProvider>
      </body>
    </html>
  );
};

export default AppLayout;
