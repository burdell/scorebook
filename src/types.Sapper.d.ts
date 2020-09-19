type StringHash = { [name: string]: string }

declare type SapperFetch = (
  input: RequestInfo,
  init?: RequestInit | undefined,
) => Promise<Response>

declare function SapperPreload(
  this: {
    fetch: SapperFetch
  },
  page: { host: string; path: string; params: StringHash; query: StringHash },
  session: any,
)
