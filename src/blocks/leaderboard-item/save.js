import { useBlockProps } from "@wordpress/block-editor";

/**
 * Block Save Component.
 *
 * @returns {object} React component.
 */
function Save() {
  const blockProps = useBlockProps.save();
  return <div {...blockProps}>Save</div>;
}

export default Save;
