<?php
/**
 * Main file for Leaderboard namespace.
 */

namespace Leaderboard\Assets;

/**
 * Connect namespace methods to hooks and filters.
 *
 * @return void
 */
function bootstrap() : void {
    add_action('init', __NAMESPACE__ . '\\register_leaderboard_block' );
    add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_editor_assets' );
	add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\enqueue_frontend_assets', 11 );
    add_filter( 'block_categories_all', __NAMESPACE__ . '\\add_block_category', 10, 1 );
}

/**
 * Register leaderboard block.
 */
function register_leaderboard_block() {
    register_block_type(
        PLUGIN_DIR . '/src/blocks/leaderboard/block.json',
        [ 'editor_script' => 'leaderboard-js' ],
    );
}

/**
 * Enqueue editor assets.
 */
function enqueue_editor_assets() {
    wp_enqueue_script(
        'leaderboard-js',
        PLUGIN_BUILD . '/index.js',
        [
            'wp-block-editor',
            'wp-blocks',
            'wp-compose',
            'wp-components',
            'wp-data',
            'wp-editor',
            'wp-hooks',
            'wp-i18n',
        ]
    );
    wp_enqueue_style(
        'leaderboard-editor-css',
        PLUGIN_BUILD . '/editor.css',
        [
            'wp-edit-blocks'
        ]
    );
}

/**
 * Enqueue frontend assets.
 */
function enqueue_frontend_assets() : void {
    if ( ! has_blocks() ) {
		return;
	}

	wp_enqueue_style(
        'leaderboard-frontend-css',
        PLUGIN_BUILD . '/frontend.css'
    );
}

/**
 * Register a custom block category for this plugin.
 *
 * @param array $categories The list of available block categories.
 * @return array The filtered categories list.
 */
function add_block_category( array $categories ) {
	return array_merge( $categories, [
		[
			'slug'  => 'custom-blocks',
			'title' => 'Custom Blocks',
		],
	] );
}
