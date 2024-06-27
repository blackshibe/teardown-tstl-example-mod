import { TeleporterTool } from "./tool/teleport";
import Options from "./ui/options";
import { DEBUG_MARKER } from "./util/debug";

export function init() {
	DebugPrint(DEBUG_MARKER + "Loaded main.ts");

	TeleporterTool.init();
}

export function tick(delta_time: number) {
	TeleporterTool.tick();
}
