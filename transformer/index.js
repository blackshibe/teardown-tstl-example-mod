"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var luamin = require("luamin");
var fs = require("fs");
var prefix = fs.readFileSync("./transformer/lua/prefix.lua");
var suffix = fs.readFileSync("./transformer/lua/suffix.lua");
var PATTERN = /return require\(".+", \.\.\.\)/;
var plugin = {
	beforeEmit: function (program, options, emitHost, result) {
		for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
			var file = result_1[_i];
			// the main file assumes the output being ran is a module.
			// this breaks everything, so it must be replaced.
			// a separate, manual-lua file is used instead.
			file.code = file.code.replace(PATTERN, "");
			file.code = "".concat(file.code, "\n").concat(suffix);
			// minify the code
			file.code = luamin.minify(file.code);
			// add the comment to the start of the file
			file.code = "".concat(prefix, "\n").concat(file.code);
			// adds support for compiling the options file too
			var file_name = file.outputPath.replace(".lua", "").split("\\").pop();
			file.code = file.code.replace("$$FILE$$", "src.".concat(file_name));
		}
	},
};
exports.default = plugin;
