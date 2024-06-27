/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024
*/

// QueryRequire;
// QueryRejectVehicle;
// QueryRejectBody;
// QueryRejectShape;
// QueryRejectShapes;
declare function QueryRaycast(
	this: void,
	start: TVec,
	direction: TVec,
	maxDistance: number
): LuaMultiReturn<[hit: false]> | LuaMultiReturn<[hit: true, distance: number, normal: TVec, shape: number]>;

// QueryRaycastRope;
// QueryClosestPoint;
// QueryAabbShapes;
// QueryAabbBodies;
// QueryPath;
// AbortPath;
// GetPathState;
// GetPathLength;
// GetPathPoint;
// GetLastSound;
// IsPointInWater;
// GetWindVelocity;
