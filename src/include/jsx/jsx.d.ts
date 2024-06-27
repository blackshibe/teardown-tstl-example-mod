type TColor = [number, number, number];
type TUiTransform = [number, number];

interface baseElementProps {
	transform?: TUiTransform;
	stack?: TUiTransform;
}

interface textElementProps {
	text: string;
	font?: string;
	color?: TColor;
	size?: number;
}

declare namespace JSX {
	export interface IntrinsicElements {
		frame: baseElementProps;
		text: baseElementProps & textElementProps;
		button: baseElementProps &
			textElementProps & {
				callback?: () => void;
			};
		image: baseElementProps & {
			src: string;
		};
		rect: baseElementProps & {
			color: TColor;
			size: TUiTransform;
		};
	}

	export interface Element<T extends keyof IntrinsicElements = keyof IntrinsicElements> {
		tag: T;
		props: IntrinsicElements[T];
		children: Element[];
	}
}
