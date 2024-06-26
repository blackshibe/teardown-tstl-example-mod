--[[
	* transformer/lua/suffix.lua
	* This file does not trigger watchmode changes.

	* This file is included at the end of the main.lua file.
	* It loads the mod's main script and runs it.
]]

local main_functions = require("src.main")
local script_init = main_functions.init
local script_tick = main_functions.tick
local script_update = main_functions.update
local script_draw = main_functions.draw

function init(...)
	if not script_init then
		return
	end

	script_init()
end

function tick(...)
	if not script_tick then
		return
	end

	script_tick()
end

function update(...)
	if not script_update then
		return
	end

	script_update(...)
end

function draw(...)
	if not script_draw then
		return
	end

	script_draw(...)
end
