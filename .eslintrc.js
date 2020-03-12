module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    // 开启实验属性
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      // 修饰器
      experimentalDecorators: true,
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },

  // 解决@connect()装饰器写法报错
  parser: "babel-eslint",
  plugins: ["react"],

  /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    "react/prop-types": 0
  }
};
