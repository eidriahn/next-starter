export interface ServerQuery {
  queryKey: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  queryFn: () => Promise<any>;
}
