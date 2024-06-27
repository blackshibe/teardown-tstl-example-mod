import Options from "./ui/options";
import { DEBUG_MARKER } from "./util/debug";

export function init() {
	DebugPrint(DEBUG_MARKER + "Loaded options.ts");
}

export function tick(delta_time: number) {}

export function draw() {
	TeardownJsx.render(Options());
}
