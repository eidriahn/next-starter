"use client";

import { useQuery } from "@tanstack/react-query";
import { testRequest } from "../../helpers/requests/testRequest";

export const ExampleQuery = () => {
  const { data } = useQuery({
    queryKey: ["example"],
    queryFn: testRequest,
  });

  return <>{data?.queryData}</>;
};
