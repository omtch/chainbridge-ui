/**
 * Like `T & U`, but using the value types from `U` where their properties overlap.
 *
 * @internal
 */
export declare type Overwrite<T, U> = Omit<T, keyof U> & U;
declare type GenerateStringUnion<T> = Extract<
  {
    [Key in keyof T]: true extends T[Key] ? Key : never;
  }[keyof T],
  string
>;
/**
 * Generate a set of string literal types with the given default record `T` and
 * override record `U`.
 *
 * If the property value was `true`, the property key will be added to the
 * string union.
 *
 * @internal
 */
export declare type OverridableStringUnion<T, U = {}> = GenerateStringUnion<
  Overwrite<T, U>
>;
export declare type BreakpointDefaults = Record<
  "xs" | "sm" | "md" | "lg" | "xl" | string,
  true
>;
export interface BreakpointOverrides {}
export declare type Breakpoint = OverridableStringUnion<
  BreakpointDefaults,
  BreakpointOverrides
>;
export declare type BreakpointValues = {
  [key in Breakpoint]: number;
};
export declare const keys: Breakpoint[];
export interface IBreakpoints {
  keys: Breakpoint[];
  values: BreakpointValues;
  up: (key: Breakpoint | number) => string;
  down: (key: Breakpoint | number) => string;
  between: (start: Breakpoint | number, end: Breakpoint | number) => string;
  only: (key: Breakpoint) => string;
  width: (key: Breakpoint) => number;
}
export declare type BreakpointsOptions = Partial<
  {
    unit: string;
    step: number;
  } & IBreakpoints
>;
export declare const createBreakpoints: (
  breakpoints: BreakpointsOptions
) => IBreakpoints;
export {};
