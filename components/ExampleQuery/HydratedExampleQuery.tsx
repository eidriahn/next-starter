import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../../app/getQueryClient";
import { testRequest } from "../../helpers/requests/testRequest";
import { ExampleQuery } from "./ExampleQuery";

const queryKey = ["getData"];

export const HydratedExampleQuery = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(queryKey, testRequest);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ExampleQuery queryKey={queryKey} />
    </Hydrate>
  );
};
