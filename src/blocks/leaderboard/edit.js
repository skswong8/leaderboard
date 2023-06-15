import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import EditInspector from "./edit-inspector";
import { __ } from "@wordpress/i18n";

const ALLOWED_BLOCKS = ["custom-blocks/leaderboard-item"];

/**
 * Block Edit Component.
 *
 * @param {Props} props Component props.
 * @returns {object} React component.
 */
export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { title, href, hrefText } = attributes;
  const blockProps = useBlockProps();

  const Link = () => {
    if (!href) {
      return;
    } else {
      return <a href={href}>{hrefText}</a>;
    }
  };

  return (
    <div className="wp-block">
      <EditInspector attributes={attributes} setAttributes={setAttributes} />
      <RichText
        placeholder={__("Leaderboard", "leaderboard")}
        tagName="h2"
        value={title}
        onChange={(value) => setAttributes({ title: value })}
      />
      <div {...blockProps}>
        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
      </div>
      <Link />
    </div>
  );
}
