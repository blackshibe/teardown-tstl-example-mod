/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024
*/

declare function DebugPrint(this: void, data: string): void;

declare function DebugLine(this: void, start: TVec, end: TVec, r?: number, g?: number, b?: number): void;
