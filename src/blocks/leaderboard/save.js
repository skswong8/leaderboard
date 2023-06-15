import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

/**
 * Block Save Component.
 *
 * @returns {object} React component.
 */
function Save({ attributes }) {
  const { title, href, hrefText } = attributes;
  const blockProps = useBlockProps.save();

  const Link = () => {
    if (!href) {
      return;
    }
    return (
      <>
        <div className="show-more"></div>
        <a href={href}>{hrefText}</a>
      </>
    );
  };
  return (
    <div {...blockProps}>
      <h2>{title}</h2>
      <ol>
        <InnerBlocks.Content />
      </ol>
      <Link />
    </div>
  );
}

export default Save;
