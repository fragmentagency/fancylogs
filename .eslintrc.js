module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "airbnb-base",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "semi": [2, "never"],
    "max-len": ["error", {
      "ignoreComments": true,
      "ignoreStrings": true,
      "ignoreUrls": true,
      "ignoreTemplateLiterals": true,
      code: 140,
      tabWidth: 2
    }],
    "no-underscore-dangle": ["error", {
      "allowAfterThis": true
    }],
    "no-plusplus": "off",
    "prefer-rest-params": "off",
    "no-console": "off",
  },
};