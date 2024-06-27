import * as ts from "typescript";
import * as tstl from "typescript-to-lua";
import * as luamin from "luamin";
import * as fs from "fs";

var prefix = fs.readFileSync("./transformer/lua/prefix.lua");
var suffix = fs.readFileSync("./transformer/lua/suffix.lua");

const PATTERN = /return require\(".+", \.\.\.\)/;

const plugin: tstl.Plugin = {
	beforeEmit(program: ts.Program, options: tstl.CompilerOptions, emitHost: tstl.EmitHost, result: tstl.EmitFile[]) {
		for (const file of result) {
			// the main file assumes the output being ran is a module.
			// this breaks everything, so it must be replaced.
			// a separate, manual-lua file is used instead.
			file.code = file.code.replace(PATTERN, ``);
			file.code = `${file.code}\n${suffix}`;

			// minify the code
			file.code = luamin.minify(file.code);

			// add the comment to the start of the file
			file.code = `${prefix}\n${file.code}`;

			// adds support for compiling the options file too
			let file_name = file.outputPath.replace(".lua", "").split("\\").pop();
			file.code = file.code.replace("$$FILE$$", `src.${file_name}`);
		}
	},
};

export default plugin;
