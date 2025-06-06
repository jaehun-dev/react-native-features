module.exports = {
  preset: 'react-native',

  /** @see https://callstack.github.io/react-native-testing-library/docs/start/quick-start#quick-start */
  files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  extends: ['plugin:testing-library/react'],
};
