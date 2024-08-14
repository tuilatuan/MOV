"use client";

import useSWR from "swr";
import type { SWRConfiguration, SWRResponse } from "swr";

type FetcherFn<Data> = (...args: any[]) => Promise<Data>;

const defaultFetcher = (url: string) => fetch(url).then((res) => res.json());
export function useApi<Data = any, Error = any>(
  endpoint: string,
  fetcher: FetcherFn<Data> = defaultFetcher,
  config?: SWRConfiguration,
): SWRResponse<Data, Error> {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.example.com'";
  const fullUrl = `${baseUrl}${endpoint}`;
  return useSWR<Data, Error>(fullUrl, fetcher, config);
}
