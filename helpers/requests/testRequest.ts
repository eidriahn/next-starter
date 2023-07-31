import { delay } from "../functions/delay";

export const testRequest = async () => {
  await delay(1000);

  return { queryData: "Hello world" };
};
