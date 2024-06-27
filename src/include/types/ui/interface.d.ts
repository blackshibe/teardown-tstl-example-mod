/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024
*/

declare function UiMakeInteractive(this: void, _____________________________TODO: unknown): void;
declare function UiPush(this: void): void;
declare function UiPop(this: void): void;
declare function UiWidth(this: void, _____________________________TODO: unknown): void;
declare function UiHeight(this: void, _____________________________TODO: unknown): void;
declare function UiCenter(this: void): number;
declare function UiMiddle(this: void): number;
declare function UiColor(this: void, r: number, g: number, b: number): void;
declare function UiColorFilter(this: void, _____________________________TODO: unknown): void;
/**
 * Resets the ui context's color, outline color, shadow color, color filter to default values.
Remarkable that if some component, lets call it "parent", wants to hide everyting in it's scope,
it is possible that a child which uses UiResetColor would ignore the hide logic, if its implemented via changing opacity. 
 */
declare function UiResetColor(this: void): void;
/**
 *
 * @param x X component
 * @param y Y component
 */
declare function UiTranslate(this: void, x: number, y: number): void;
declare function UiRotate(this: void, _____________________________TODO: unknown): void;
declare function UiScale(this: void, _____________________________TODO: unknown): void;
declare function UiGetScale(this: void, _____________________________TODO: unknown): void;
declare function UiClipRect(this: void, _____________________________TODO: unknown): void;
declare function UiWindow(this: void, _____________________________TODO: unknown): void;
declare function UiGetCurrentWindow(this: void, _____________________________TODO: unknown): void;
declare function UiIsInCurrentWindow(this: void, _____________________________TODO: unknown): void;
declare function UiIsRectFullyClipped(this: void, _____________________________TODO: unknown): void;
declare function UiIsInClipRegion(this: void, _____________________________TODO: unknown): void;
declare function UiIsFullyClipped(this: void, _____________________________TODO: unknown): void;
declare function UiSafeMargins(this: void, _____________________________TODO: unknown): void;
declare function UiCanvasSize(this: void): { w: number; h: number };
declare function UiAlign(this: void, _____________________________TODO: unknown): void;
declare function UiTextAlignment(this: void, _____________________________TODO: unknown): void;
declare function UiModalBegin(this: void, _____________________________TODO: unknown): void;
declare function UiModalEnd(this: void, _____________________________TODO: unknown): void;
declare function UiDisableInput(this: void, _____________________________TODO: unknown): void;
declare function UiEnableInput(this: void, _____________________________TODO: unknown): void;
declare function UiReceivesInput(this: void, _____________________________TODO: unknown): void;
declare function UiGetMousePos(this: void, _____________________________TODO: unknown): void;
declare function UiGetCanvasMousePos(this: void): LuaMultiReturn<[number, number]>;
declare function UiIsMouseInRect(this: void, _____________________________TODO: unknown): void;
declare function UiWorldToPixel(this: void, _____________________________TODO: unknown): void;
declare function UiPixelToWorld(this: void, _____________________________TODO: unknown): void;
declare function UiGetCursorPos(this: void, _____________________________TODO: unknown): void;
declare function UiBlur(this: void, _____________________________TODO: unknown): void;
/**
 * @param font Path to TTF font file
 * @param size Font size (10 to 100)
 */
