/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024
*/

declare type TVec = { __NOMINAL_TVEC: true };

/**
 * Create new vector and optionally initializes it to the provided values. A Vec is equivalent to a regular lua table with three numbers.
 * @returns New vector
 */
declare function Vec(this: void, x?: number, y?: number, z?: number): TVec;

/**
 * Vectors should never be assigned like regular numbers. Since they are implemented with lua tables assignment means two references pointing to the same data. Use this function instead.
 * @returns Copy of org vector
 */
declare function VecCopy(this: void, a: TVec): TVec;

/**
 * Returns the string representation of vector
 * @returns String representation
 */
declare function VecStr(this: void, vector: TVec): string;

declare function VecNormalize(this: void, a: TVec): TVec;
declare function VecScale(this: void, a: TVec, b: number): TVec;
declare function VecAdd(this: void, a: TVec, b: TVec): TVec;
declare function VecSub(this: void, a: TVec, b: TVec): TVec;

// VecDot;
// VecCross;
// VecLerp;
