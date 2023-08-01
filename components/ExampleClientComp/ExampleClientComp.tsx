"use client";

import { useAllFilmsQuery } from "../../graphql/films.hooks";

export const ExampleClientComp = () => {
  const [{ data }] = useAllFilmsQuery();

  return (
    <div>
      <h2 className="text-lg font-bold">All client component</h2>

      {data?.allFilms?.films?.map((film) => (
        <div key={film?.id}>{film?.id}</div>
      ))}
    </div>
  );
};

export default ExampleClientComp;
