import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { useEntityRecords } from "@wordpress/core-data";
import { PanelBody, SelectControl, Spinner } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { categoryId = 0 } = attributes;
  const blockProps = useBlockProps();

  // Get categories using useEntityRecords
  const { records: categories, isResolving: isLoadingCategories } =
    useEntityRecords("taxonomy", "category", {
      per_page: -1,
      hide_empty: false,
    });

  // Get posts using useEntityRecords
  const { records: posts, isResolving: isLoadingPosts } = useEntityRecords(
    "postType",
    "post",
    {
      per_page: 5,
      categories: categoryId || undefined,
    }
  );

  // Transform categories for SelectControl
  const categoryOptions = categories
    ? [
        { label: __("All Categories", "wp-challenges"), value: 0 },
        ...categories.map((cat) => ({
          label: cat.name,
          value: cat.id,
        })),
      ]
    : [];

  const isLoading = isLoadingCategories || isLoadingPosts;

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Category Selection", "wp-challenges")}>
          <SelectControl
            label={__("Select Category", "wp-challenges")}
            value={categoryId}
            options={categoryOptions}
            onChange={(value) =>
              setAttributes({ categoryId: parseInt(value, 10) })
            }
            disabled={isLoadingCategories}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {isLoading ? (
          <Spinner />
        ) : posts?.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <a href={post.link}>{post.title.rendered}</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>{__("No posts found.", "wp-challenges")}</p>
        )}
      </div>
    </>
  );
}
