module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    "class-methods-use-this": "off", // desativa uma regra que diz que todo método de uma classe precisa usar a palavra this
    "no-param-reassign": "off", // desativa uma regra que diz que não é permitido receber parâmetro e fazer alterações nele
    camelcase: "off", // desativa uma regra que diz que toda variável precisa ser escrita no formato camelCase
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }], // não reclamar caso a variável utilizada seja next que é usada pelos middlewares do express
    "prettier/prettier": "error",
    "no-console": "off",
    "consistent-return": "off",
    "no-template-curly-in-string": "off",
    "import/extensions": "off",
  },
};
