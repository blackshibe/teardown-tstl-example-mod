import { TeleporterTool } from "./tool/teleport";
import { DebugDomain } from "./util/debug";

DebugPrint(DebugDomain.LOG, "Connecting events...");

export function init() {
	DebugPrint(DebugDomain.LOG, "Hello world!");
	TeleporterTool.init();
}

export function tick(delta_time: number) {
	TeleporterTool.tick();
}
