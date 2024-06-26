export namespace TransformUtil {
	export function look_at(start: TVec, target: TVec) {
		return VecNormalize(VecSub(target, start));
	}

	export function get_direction(target: TTransform) {
		return TransformToParentPoint(target, Vec(0, 0, -1));
	}
}
