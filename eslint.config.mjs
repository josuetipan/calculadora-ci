export default [
 {
 files: ["**/*.js"],
 languageOptions: {
 ecmaVersion: 2021,
 sourceType: "commonjs",
 globals: {
 require: "readonly",
 module: "readonly",
 __dirname: "readonly",
 process: "readonly"
 }
 },
 rules: {
 "no-console": "error",
 "no-unused-vars": "error",
 "no-var": "error",
 "eqeqeq": "error"
 }
 }
];