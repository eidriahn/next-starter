import Link from "next/link";
import { ExampleQuery } from "../components/ExampleQuery/ExampleQuery";

export const AppPage = () => {
  return (
    <div className="flex flex-col">
      <Link className="underline" href="/products">
        products
      </Link>
      <Link className="underline" href="/account">
        account
      </Link>
      <ExampleQuery />
    </div>
  );
};

export default AppPage;
