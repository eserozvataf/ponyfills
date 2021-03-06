declare function arrayFromPolyfill(source: any, mapFn?: any, thisArg?: any): any;
declare const arrayFrom: {
    <T>(arrayLike: ArrayLike<T>): T[];
    <T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
    <T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
    <T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
} | typeof arrayFromPolyfill;
export { arrayFrom as default, arrayFromPolyfill, };
