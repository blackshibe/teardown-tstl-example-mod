export namespace VectorUtil {
	export function lerp(start: TVec, target: TVec, t: number) {
		return VecAdd(start, VecScale(VecSub(target, start), t));
	}
}
