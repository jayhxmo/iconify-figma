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

module.exports = {
	loading: 'Loading...',
	navigation: {
		notavailable: 'This menu is not available yet.',
		menu: 'Menu',
		import: 'Import Icons',
		code: 'Show Code',
		about: 'About / GitHub',
		options: 'Options',
		importOptions: 'Import',
		exportOptions: 'Export',
		reset: 'Reset',
		importIconify: 'Iconify',
		importSVG: 'Paste SVG',
		importFont: 'Font',
		recent: 'Recent',
		bookmarks: 'Bookmarks',
		aboutMain: 'About',
		pluginRepo: 'Plug-in Repository',
		support: 'Support',
		iconifyRepo: 'Iconify for HTML',
		reactRepo: 'Iconify for React',
		vueRepo: 'Iconify for Vue',
		svelteRepo: 'Iconify for Svelte',
	},
	errors: {
		noIconsFound: 'No icons found.',
		noIconsFoundTip:
			'Try looking for something that could be part of icon name, such as "home", "arrow", "alert".',
		recentLimit:
			'Recent icons list is full. Oldest icons will be removed from list when new icons are added.',
		bookmarksLimit:
			'Bookmarked icons list is full. Oldest icons will be removed from list when new icons are added.',
	},
	paste: {
		invalidSVG: 'Invalid SVG code',
		fontNotice:
			'Looks like you are trying to import SVG font. Currently plug-in does not support importing fonts.',
		importButton: 'Import',
		clearButton: 'Clear',
		text1: 'Paste SVG to import it to Figma document:',
		text2:
			'You can also paste "data:image/svg+xml" URI and plugin will try to decode it.',
		foreignObject: 'SVG contains dangerous HTML code.',
	},
	crumbs: {
		collections: 'Return to collections list',
		collection: 'Return to {name}',
		search: 'Return to search results',
	},
	search: {
		placeholder: 'Search all icons',
		namedPlaceholder: 'Search {name}',
		collectionsPlaceholder: 'Filter collections',
		recentPlaceholder: 'Search recent icons',
		button: 'Find Icons',
		namedButton: 'Search', // 'Search {name}',
		reset: 'Clear Search',
		title: 'Search all icons:',
		namedTitle: 'Search {name}:',
		recentTitle: 'Search recent icons:',
	},
	filters: {
		uncategorized: 'Uncategorized',
		collections: 'Filter search results by icon set:',
		tags: 'Filter by tag:',
		themePrefixes: 'Icon type:',
		themeSuffixes: 'Icon type:',
	},
	collections: {
		empty: 'No matching icon sets found.',
		by: 'by ',
	},
	icons: {
		name: '{name}',
		size: 'Size: {width} x {height}',
		tags: 'Tags: {tags}',
		palette: 'Palette: {palette}',
		colorless: 'colorless',
		colors: 'has palette',
		loading: 'Loading...',
		sizeList: '{width} x {height}',
		headerSearch: {
			'more':
				'Displaying {count} icons (click second page to load more results):',
			'full': 'Displaying {count} icons:',
			'max': 'Too many search results. Showing only first {count} icons:',
			'0': 'No icons to display.',
			'1': 'Displaying 1 icon:',
		},
		headerCount: {
			'default': 'Displaying {count} icons:',
			'0': 'No icons to display.',
			'1': 'Displaying 1 icon:',
		},
		headerEmptyFilter: 'No matches found.',
		headerCustom: {
			recent0:
				'Recent icons list is empty. Icons will be automatically added here when you import Iconify icons.',
		},
		mode: 'Change layout',
		delete: 'Remove',
	},
	pagination: {
		more: 'Find more icons',
		first: 'First page',
		prev: 'Previous page',
		next: 'Next page',
		last: 'Last page',
	},
	parent: {
		search: 'Return to search results for "{keyword}"',
		collection: 'Return to {title}',
		collections: 'Return to icon sets list',
		generic: 'Return to previous page',
	},
	collectionInfo: {
		total: 'Number of icons:',
		height: 'Height of icons:',
		author: 'Author:',
		license: 'License:',
		palette: 'Palette:',
		colorless: 'Colorless',
		colorful: 'Has colors',
		link: 'Show all icons',
	},
	footer: {
		submit: 'Import Icon',
		close: 'Close Plugin',
		color: 'Color',
		height: 'Height',
		rotate: 'Rotate',
		flip: 'Flip',
		hFlip: 'Horizontal',
		vFlip: 'Vertical',
		customize: 'Customize icon:',
		code: 'How to use icon:',
		nodeOptions: 'Parent layer and alignment:',
		nodeOptionsPage: 'Parent layer:',
		parentNode: 'Select parent node:',
		aboutCollection: 'About {title}',
	},
	code: {
		pageTitle: 'Code for selected layer:', // 'Code for "{name}":',
		pageExplain:
			'Every icon you import with this plug-in can be used with Iconify SVG framework that works similar to icon fonts or with Iconify components for React, Vue and Svelte.',
		pageExplain2:
			'No need to export SVG from Figma and insert SVG into document. Use code below to use selected icon in your projects.',
		pageExplain3:
			'This page will open whenever you select icon exported with this plug-in in layers list and Iconify plug-in is open. You can disable this by disabling option "Show code page" in plug-in options (click 3 horizontal lines icon in header).',
		htmlTitle: 'HTML code',
		htmlCode1: '1. Add Iconify script to your page:',
		htmlCode2:
			'2. Use icon placeholder where you want to show icon (similar to icon fonts):',
		htmlCodeText: 'Change icon size using css (similar to icon fonts):',
		htmlCodeTextColor:
			'Change icon size and color using css (similar to icon fonts):',
		htmlCode3Start: 'For more details see ',
		htmlCode3Link: 'Iconify documentation',
		htmlCode3End: '.',
		reactTitle: 'React component',
		reactCode1: '1. Install components:',
		reactCode2: '2. Import icon component and icon data:',
		reactCode3: '3. Use it in your code:',
		reactCode4Start: 'For more details see ',
		reactCode4Link: 'Iconify for React repository',
		reactCode4End: '.',
		vueTitle: 'Vue component',
		vueCode1: '1. Install components:',
		vueCode2: '2. Import icon component and icon data:',
		vueCode3: '3. Add icon and component to your component:',
		vueCode4: '4. Use it in your code:',
		vueCode5Start: 'For more details see ',
		vueCode5Link: 'Iconify for Vue repository',
		vueCode5End: '.',
		svelteTitle: 'Svelte component',
		svelteCode1: '1. Install components:',
		svelteCode2: '2. Import icon component and icon data:',
		svelteCode3: '3. Use it in your code:',
		svelteCode4Start: 'For more details see ',
		svelteCode4Link: 'Iconify for Svelte repository',
		svelteCode4End: '.',
		return: {
			default: 'Return to previous page',
			iconify: 'Return to Iconify page',
			options: 'Return to options page',
		},
	},
	alignX: {
		left: 'Left',
		center: 'Center',
		right: 'Right',
	},
	alignY: {
		top: 'Top',
		middle: 'Middle',
		bottom: 'Bottom',
	},
	selectNodes: {
		add: 'Add imported frame to current selection.',
		replace: 'Select imported frame, deselect previously selected nodes.',
		none: 'Do not select imported icon.',
	},
	options: {
		layout: 'Layout options',
		compactWidth: 'Enable compact width.',
		compactWidthHint: 'Smaller plug-in window for small laptops.',
		showCodePage: 'Show code page.',
		showCodePageHint:
			'If this option is enabled, when you select layer that was imported from this plug-in, plug-in will show code for that icon.',
		dragDrop: 'Drag and drop options',
		dragDropHint:
			'You can drag icons from plug-in to Figma instead of clicking Import button. Change options below to change drag and drop behavior.',
		customizeDrop: 'Apply icon customizations to icons drag and dropped icons.',
		dropFrame: 'Import to nearest frame instead of current page.',
		import: 'Import options',
		selectNodes: 'Select imported icon:',
		selectNodesHint: 'What would you like plug-in to do after importing icon?',
		storage: 'Storage options',
		storageLimit: 'Recent icons limit:',
		storageLimitHint: 'Set to 0 to remove limit.',
	},
};
