export declare const debounce: <F extends (...args: any[]) => any>(
  func: F,
  waitForMs: number
) => (...args: Parameters<F>) => ReturnType<F>;
