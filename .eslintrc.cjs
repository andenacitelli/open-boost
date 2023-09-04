/** @type {import("eslint").Linter.Config} */
const config = {
    root: true,
    env: {
        es6: true,
        node: true,
        browser: true,
        amd: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        "@typescript-eslint/no-var-requires": "off",
    }
}

module.exports = config;
