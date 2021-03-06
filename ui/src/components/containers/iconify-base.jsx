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

import React, { Component } from 'react';
import Iconify from '@iconify/iconify';

const iconObject = require('../../core/objects/icon');

import LoadingView from '../iconify/views/loading';
import CollectionsView from '../iconify/views/collections';
import CollectionView from '../iconify/views/collection';
import SearchView from '../iconify/views/search';
import RecentView from '../iconify/views/recent';

const views = {
	collections: CollectionsView,
	collection: CollectionView,
	search: SearchView,
	recent: RecentView,
};

class IconifyBaseContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	/**
	 * Get content component to display
	 *
	 * @return {Component}
	 * @private
	 */
	_getContentComponent() {
		let props = this.props,
			container = props.container,
			view = container.iconifyView;

		if (view && !view.loading) {
			if (views[view.type] !== void 0) {
				return views[view.type];
			} else if (view.type === 'custom' && views[view.customType] !== void 0) {
				return views[view.customType];
			}
		}

		return LoadingView;
	}

	/**
	 * Render component
	 *
	 * @return {*}
	 */
	render() {
		let props = this.props,
			container = props.container,
			app = container.iconify,
			view = container.iconifyView,
			blocks = view ? view.render() : null;

		// Set key to make sure content is being refreshed
		let key = 'empty';
		if (view) {
			switch (view.type) {
				case 'collection':
					key = 'collection-' + view.prefix;
					break;

				case 'search':
					key = 'search-' + view.route.params.search;
					break;

				case 'custom':
					key = 'custom-' + view.customType;
					break;

				default:
					key = view.type;
			}
		}

		let Component = this._getContentComponent();

		return (
			<Component
				key={key}
				container={this}
				app={app}
				view={view}
				blocks={blocks}
				/* expand storage for easy access */
				config={app.get('config').data}
				onSelectIcon={this._onSelectIcon.bind(this)}
			/>
		);
	}

	/**
	 * Select icon
	 *
	 * @param {string} value
	 * @private
	 */
	_onSelectIcon(value) {
		let options = this.props.container.options;
		options.icon = value;
		options.triggerChange();
	}

	/**
	 * Close plugin
	 *
	 * @param [event]
	 */
	closePlugin(event) {
		this.props.container.closePlugin(event);
	}

	/**
	 * Change current page
	 *
	 * @param page
	 * @param route
	 */
	changePage(page, route) {
		this.props.container.changePage(page, route);
	}

	/**
	 * Import currently selected Iconify icon
	 *
	 * @param [event]
	 * @param [options]
	 */
	importIconifyIcon(event, options) {
		this.props.container.importIconifyIcon(event, options);
	}

	/**
	 * Drop icon
	 *
	 * @param {object} props
	 * @param {object} coords
	 */
	dropIconifyIcon(props, coords) {
		let container = this.props.container;

		let options = Object.assign(
			{
				node: 'drag',
			},
			coords,
			props.isSample
				? {}
				: container.options.customizeDrop
				? {
						iconName: props.iconName,
						dropToFrame: container.options.dropToFrame,
				  }
				: {
						iconName: props.iconName,
						dropToFrame: container.options.dropToFrame,
						props: {
							rotate: 0,
							hFlip: false,
							vFlip: false,
						},
						color: '',
						height: '',
				  }
		);

		container.importIconifyIcon(null, options);
	}

	/**
	 * Scale down icon
	 *
	 * @param {number} height
	 * @param {number} [width]
	 * @param {number} [rotate]
	 * @return {number}
	 */
	scaleDownIcon(height, width, rotate) {
		return this.props.container.scaleDownIcon(height, width, rotate);
	}
}

export default IconifyBaseContainer;
