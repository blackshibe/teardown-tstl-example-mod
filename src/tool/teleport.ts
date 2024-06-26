import { Debug } from "../util/debug";
import { TransformUtil } from "../util/transform";
import { VectorUtil } from "../util/vector";

const MAX_DISTANCE = 500;
const TIME_TO_TELEPORT = 0.1;

type currentTeleport = {
	rotation: TVec;
	startPosition: TVec;
	teleportPosition: TVec;
	progress: number;
} | null;

export namespace TeleporterTool {
	let currentTeleport: currentTeleport = null;

	export function init(this: typeof TeleporterTool) {
		RegisterTool("teleport", "Ts_Teleport", "asset/vox/teleportCube.vox");

		SetBool("game.tool.teleport.enabled", true);
		SetFloat("game.tool.teleport.ammo", 0);

		DebugPrint("[TSTL] Tool ready");
	}

	export function tick(this: typeof TeleporterTool) {
		let delta_time: number = GetTimeStep();
		let player_tool = GetString("game.player.tool");
		if (player_tool !== "teleport") return;
		if (GetPlayerVehicle() !== 0) return;

		let camera_transform = GetCameraTransform();

		// teleporting is smooth and gradual
		if (currentTeleport) {
			let step = delta_time / TIME_TO_TELEPORT;
			currentTeleport.progress += step;

			if (currentTeleport.progress > 1) {
				currentTeleport = null;
				return;
			}

			let position = VectorUtil.lerp(
				currentTeleport.startPosition,
				currentTeleport.teleportPosition,
				currentTeleport.progress
			);

			SetPlayerTransform(Transform(VecAdd(position, Vec(0, 0.1, 0)), camera_transform.rot));

			return;
		}

		let direction = TransformUtil.look_at(camera_transform.pos, TransformUtil.get_direction(camera_transform));
		let [did_hit, dist, normal] = QueryRaycast(camera_transform.pos, direction, MAX_DISTANCE);

		if (did_hit === false) return;

		// i dont get it man
		SetFloat("game.tool.teleport.ammo", dist as number);

		let hit_position = TransformToParentPoint(camera_transform, Vec(0, 0, -dist));
		Debug.box(VecAdd(hit_position, Vec(0, 1, 0)), 1.8, 0.75, 0.75);

		if (!InputPressed("lmb")) return;

		currentTeleport = {
			rotation: camera_transform.rot,
			startPosition: GetPlayerTransform().pos,
			teleportPosition: hit_position,
			progress: 0,
		};
	}
}
