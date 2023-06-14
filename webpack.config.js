const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

module.exports = {
  ...defaultConfig,
  entry: {
    ...defaultConfig.entry,
    index: "./src/index.js",
    editor: "./src/blocks/leaderboard/editor.js",
    frontend: "./src/blocks/leaderboard/frontend.js",
  },
};