declare function UiFont(this: void, font: string, size?: number): void;
declare function UiFontHeight(this: void, _____________________________TODO: unknown): void;
declare function UiText(this: void, _____________________________TODO: unknown): void;
declare function UiTextUniformHeight(this: void, _____________________________TODO: unknown): void;
declare function UiGetTextSize(this: void, _____________________________TODO: unknown): void;
declare function UiMeasureText(this: void, _____________________________TODO: unknown): void;
declare function UiGetSymbolsCount(this: void, _____________________________TODO: unknown): void;
declare function UiTextSymbolsSub(this: void, _____________________________TODO: unknown): void;
declare function UiWordWrap(this: void, _____________________________TODO: unknown): void;
declare function UiTextLineSpacing(this: void, _____________________________TODO: unknown): void;
declare function UiTextOutline(this: void, _____________________________TODO: unknown): void;
declare function UiTextShadow(this: void, _____________________________TODO: unknown): void;
declare function UiRect(this: void, w: number, h: number): void;
declare function UiRectOutline(this: void, _____________________________TODO: unknown): void;
declare function UiRoundedRect(this: void, _____________________________TODO: unknown): void;
declare function UiRoundedRectOutline(this: void, _____________________________TODO: unknown): void;
declare function UiCircle(this: void, _____________________________TODO: unknown): void;
declare function UiCircleOutline(this: void, _____________________________TODO: unknown): void;
declare function UiImage(this: void, _____________________________TODO: unknown): void;
declare function UiUnloadImage(this: void, _____________________________TODO: unknown): void;
declare function UiHasImage(this: void, _____________________________TODO: unknown): void;
declare function UiGetImageSize(this: void, src: string): LuaMultiReturn<[number, number]>;
declare function UiImageBox(this: void, _____________________________TODO: unknown): void;
declare function UiSound(this: void, _____________________________TODO: unknown): void;
declare function UiSoundLoop(this: void, _____________________________TODO: unknown): void;
declare function UiMute(this: void, _____________________________TODO: unknown): void;
declare function UiButtonImageBox(this: void, _____________________________TODO: unknown): void;
declare function UiButtonHoverColor(this: void, _____________________________TODO: unknown): void;
declare function UiButtonPressColor(this: void, _____________________________TODO: unknown): void;
declare function UiButtonPressDist(this: void, _____________________________TODO: unknown): void;
declare function UiButtonTextHandling(this: void, _____________________________TODO: unknown): void;

/**
 *
 * @param this
 * @param text Text on button
 * @param w Button width
 * @param h Button height
 * @returns True if user clicked button
 */
declare function UiTextButton(this: void, text: string, w: number, h: number): boolean;
declare function UiImageButton(this: void, _____________________________TODO: unknown): void;
declare function UiBlankButton(this: void, _____________________________TODO: unknown): void;
declare function UiSlider(this: void, _____________________________TODO: unknown): void;
declare function UiSliderHoverColorFilter(this: void, _____________________________TODO: unknown): void;
declare function UiSliderThumbSize(this: void, _____________________________TODO: unknown): void;
declare function UiGetScreen(this: void, _____________________________TODO: unknown): void;
declare function UiNavComponent(this: void, _____________________________TODO: unknown): void;
declare function UiIgnoreNavigation(this: void, _____________________________TODO: unknown): void;
declare function UiResetNavigation(this: void, _____________________________TODO: unknown): void;
declare function UiNavSkipUpdate(this: void, _____________________________TODO: unknown): void;
declare function UiIsComponentInFocus(this: void, _____________________________TODO: unknown): void;
declare function UiNavGroupBegin(this: void, _____________________________TODO: unknown): void;
declare function UiNavGroupEnd(this: void, _____________________________TODO: unknown): void;
declare function UiNavGroupSize(this: void, _____________________________TODO: unknown): void;
declare function UiForceFocus(this: void, _____________________________TODO: unknown): void;
declare function UiFocusedComponentId(this: void, _____________________________TODO: unknown): void;
declare function UiFocusedComponentRect(this: void, _____________________________TODO: unknown): void;
declare function UiGetItemSize(this: void, _____________________________TODO: unknown): void;
declare function UiAutoTranslate(this: void, _____________________________TODO: unknown): void;
declare function UiBeginFrame(this: void, _____________________________TODO: unknown): void;
declare function UiResetFrame(this: void, _____________________________TODO: unknown): void;
declare function UiFrameOccupy(this: void, _____________________________TODO: unknown): void;
declare function UiEndFrame(this: void, _____________________________TODO: unknown): void;
declare function UiFrameSkipItem(this: void, _____________________________TODO: unknown): void;
declare function UiGetFrameNo(this: void, _____________________________TODO: unknown): void;
declare function UiGetLanguage(this: void, _____________________________TODO: unknown): void;
declare function UiSetCursorState(this: void, _____________________________TODO: unknown): void;
