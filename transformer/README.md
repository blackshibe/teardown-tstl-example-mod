# transformers

-   fix-first-require
    -   Compile via `tsc transformer/fix-first-require/index.ts`
    -   Teardown doesn't run the scripts as modules, and so the statement tstl generates at the end of the file is invalid. This replaces it with a require() function call
