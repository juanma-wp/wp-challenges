# Category Posts Block

A WordPress block that dynamically displays posts from a selected category.

## Features

- Sidebar category selector with all available categories
- Server-side rendered post list
- Dynamic updates when category changes
- Clean and simple post display with linked titles
- Fallback for "No posts found" state

## Technical Implementation

### Frontend (React/JavaScript)

The block's edit component (`src/edit.js`) handles:

1. **Category Selection**

   - Uses `apiFetch` to load categories from `/wp/v2/categories`
   - Implements a `SelectControl` in the Inspector Controls
   - Maintains category selection in block attributes

2. **Post Display**
   - Uses `ServerSideRender` for dynamic post rendering
   - Wraps content in `Disabled` component to prevent nested editing
   - Provides loading and error states

### Backend (PHP)

The server-side rendering (`src/render.php`) handles:

1. **Post Query**

   - Uses `WP_Query` to fetch posts from selected category
   - Limits to 5 posts per category
   - Properly resets post data after query

2. **HTML Structure**
   - Uses WordPress block wrapper attributes
   - Implements semantic HTML with `<ul>` and `<li>` elements
   - Properly escapes all output

## Code Structure

```
src/
├── edit.js           # Block editor component
├── index.js          # Block registration
├── render.php        # Server-side rendering
└── block.json        # Block configuration
```

## Key WordPress APIs Used

- `@wordpress/server-side-render`: For dynamic post rendering
- `@wordpress/api-fetch`: For fetching categories
- `@wordpress/components`: For UI controls
- `WP_Query`: For server-side post fetching
- WordPress REST API: For category data

## Global State Handling

The solution carefully manages WordPress global state:

- Properly initializes block attributes
- Maintains post data integrity with `wp_reset_postdata()`
- Handles the WordPress block editor context

## Security Considerations

- All outputs are properly escaped
- Uses WordPress security functions
- Implements proper data validation
- Follows WordPress coding standards

## Performance

- Server-side rendering only when necessary
- Efficient category loading
- Minimal post query (limited to 5 posts)
- Proper cleanup of WordPress globals
