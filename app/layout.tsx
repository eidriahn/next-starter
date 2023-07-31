import React, { type FC, type PropsWithChildren } from "react";
import "../styles/globals.css";
import AppProviders from "./providers";
import { Dehydrator } from "../components/Dehydrator/Dehydrator";
import { type ServerQuery } from "../helpers/types/types";
import { testRequest } from "../helpers/requests/testRequest";

// these will be pre-fetched every time you go to the / page
// to make use of that pre-fetch you just use the component
// containing the query with same params lower in the React tree
const appServerQueries: ServerQuery[] = [
  { queryFn: testRequest, queryKey: ["example"] },
];

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <Dehydrator queries={appServerQueries}>{children}</Dehydrator>
        </AppProviders>
      </body>
    </html>
  );
};

export default AppLayout;
