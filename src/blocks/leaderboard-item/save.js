import { useBlockProps } from "@wordpress/block-editor";

/**
 * Block Save Component.
 *
 * @param {object} props Props.
 * @param {object} props.attributes Attributes.
 * @returns {ReactElement} Rendered component.
 */
function Save({ attributes }) {
  const { text } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <li {...blockProps}>
      <span>{text}</span>
    </li>
  );
}

export default Save;
