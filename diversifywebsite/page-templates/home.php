<?php /* Template Name: Home */ ?>
<?php get_header(); ?>
<main class="site-main page-template-home">

	<?php
		get_template_part('template-parts/sections/hero');
		get_template_part('template-parts/sections/grid-solutions');
		get_template_part('template-parts/sections/text-and-media');
		get_template_part('template-parts/sections/blog-list');
		get_template_part('template-parts/sections/testimonial');
	?>
</main>
<?php get_footer(); ?>
