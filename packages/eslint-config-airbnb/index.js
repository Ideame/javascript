module.exports = {
  extends: [
    'eslint-config-ideame-base',
    'eslint-config-ideame-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
