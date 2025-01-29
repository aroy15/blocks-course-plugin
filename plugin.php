<?php
/**
 * Plugin Name:       Blocks Course Plugin
 * Description:       Blocks Course Plugin
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            Anjon Roy
 * Author URI:		  https://anjonroy.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       Blocks-course-plugin
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

function blocks_course_plugin_enqueue_assets()
{
	$assets_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');
	wp_enqueue_script('blocks-course-plugin-script', plugins_url('build/index.js', __FILE__), $assets_file['dependencies'], $assets_file['version']);
}
add_action('enqueue_block_editor_assets', 'blocks_course_plugin_enqueue_assets');
