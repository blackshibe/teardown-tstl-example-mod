import { TeleporterTool } from "./tool/teleport";
import { TeardownBindings } from "./types/events";

function init() {
	DebugPrint("[TSTL] Hello world!");
	TeleporterTool.init();
}

function tick(delta_time: number) {
	TeleporterTool.tick();
}

TeardownBindings.ConnectInit(init);
TeardownBindings.ConnectTick(tick);
