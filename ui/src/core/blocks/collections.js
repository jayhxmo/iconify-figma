/**
 * This file is part of the @iconify/icon-finder package.
 *
 * (c) Vjacheslav Trushkin <cyberalien@gmail.com>
 *
 * For the full copyright and license information, please view the license.txt or license.gpl.txt
 * files that were distributed with this source code.
 *
 * Licensed under Apache 2.0 or GPL 2.0 at your option.
 * If derivative product is not compatible with one of licenses, you can pick one of licenses.
 *
 * @license Apache 2.0
 * @license GPL 2.0
 */
'use strict';

const base = require('./base');

/**
 * Check if block is empty
 *
 * @param block
 * @return {boolean}
 */
function empty(block) {
	return Object.keys(block.collections).length < 1;
}

/**
 * Get categories
 *
 * @param {object} collections
 * @return {Array}
 */
function getCategories(collections) {
	return Object.keys(collections);
}

/**
 * Create block
 *
 * @param {object} instance Search object
 * @param {object} view Parent view
 * @param {object} params Block parameters
 * @return {Object|block}
 */
module.exports = (instance, view, params) => {
	let collections =
		params.collections === void 0 ? Object.create(null) : params.collections;

	let block = base({
		app: instance,
		view: view,

		// Required stuff
		type: 'collections',
		keys: ['collections', 'showCategories'],

		// Data
		collections: collections,
		showCategories:
			typeof params.showCategories === 'boolean'
				? params.showCategories
				: getCategories(collections).length > 1,

		// Functions
		empty: () => empty(block),
		hasCategories: () => getCategories(block.collections).length > 1,
		categories: () => getCategories(block.collections),
	});

	return block;
};
