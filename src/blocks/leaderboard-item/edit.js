import { useBlockProps, BlockControls } from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";

/**
 * Block Edit Component.
 *
 * @param {Props} props Component props.
 * @returns {object} React component.
 */
export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const blockProps = useBlockProps();

  return (
    <>
      <div {...blockProps}>
        <BlockControls></BlockControls>
        <TextControl
          type="text"
          value={attributes.text}
          onChange={(text) => setAttributes({ text })}
        />
      </div>
    </>
  );
}
