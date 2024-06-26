"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var luamin = require("luamin");
var fs = require("fs");
var prefix = fs.readFileSync("./src/prefix.lua");
var suffix = fs.readFileSync("./src/suffix.lua");
var plugin = {
    beforeEmit: function (program, options, emitHost, result) {
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var file = result_1[_i];
            // the main file assumes the output being ran is a module.
            // this breaks everything, so it must be replaced.
            // a separate, manual-lua file is used instead.
            file.code = file.code.replace("return require(\"src.main\", ...)", "");
            file.code = "".concat(file.code, "\n").concat(suffix);
            // minify the code
            file.code = luamin.minify(file.code);
            // add the comment to the start of the file
            file.code = "".concat(prefix, "\n").concat(file.code);
        }
    },
};
exports.default = plugin;
