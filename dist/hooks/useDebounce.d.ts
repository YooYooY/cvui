declare type callbackFn<T> = (debValue: T) => void;
declare const useDebounce: <T = string>(debounceValue: T, delay: number, cb?: callbackFn<T>) => T;
export default useDebounce;
