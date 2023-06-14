import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import Edit from "./edit";
import Save from "./save";

const name = metadata.name;

registerBlockType(name, {
  ...metadata,
  title: __("Leaderboard", "leaderboard"),
  description: __("Display leaderboard.", "leaderboard"),
  edit: Edit,
  save: Save,
});
