export declare type cancelFn = (msg?: any) => void;
export declare type DelayObj = ReturnType<typeof getDelay>;
export declare const delay: (ms: number) => Promise<unknown>;
export declare const getDelay: () => {
    cancel: cancelFn;
    delay: (ms: number) => Promise<cancelFn>;
};
