<?php
/**
 * Server-side rendering for the category posts block.
 *
 * @package wp-challenges
 */

$args = [
	'post_type'      => 'post',
	'post_status'    => 'publish',
	'posts_per_page' => 5,
	'cat'           => isset($attributes['categoryId']) ? (int) $attributes['categoryId'] : 0
];

$query = new WP_Query($args);
?>

<div <?php echo get_block_wrapper_attributes(['class' => 'wp-block-category-posts']); ?>>
	<?php if ($query->have_posts()) : ?>
		<ul>
			<?php while ($query->have_posts()) : 
				$query->the_post(); 
			?>
				<li>
					<a href="<?php echo esc_url(get_permalink()); ?>">
						<?php echo esc_html(get_the_title()); ?>
					</a>
				</li>
			<?php endwhile; ?>
		</ul>
	<?php else : ?>
		<p><?php echo esc_html__('No posts found.', 'wp-challenges'); ?></p>
	<?php endif; ?>
</div>

<?php
wp_reset_postdata();
?>
