"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var luamin = require("luamin");
var fs = require("fs");

var comment = fs.readFileSync("./src/comment.lua");
var plugin = {
	beforeEmit: function (program, options, emitHost, result) {
		// Add a comment to the start of all output files
		for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
			var file = result_1[_i];
			file.code = file.code.replace('return require("src.main", ...)', 'require("src.main")');
			file.code = luamin.minify(file.code);
			file.code = "".concat(comment, "\n").concat(file.code);
		}
	},
};
exports.default = plugin;
