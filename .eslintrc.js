module.exports = {
    extends: ["universe", "universe/shared/typescript-analysis"],
    overrides: [
        {
            files: ["*.ts", "*.tsx", "*.d.ts"],
            parserOptions: {
                project: "./tsconfig.json",
            },
        },
    ],
    rules: {
        "import/newline-after-import": ["error", { count: 1 }],
    },
};
