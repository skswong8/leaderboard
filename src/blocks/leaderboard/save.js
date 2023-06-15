import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

/**
 * Block Save Component.
 *
 * @returns {object} React component.
 */
function Save() {
  const blockProps = useBlockProps.save();
  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
}

export default Save;
