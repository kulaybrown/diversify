<?php get_header(); ?>
<main class="site-main">
	<section class="section section-default margins-horizontal">
		<div class="section__inner section__inner--inset">
			<div class="rich-text">
				<h1><?php the_title(); ?></h1>
				<?php the_content(); ?>
			</div>
		</div>
	</section>
</main>
<?php get_footer(); ?>
