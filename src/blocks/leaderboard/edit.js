import { useBlockProps } from "@wordpress/block-editor";

/**
 * Block Edit Component.
 *
 * @returns {object} React component.
 */
function Edit() {
  const blockProps = useBlockProps();
  return <div {...blockProps}>Edit</div>;
}

export default Edit;
