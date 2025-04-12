import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { useState, useEffect } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";
import ServerSideRender from "@wordpress/server-side-render";
import { Disabled, PanelBody, SelectControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { categoryId = 0 } = attributes;
  const [categories, setCategories] = useState([]);
  const blockProps = useBlockProps();

  useEffect(() => {
    apiFetch({ path: "/wp/v2/categories" }).then((cats) => {
      const options = [{ label: "All Categories", value: 0 }];
      cats.forEach((cat) => {
        options.push({ label: cat.name, value: cat.id });
      });
      setCategories(options);
    });
  }, []);

  return (
    <>
      <InspectorControls>
        <PanelBody title="Category Selection">
          <SelectControl
            label="Select Category"
            value={categoryId}
            options={categories}
            onChange={(value) =>
              setAttributes({ categoryId: parseInt(value, 10) })
            }
          />
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        <Disabled>
          <ServerSideRender
            block="wp-challenges/category-posts"
            attributes={{ categoryId }}
          />
        </Disabled>
      </div>
    </>
  );
}
