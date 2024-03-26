import createExpoWebpackConfigAsync from "@expo/webpack-config/webpack";
import { Arguments, Environment } from "@expo/webpack-config/webpack/types";

module.exports = async function (env: Environment, argv: Arguments) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  if (!config.resolve) {
    config.resolve = {};
  }
  if (!config.resolve.alias) {
    config.resolve.alias = {};
  }

  const alias = config.resolve.alias as { [key: string]: string };

  alias["crypto"] = require.resolve("crypto-browserify");
  alias["stream"] = require.resolve("stream-browserify");
  alias["vm"] = require.resolve("vm-browserify");

  return config;
};
