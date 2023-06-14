<?php
/**
 * Plugin Name: Leaderboard
 * Description: Provide a block to display a teaser leaderboard linking to another page.
 * Author: Sam Wong
 * Author URI: https://github.com/skswong8/
 * Version: 1.0.0
 */

namespace Leaderboard;

define( 'PLUGIN_DIR', plugins_url( 'leaderboard' ) );
define( 'PLUGIN_BUILD', plugins_url( '/build', __FILE__ ) );

require_once __DIR__ . '/inc/assets.php';
require_once __DIR__ . '/inc/namespace.php';

bootstrap();
