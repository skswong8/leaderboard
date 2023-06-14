<?php
/**
 * Main file for Leaderboard namespace.
 */

namespace Leaderboard;

/**
 * Connect namespace methods to hooks and filters.
 *
 * @return void
 */
function bootstrap() : void {
	// Initialize sub-namespaces.
	Assets\bootstrap();
}
