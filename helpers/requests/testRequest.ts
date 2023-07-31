import { delay } from "../functions/delay";

export const testRequest = async () => {
  await delay(2000);

  return { queryData: "Hello world" };
};
