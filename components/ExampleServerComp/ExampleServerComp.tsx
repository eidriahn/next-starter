import { Suspense } from "react";
import {
  type AllFilmsQuery,
  type AllFilmsQueryVariables,
  AllFilmsDocument,
} from "../../graphql/operations";
import { getUrqlClient } from "../../lib/urql";

async function getAllFilms() {
  const { client } = getUrqlClient();
  const result = await client.query<AllFilmsQuery, AllFilmsQueryVariables>(
    AllFilmsDocument,
    {}
  );
  return result;
}

export const ExampleServerComp = async () => {
  const { data } = await getAllFilms();

  return (
    // needs to be wrapped in a suspense to avoid errors
    <Suspense>
      <div>
        <h2 className="text-lg font-bold">Server component</h2>

        {data?.allFilms?.films?.map((film) => (
          <div key={film?.id}>{film?.releaseDate}</div>
        ))}
      </div>
    </Suspense>
  );
};
