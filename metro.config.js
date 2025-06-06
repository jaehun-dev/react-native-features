const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const withStorybook = require('@storybook/react-native/metro/withStorybook');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

const finalConfig = mergeConfig(getDefaultConfig(__dirname), config);

/** @see https://github.com/storybookjs/react-native */
module.exports = withStorybook(finalConfig, {
  // Set to false to remove storybook specific options
  // you can also use a env variable to set this
  enabled: true,
  // Path to your storybook config
  configPath: path.resolve(__dirname, './.rnstorybook'),
  // note that this is the default so you can the config path blank if you use .rnstorybook

  // Optional websockets configuration
  // Starts a websocket server on the specified port and host on metro start
  // websockets: {
  //   port: 7007,
  //   host: 'localhost',
  // },
});
