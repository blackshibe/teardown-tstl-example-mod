/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024
*/

/**
 * Load a sound file from disk
 *
 * @param path Path to the sound file
 * @param nominalDistance The distance in meters this sound is recorded at. Affects attenuation, default is 10.0
 *
 * @returns Sound handle
 */
declare function LoadSound(this: void, path: string, nominalDistance?: number): number;
// UnloadSound
// LoadLoop
// UnloadLoop
// SetSoundLoopUser

/**
 *
 * @param handle Sound Handle
 * @param pos World position as vector. Default is player position.
 * @param volume Playback volume. Default is 1.0
 * @param registerVolume Register position and volume of this sound for GetLastSound. Default is true
 * @param pitch Playback pitch. Default 1.0
 */
declare function PlaySound(
	this: void,
	handle: number,
	pos?: TVec,
	volume?: number,
	registerVolume?: boolean,
	pitch?: number
): number;
// PlaySound
// PlaySoundForUser
// StopSound
// IsSoundPlaying
// GetSoundProgress
// SetSoundProgress
// PlayLoop
// GetSoundLoopProgress
// SetSoundLoopProgress
// PlayMusic
// StopMusic
// IsMusicPlaying
// SetMusicPaused
// GetMusicProgress
// SetMusicProgress
// SetMusicVolume
// SetMusicLowPass
