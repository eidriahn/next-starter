"use client";

import { useQuery } from "@tanstack/react-query";
import { testRequest } from "../../helpers/requests/testRequest";

export const ExampleQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["example"],
    queryFn: testRequest,
  });
  console.log(`🚀 => isLoading:`, isLoading);
  console.log(`🚀 => data:`, data);

  return <>{data?.queryData}</>;
};
