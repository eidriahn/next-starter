import Link from "next/link";
import {
  type AllFilmsQuery,
  type AllFilmsQueryVariables,
  AllFilmsDocument,
} from "../graphql/operations";
import { getUrqlClient } from "../lib/urql";
import { ExampleServerComp } from "../components/ExampleServerComp/ExampleServerComp";
import ExampleClientComp from "../components/ExampleClientComp/ExampleClientComp";

async function getAllFilms() {
  const { client } = getUrqlClient();
  const result = await client.query<AllFilmsQuery, AllFilmsQueryVariables>(
    AllFilmsDocument,
    {}
  );
  return result;
}

export const AppPage = async () => {
  const { data } = await getAllFilms();

  return (
    <div className="flex flex-col">
      <Link className="underline" href="/products">
        products
      </Link>
      <Link className="underline" href="/account">
        account
      </Link>
      <div className="flex gap-3">
        <div>
          <h2 className="text-lg font-bold">Server rendered</h2>
          {data?.allFilms?.films?.map((film) => (
            <div key={film?.id}>{film?.title}</div>
          ))}
        </div>

        <ExampleServerComp />
        <ExampleClientComp />
      </div>
    </div>
  );
};

export default AppPage;
