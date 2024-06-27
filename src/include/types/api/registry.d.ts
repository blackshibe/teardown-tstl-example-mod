/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024
*/

// registry functions
declare function SetBool(this: void, key: string, value: boolean): void;
declare function SetFloat(this: void, key: string, value: number): void;
declare function SetString(this: void, key: string, value: string): void;

declare function GetBool(this: void, key: string): boolean;
declare function GetFloat(this: void, key: string): number;
declare function GetString(this: void, key: string): string;

// ClearKey
/**
 * Clears a key from the registry.
 *
 * @param key The key to clear.
 * @returns void
 */
declare function ListKeys(this: void, prefix: string): string[];
// HasKey
// SetInt
// GetInt
// SetFloat
// GetFloat
// SetBool
// GetBool
// SetString
// GetString
// SetColor
// GetColor
// GetTranslatedStringByKey
// HasTranslationByKey
// LoadLanguageTable
// GetUserNickname
