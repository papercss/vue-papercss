module.exports = {
  extends: "airbnb-base",
  root: true,
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "no-restricted-syntax": "off",
    "guard-for-in": "off",
  },
  overrides: [
    {
      files: ['plugins.js', 'index.js'],
      rules: {
        "no-underscore-dangle": "off",
        "no-param-reassign": "off",
      },
    }
  ],
}
