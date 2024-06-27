/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024
*/

// Shoot
// Paint
// PaintRGBA
// MakeHole
// Explosion
// SpawnFire
// GetFireCount
// QueryClosestFire
// QueryAabbFireCount
// RemoveAabbFires

/**
 *
 * @returns Current camera transform
 */
declare function GetCameraTransform(this: void): TTransform;

/**
 *
 * @param transform Desired camera transform
 * @param fov Optional horizontal field of view in degrees (default: 90)
 *
 * Override current camera transform for this frame. Call continuously to keep overriding. When transform of some shape or body used to calculate camera transform, consider use of AttachCameraTo, because you might be using transform from previous physics update (that was on previous frame or even earlier depending on fps and timescale).
 */
declare function SetCameraTransform(this: void, transform: TTransform, fov?: number): void;
// SetCameraOffsetTransform
// AttachCameraTo
// SetPivotClipBody
// ShakeCamera
// SetCameraFov
// SetCameraDof
// PointLight
// SetTimeScale
// SetEnvironmentDefault
// SetEnvironmentProperty
// GetEnvironmentProperty
// SetPostProcessingDefault
// SetPostProcessingProperty
// GetPostProcessingProperty
// DrawLine
// DebugLine
// DebugCross
// DebugWatch
// DebugPrint
// RegisterListenerTo
// UnregisterListener
// TriggerEvent
// LoadHaptic
// CreateHaptic
// PlayHaptic
// PlayHapticDirectional
// HapticIsPlaying
// SetToolHaptic
// StopHaptic
// SetVehicleHealth
// QueryRaycastWater
// AddHeat
// GetGravity
// SetGravity
// GetFps
