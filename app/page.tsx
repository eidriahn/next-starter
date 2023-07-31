import Link from "next/link";
import { HydratedExampleQuery } from "../components/ExampleQuery/HydratedExampleQuery";

export const AppPage = () => {
  return (
    <div className="flex flex-col">
      <Link className="underline" href="/products">
        products
      </Link>
      <Link className="underline" href="/account">
        account
      </Link>
      <HydratedExampleQuery />
    </div>
  );
};

export default AppPage;
