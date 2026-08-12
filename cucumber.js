module.exports = {
  default: {
    paths: ["src/features/**/*.feature"],

    require: [
      "src/stepDefinitions/**/*.ts",
      "src/hooks/**/*.ts"
    ],

    requireModule: ["ts-node/register"],

    format: [
      "progress"
    ],

    publishQuiet: true
  }
};