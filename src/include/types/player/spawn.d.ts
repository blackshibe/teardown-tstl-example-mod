/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024
*/

// Spawn

/**
 * Start a level
 * @param mission An identifier of your choice
 * @param path Path to level XML file
 * @param layers Active layers. Default is no layers.
 * @param passThrough If set, loading screen will have no text and music will keep playing
 *
 */
declare function StartLevel(this: void, mission: string, path: string, layers?: string, passThrough?: boolean): void;

declare function Menu(this: void): void;
