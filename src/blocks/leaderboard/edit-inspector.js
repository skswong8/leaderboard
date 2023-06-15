import { InspectorControls } from "@wordpress/block-editor";
import { TextControl, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Edit Inspector component
 *
 * @param {Props} props Props.
 */
export default function EditInspector(props) {
  const { attributes, setAttributes } = props;

  return (
    <InspectorControls key="setting">
      <PanelBody title="Leaderboard settings">
        <TextControl
          label={__("Link target", "leaderboard")}
          type="url"
          value={attributes.href || ""}
          onChange={(href) => setAttributes({ href })}
        />
        <TextControl
          label={__("Link text", "leaderboard")}
          type="text"
          value={attributes.hrefText || ""}
          onChange={(hrefText) => setAttributes({ hrefText })}
        />
      </PanelBody>
    </InspectorControls>
  );
}
