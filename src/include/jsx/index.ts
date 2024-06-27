/** @jsx createElement */
/** @jsxFrag TeardownJsx.Fragment */

// this JSX is merely meant to store UI components in a more readable way
// TODO this code is garbage, fix it

function processUiProps(props: JSX.IntrinsicElements[keyof JSX.IntrinsicElements], tag: keyof JSX.IntrinsicElements) {
	if (props.transform !== undefined) {
		UiTranslate(props.transform[0], props.transform[1]);
	}

	if (tag === "text" || tag === "button" || tag === "image" || tag === "rect") {
		if ("font" in props) {
			UiFont(props.font!, props.size || 24);
		}

		if ("color" in props) {
			UiColor(
				props.color ? props.color[0] : 1,
				props.color ? props.color[1] : 1,
				props.color ? props.color[2] : 1
			);
		}

		if ("text" in props) {
			if (tag === "button") {
				let pressed = UiTextButton(props.text, 128, 32);
				if (pressed) {
					if ("callback" in props) props.callback!();
				}
			} else UiText(props.text);
		} else if (tag === "image" && "src" in props) {
			UiImage(props.src);
		} else if (tag === "rect" && "size" in props) {
			UiRect(props.size[0], props.size[1]);
		}
	}
}

namespace TeardownJsx {
	export function render(this: void, element: JSX.Element): TUiTransform | undefined {
		if (!element.tag) return;

		UiPush();
		UiResetColor();

		let props = element.props;
		let children = element.children;

		if (props !== undefined) processUiProps(props, element.tag);
		if (children !== undefined && element.children.length > 0) {
			element.children.forEach((child) => {
				let stack = render(child);
				// moves the next UI element down if wanted
				if (stack) UiTranslate(stack[0], stack[1]);
			});
		}

		UiPop();

		if ("stack" in props) return props.stack;
	}

	export function Fragment(this: typeof TeardownJsx, props: any) {
		// Your implementation for fragment, if needed
		return props.children;
	}

	export function createElement(
		this: typeof TeardownJsx,
		tag: keyof JSX.IntrinsicElements,
		props: any,
		...children: any[]
	): JSX.Element {
		// Your implementation to create a Lua element
		return {
			tag: tag,
			props: props,
			children: children,
		};
	}
}

globalThis.TeardownJsx = TeardownJsx;
