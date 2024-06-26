import { TeleporterTool } from "./tool/teleport";
import { DEBUG_MARKER } from "./util/debug";

export function init() {
	TeleporterTool.init();
}

export function tick(delta_time: number) {
	TeleporterTool.tick();
}
