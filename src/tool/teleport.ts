import { Debug, DEBUG_MARKER } from "../util/debug";
import { TransformUtil } from "../util/transform";
import { VectorUtil } from "../util/vector";

const MAX_DISTANCE = 500;
const TIME_TO_TELEPORT = 0.1;
const SOUNDS = ["asset/sound/haha-1.ogg", "asset/sound/haha-2.ogg", "asset/sound/haha-3.ogg"];

type current_teleport = {
	rotation: TVec;
	startPosition: TVec;
	teleportPosition: TVec;
	progress: number;
} | null;

export namespace TeleporterTool {
	let current_teleport: current_teleport = null;
	let teleport_sounds: number[] = [];

	export function init(this: void) {
		RegisterTool("teleport", "Teleport Tool", "asset/vox/teleportCube.vox");

		SetBool("game.tool.teleport.enabled", true);
		SetFloat("game.tool.teleport.ammo", 0);

		SOUNDS.forEach((element) => {
			teleport_sounds.push(LoadSound(element, 1));
		});

		DebugPrint(DEBUG_MARKER + "Tool ready");
	}

	export function tick(this: void) {
		let delta_time: number = GetTimeStep();
		let player_tool = GetString("game.player.tool");
		if (player_tool !== "teleport") return;
		if (GetPlayerVehicle() !== 0) return;

		let camera_transform = GetCameraTransform();

		// teleporting is smooth and gradual
		if (current_teleport) {
			let step = delta_time / TIME_TO_TELEPORT;
			let player_transform = GetPlayerTransform(true);

			current_teleport.progress += step;

			if (current_teleport.progress > 1) {
				let sound = teleport_sounds[Math.floor(Math.random() * teleport_sounds.length)];
				PlaySound(sound, current_teleport.teleportPosition, 2, true, 0.9 + Math.random() * 0.2);

				current_teleport = null;
				return;
			}

			let position = VectorUtil.lerp(
				current_teleport.startPosition,
				current_teleport.teleportPosition,
				current_teleport.progress
			);

			SetPlayerTransform(Transform(VecAdd(position, Vec(0, 0.1, 0)), player_transform.rot));

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

		current_teleport = {
			rotation: camera_transform.rot,
			startPosition: GetPlayerTransform(true).pos,
			teleportPosition: hit_position,
			progress: 0,
		};
	}
}
