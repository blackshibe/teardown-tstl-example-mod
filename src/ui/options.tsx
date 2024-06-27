import { DEBUG_MARKER } from "../util/debug";

const state = {
	position: 0,
	target_position: 0,
};

export default function Options() {
	let list = ["Move to 0", "Move to 1", "Move to 2"];

	let { w, h } = UiCanvasSize();
	let time = GetTimeStep();

	state.position += (state.target_position - state.position) * time * 10;

	return (
		<rect color={[0.2, 0.2, 0.2]} size={[w - 600, h - 512]} transform={[300, 256]}>
			<frame transform={[32, 32]}>
				<text
					text="Mod Options"
					color={[1, 1, 1]}
					transform={[0, 32]}
					font="bold.ttf"
					size={44}
					stack={[0, 32]}
				/>
				<text
					text="This options menu is here just to demonstrate the UI system."
					color={[0.7, 0.7, 0.7]}
					transform={[0, 32]}
					font="bold.ttf"
					size={24}
					stack={[0, 24]}
				/>

				<frame transform={[0, 96]}>
					{...list.map((option, index) => (
						<button
							text={option}
							color={[1, 1, 1]}
							font="bold.ttf"
							size={24}
							stack={[0, 24]}
							callback={() => {
								DebugPrint(DEBUG_MARKER + `Selected option ${index + 1}`);
								state.target_position = index * 128;
							}}
						/>
					))}
				</frame>

				<rect color={[state.position / 256, 0.2, 0.2]} size={[128, 128]} transform={[state.position, 256]} />

				<button
					text={"Leave"}
					color={[1, 1, 1]}
					font="bold.ttf"
					size={24}
					transform={[0, h - 600 - 32]}
					stack={[0, 24]}
					callback={() => {
						Menu();
					}}
				/>
			</frame>
		</rect>
	);
}
