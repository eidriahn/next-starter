"use client";

import { type FC, type PropsWithChildren } from "react";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";

const client = new Client({
  url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  exchanges: [cacheExchange, fetchExchange],
});

export const UrqlProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider value={client}>{children}</Provider>;
};

export default UrqlProvider;
