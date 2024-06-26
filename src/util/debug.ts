// domains are mostly useless. This is just for visual flare.
export const DEBUG_MARKER = "[TypeScriptToLuaMod] ";

export namespace Debug {
	export function box(center: TVec, height: number, width: number, length: number) {
		let halfHeight = height / 2;
		let halfWidth = width / 2;
		let halfLength = length / 2;

		DebugLine(
			VecAdd(center, Vec(halfLength, halfHeight, halfWidth)),
			VecAdd(center, Vec(halfLength, halfHeight, -halfWidth))
		);
		DebugLine(
			VecAdd(center, Vec(halfLength, halfHeight, halfWidth)),
			VecAdd(center, Vec(-halfLength, halfHeight, halfWidth))
		);
		DebugLine(
			VecAdd(center, Vec(-halfLength, halfHeight, halfWidth)),
			VecAdd(center, Vec(-halfLength, halfHeight, -halfWidth))
		);
		DebugLine(
			VecAdd(center, Vec(-halfLength, halfHeight, -halfWidth)),
			VecAdd(center, Vec(halfLength, halfHeight, -halfWidth))
		);

		DebugLine(
			VecAdd(center, Vec(halfLength, -halfHeight, halfWidth)),
			VecAdd(center, Vec(halfLength, -halfHeight, -halfWidth))
		);
		DebugLine(
			VecAdd(center, Vec(halfLength, -halfHeight, halfWidth)),
			VecAdd(center, Vec(-halfLength, -halfHeight, halfWidth))
		);
		DebugLine(
			VecAdd(center, Vec(-halfLength, -halfHeight, halfWidth)),
			VecAdd(center, Vec(-halfLength, -halfHeight, -halfWidth))
		);
		DebugLine(
			VecAdd(center, Vec(-halfLength, -halfHeight, -halfWidth)),
			VecAdd(center, Vec(halfLength, -halfHeight, -halfWidth))
		);

		DebugLine(
			VecAdd(center, Vec(halfLength, halfHeight, halfWidth)),
			VecAdd(center, Vec(halfLength, -halfHeight, halfWidth))
		);
		DebugLine(
			VecAdd(center, Vec(halfLength, halfHeight, -halfWidth)),
			VecAdd(center, Vec(halfLength, -halfHeight, -halfWidth))
		);
		DebugLine(
			VecAdd(center, Vec(-halfLength, halfHeight, halfWidth)),
			VecAdd(center, Vec(-halfLength, -halfHeight, halfWidth))
		);
		DebugLine(
			VecAdd(center, Vec(-halfLength, halfHeight, -halfWidth)),
			VecAdd(center, Vec(-halfLength, -halfHeight, -halfWidth))
		);
	}
}
