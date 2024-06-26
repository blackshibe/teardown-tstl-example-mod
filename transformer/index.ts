import * as ts from "typescript";
import * as tstl from "typescript-to-lua";
import * as luamin from "luamin";
import * as fs from "fs";

var prefix = fs.readFileSync("./src/prefix.lua");
var suffix = fs.readFileSync("./src/suffix.lua");
const plugin: tstl.Plugin = {
	beforeEmit(program: ts.Program, options: tstl.CompilerOptions, emitHost: tstl.EmitHost, result: tstl.EmitFile[]) {
		for (const file of result) {
			// the main file assumes the output being ran is a module.
			// this breaks everything, so it must be replaced.
			// a separate, manual-lua file is used instead.
			file.code = file.code.replace(`return require("src.main", ...)`, ``);
			file.code = `${file.code}\n${suffix}`;

			// minify the code
			file.code = luamin.minify(file.code);

			// add the comment to the start of the file
			file.code = `${prefix}\n${file.code}`;
		}
	},
};

export default plugin;
