# WordPress Block Development Challenges

This repository contains challenges and solutions for WordPress block development using the Block Editor (Gutenberg).

## Challenges

### 1. Category Posts Challenge

> [!NOTE]
> This challenge is part of the [WordPress Challenges](https://wpchallenges.beehiiv.com/) series by [Igor Benić](https://x.com/igorbenic). It was originally published as [WP Challenge #1: Block Development](https://wpchallenges.beehiiv.com/p/wp-challenge-1-block-development) in January 2024. This repository provides two different approaches to solving the challenge.

**Description**: Create a block that fetches and displays posts from a specific category dynamically.

**Requirements**:

- Dropdown showing categories in the side panel
- Display fetched posts within the block
- Dynamic updates when category selection changes

**Solutions**:

- [Server-Side Rendering Solution](https://github.com/juanma-wp/wp-challenges/tree/category-posts-solution) - Uses ServerSideRender to render posts
- [Client-Side Solution](https://github.com/juanma-wp/wp-challenges/tree/category-posts-solution-alt) - Uses @wordpress/core-data for client-side data fetching

For detailed challenge requirements, see [Category Posts Challenge](./category-posts/CHALLENGE.md)

## Getting Started

1. Clone this repository
2. Switch to the desired solution branch
3. Follow the setup instructions in the solution's README.md

## Future Challenges

More challenges and their solutions will be added to this repository. Each challenge will have its own directory with a CHALLENGE.md file and corresponding solution branches.
