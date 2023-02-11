/**
 *  应为.eslintrc.cjs
 *  yarn add eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-config-alloy -D
 *  eslint-config-alloy:https://alloyteam.github.io/eslint-config-alloy/?hideOff=1&rule=react
 */
module.exports = {
  extends: [
    "alloy",
    "alloy/react",
    "alloy/typescript",
    "prettier",
    "eslint-config-prettier",
  ],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    browser: true,
    node: true,
    es2021: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  plugins: ["eslint-plugin-prettier"],
  rules: {
    // Customize your rules
    "prettier/prettier": 2,
  },
};
