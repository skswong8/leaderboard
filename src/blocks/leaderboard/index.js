import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import Edit from "./edit";
import Save from "./save";

const name = metadata.name;

registerBlockType(name, {
  ...metadata,
  edit: Edit,
  save: Save,
});
