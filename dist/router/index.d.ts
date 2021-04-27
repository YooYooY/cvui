export declare type RouterReturnType = ReturnType<typeof useHashRouter>;
declare function useHashRouter(): {
    route: string;
    module: Function & {
        exampleName: string;
        defaultProps: Record<string, any>[];
    };
    routes: string[];
    push: (name: string) => string;
};
export default useHashRouter;
