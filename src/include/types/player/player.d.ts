/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024
*/

// GetPlayerPos

/**
 *
 * @param includePitch Include the player pitch (look up/down) in transform
 * @returns Current player transform
 *
 * The player transform is located at the bottom of the player. The player transform considers heading (looking left and right). Forward is along negative Z axis. Player pitch (looking up and down) does not affect player transform unless includePitch is set to true. If you want the transform of the eye, use GetPlayerCameraTransform() instead.
 */
declare function GetPlayerTransform(this: void, includePitch?: boolean): TTransform;
declare function SetPlayerTransform(this: void, transform: TTransform): void;
// SetPlayerZoom
// SetPlayerGroundVelocity
// GetPlayerCameraTransform
// SetPlayerCameraOffsetTransform
// SetPlayerSpawnTransform
// SetPlayerSpawnHealth
// SetPlayerSpawnTool
// GetPlayerVelocity
// SetPlayerVehicle
// SetPlayerVelocity
declare function GetPlayerVehicle(this: void): number;
// IsPlayerGrounded
// GetPlayerGrabShape
// GetPlayerGrabBody
// ReleasePlayerGrab
// GetPlayerPickShape
// GetPlayerPickBody
// GetPlayerInteractShape
// GetPlayerInteractBody
// SetPlayerScreen
// GetPlayerScreen
// SetPlayerHealth
// GetPlayerHealth
// SetPlayerRegenerationState
// RespawnPlayer
// GetPlayerWalkingSpeed
// SetPlayerWalkingSpeed
// GetPlayerParam
// SetPlayerParam
declare function RegisterTool(this: void, name: string, toolName: string, modelPath: string): void;
// GetToolBody
// SetToolTransform
