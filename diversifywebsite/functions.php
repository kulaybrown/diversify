<?php

if (!function_exists('diversifywebsite_setup')) {
	function diversifywebsite_setup()
	{
		add_theme_support('custom-logo');
		add_theme_support('html5', array(
			'caption',
			'comment-form',
			'comment-list',
			'gallery',
			'script',
			'search-form',
			'style',
		));
		add_theme_support('post-thumbnails');
		add_theme_support('title-tag');
		load_theme_textdomain('diversifywebsite');
	}
}
add_action('after_setup_theme', 'diversifywebsite_setup');

function diversifywebsite_scripts()
{
	$theme_version = wp_get_theme()->get('Version');
	wp_enqueue_script(
		'diversifywebsite-script',
		get_theme_file_uri('/assets/scripts/main.bundle.js'),
		array(),
		$theme_version,
		true
	);
}
add_action('wp_enqueue_scripts', 'diversifywebsite_scripts');

function diversifywebsite_styles()
{
	$theme_version = wp_get_theme()->get('Version');
	wp_enqueue_style(
		'diversifywebsite-style',
		get_stylesheet_uri(),
		$theme_version
	);
}
add_action('wp_enqueue_scripts', 'diversifywebsite_styles');

function diversifywebsite_menus()
{
	$locations = array(
		'primary' => __('Primary', 'diversifywebsite'),
		'footer-navigation' => __('Footer - Menu', 'diversifywebsite'),
		'footer-navigation-legal' => __('Footer - Legal', 'diversifywebsite'),
	);
	register_nav_menus($locations);
}
add_action('init', 'diversifywebsite_menus');

function diversifywebsite_upload_mimes($mimes = array())
{
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter('upload_mimes', 'diversifywebsite_upload_mimes');
