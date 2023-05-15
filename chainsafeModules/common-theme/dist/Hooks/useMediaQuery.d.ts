export interface Options {
  defaultMatches?: boolean;
  noSsr?: boolean;
  ssrMatchMedia?: (
    query: string
  ) => {
    matches: boolean;
  };
}
export declare const useMediaQuery: <Theme = unknown>(
  queryInput: string | ((theme: Theme) => string),
  options?: Options
) => boolean;
