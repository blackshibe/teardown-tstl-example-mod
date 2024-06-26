import * as ts from "typescript";
import * as tstl from "typescript-to-lua";
import * as luamin from "luamin";
import * as fs from "fs";

var comment = fs.readFileSync("comment.lua");
const plugin: tstl.Plugin = {
	beforeEmit(program: ts.Program, options: tstl.CompilerOptions, emitHost: tstl.EmitHost, result: tstl.EmitFile[]) {
		// Add a comment to the start of all output files
		for (const file of result) {
			file.code = file.code.replace(`return require("src.main", ...)`, `require("src.main")`);
			file.code = luamin.minify(file.code);

			file.code = `${comment}\n${file.code}`;
		}
	},
};

export default plugin;
