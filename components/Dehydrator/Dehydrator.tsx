import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../../app/getQueryClient";
import { type FC, type PropsWithChildren } from "react";
import { type ServerQuery } from "../../helpers/types/types";

interface DehydratorProps {
  queries: ServerQuery[];
}

export const Dehydrator: FC<PropsWithChildren<DehydratorProps>> = async ({
  queries,
  children,
}) => {
  const queryClient = getQueryClient();
  await Promise.all(
    queries.map((query) =>
      queryClient.prefetchQuery(query.queryKey, query.queryFn)
    )
  );
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};
