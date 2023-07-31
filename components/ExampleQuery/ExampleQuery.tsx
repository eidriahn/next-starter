"use client";

import { useQuery } from "@tanstack/react-query";
import { testRequest } from "../../helpers/requests/testRequest";
import { type FC } from "react";

interface ExampleQueryProps {
  queryKey: string[];
}

export const ExampleQuery: FC<ExampleQueryProps> = ({ queryKey }) => {
  const { data } = useQuery({ queryKey, queryFn: testRequest });

  return <>{data?.queryData}</>;
};
