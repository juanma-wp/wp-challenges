<?php
/**
 * Plugin Name: Block Posts From Category
 * Description: A custom block that displays posts from a specific category
 * Version: 1.0.0
 * Author: Your Name
 * Text Domain: wp-challenges
 */

if (!defined('ABSPATH')) {
    exit;
}

function block_posts_from_category_register_block() {
    // Register the block
    register_block_type(__DIR__ . '/build');
}
add_action('init', 'block_posts_from_category_register_block');
