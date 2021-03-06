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

const React = require('react');
const ReactDOM = require('react-dom');

import Container from './components/container';
import Options from './data/options';

const version = 1;

class UI {
	constructor(container, params) {
		if (typeof params !== 'object') {
			params = {};
		}

		// Copy parameters
		this.container = container;
		this.params = params;

		// Expand stored parameters
		if (
			typeof params.stored === 'object' &&
			params.stored.version === version
		) {
			['storage', 'route', 'options'].forEach(attr => {
				if (params.stored[attr] !== void 0) {
					params[attr] = params.stored[attr];
				}
			});
		}
		delete params.stored;

		// Set options
		this.options = new Options(params.options);

		// Expand selected nodes list
		params.selectedNodes = params.parentNodes
			? this._convertSelectedNodes(params.parentNodes)
			: null;

		// Local storage
		this.localStorage = params.storage ? params.storage : {};

		// Create UI
		ReactDOM.render(<Container ui={this} version={version} />, this.container);

		// Store state on next tick
		setTimeout(() => {
			this.storeState();
		});
	}

	/**
	 * Close plug-in
	 */
	closePlugin() {
		this.sendMessage('store', this.getParams());
		this.sendMessage('close');
	}

	/**
	 * Show code for icon
	 *
	 * @param item
	 * @param force
	 */
	showCode(item, force = false) {
		let container = this.component;
		if (!container) {
			return;
		}

		// Add last page to route
		if (container.route.page !== 'code') {
			item.page = container.route.page;
		} else {
			item.page = container.route.code.page;
		}

		if (!this.options.showCodePage && container.route.page !== 'code') {
			// Add menu item
			container.route.code = item;
			if (!force) {
				container.update();
				return;
			}
		}

		container.changePage('code', item);
	}

	/**
	 * Hide code page
	 */
	hideCode() {
		let container = this.component;
		if (!container) {
			return;
		}

		// Code is not shown
		if (container.route.page !== 'code') {
			// Reset route and refresh menu
			container.route.code = null;
			container.update();
			return;
		}

		// Change page to previous page
		let newPage = 'iconify';
		try {
			newPage = container.route.code.page;
		} catch (err) {}
		container.route.code = null;
		container.changePage(newPage === 'code' ? 'iconify' : newPage);
	}

	/**
	 * Get stored items
	 *
	 * @return {Array}
	 */
	getStoredItems(key) {
		return this.localStorage[key] === void 0 ? [] : this.localStorage[key];
	}

	/**
	 * Delete icon from recent icons list
	 *
	 * @param {string} key
	 * @param icon
	 */
	_deleteStoredIcon(key, icon) {
		if (this.localStorage[key] === void 0) {
			return;
		}

		let value1 =
				typeof icon === 'string' ? icon : icon.prefix + ':' + icon.name,
			value2 =
				typeof icon === 'string'
					? icon
					: icon.prefix.indexOf('-') === -1
					? icon.prefix + '-' + icon.name
					: value1;

		this.localStorage[key] = this.localStorage[key].filter(
			item => item !== value1 && item !== value2
		);
	}

	/**
	 * Delete stored item
	 *
	 * @param {string} key
	 * @param {string} item
	 * @private
	 */
	_deleteStoredItem(key, item) {
		if (this.localStorage[key] === void 0) {
			return;
		}

		this.localStorage[key] = this.localStorage[key].filter(
			value => value !== item
		);
	}

	/**
	 * Delete icon from recent icons list
	 *
	 * @param {string} key
	 * @param {string|object} icon
	 */
	deleteStoredIcon(key, icon) {
		this._deleteStoredIcon(key, icon);
		this.storeState();
	}

	/**
	 * Delete item from recent items list
	 *
	 * @param {string} key
	 * @param {string} item
	 */
	deleteStoredItem(key, item) {
		this._deleteStoredItem(key, item);
		this.storeState();
	}

	/**
	 * Add icon to local list
	 *
	 * @param {string} key
	 * @param {object|string} icon
	 */
	storeIcon(key, icon) {
		this._deleteStoredIcon(key, icon);

		if (typeof icon !== 'string') {
			icon = icon.prefix + ':' + icon.name;
		}
		this.storeItem(key, icon);
	}

	/**
	 * Add item to local list
	 *
	 * @param {string} key
	 * @param {string} item
	 */
	storeItem(key, item) {
		this._deleteStoredItem(key, item);

		if (this.localStorage[key] === void 0) {
			this.localStorage[key] = [];
		}

		// Remove last items if there are too many items
		let limit = this.options.storageLimit;
		if (limit > 0 && this.localStorage[key].length >= limit) {
			this.localStorage[key] = this.localStorage[key].slice(0, limit - 1);
		}

		// Add new item as first item
		this.localStorage[key].unshift(item);

		// Save state
		this.storeState();
	}

	/**
	 * Store state in plug-in
	 */
	storeState() {
		let state = this.getParams(true);
		if (this._lastStoredState !== state) {
			this._lastStoredState = state;
			this.sendMessage('store', JSON.parse(state));
		}
	}

	/**
	 * Get parameters for storage
	 *
	 * @param {boolean} [stringify]
	 * @return {string|object}
	 */
	getParams(stringify) {
		let container = this.component;

		if (container.iconify) {
			// Save route
			container.saveIconifyRoute();
		}

		let params = {
			version: version,
			route: container.route,
			selection: container.selection,
			options: container.options.state,
			storage: this.localStorage,
		};

		if (typeof window.outerHeight === 'number') {
			params.height = window.outerHeight;
		}

		// Deep copy object
		let result = JSON.parse(JSON.stringify(params));

		// Remove routes except Iconify
		Object.keys(result.route).forEach(key => {
			if (key !== 'page' && key !== 'iconify') {
				delete result.route[key];
			}
		});

		// Change page if temporary page is current page
		switch (result.route.page) {
			case 'code':
				try {
					result.route.page = container.route.code.page;
				} catch (err) {
					result.route.page = 'iconify';
				}
				break;
		}

		return stringify ? JSON.stringify(result) : result;
	}

	/**
	 * Send message to Figma
	 *
	 * @param {string} event
	 * @param {*} [data]
	 */
	sendMessage(event, data) {
		let callback = this.params.callback;
		if (typeof callback === 'function') {
			callback(event, data);
		}
	}

	/**
	 * Convert selected nodes from array to tree
	 *
	 * @param {Array} nodes
	 * @return {object}
	 * @private
	 */
	_convertSelectedNodes(nodes) {
		// Check if currently selected node exists
		let selectedNode = this.options.node;
		if (selectedNode !== '' && !nodes.find(node => node.id === selectedNode)) {
			this.options.node = void 0;
		}

		// Sort nodes by number of parent nodes
		nodes.sort((a, b) => a.parents.length - b.parents.length);

		// Root node
		let root = nodes.shift();
		if (root === void 0) {
			return null;
		}
		root.children = [];

		let length = 1;
		while (nodes.length > 0) {
			nodes = nodes.filter(node => {
				if (node.parents.length !== length) {
					return true;
				}

				// Find parent node
				let parent = root,
					parents = node.parents.slice(0);

				while (parents.length) {
					let id = parents.pop();
					parent.children.forEach(child => {
						if (child.id === id) {
							parent = child;
						}
					});
				}

				// Append node to parent node
				node.children = [];
				parent.children.push(node);
				return false;
			});

			length++;
		}
		return root;
	}

	/**
	 * Set selected nodes
	 *
	 * @param {Array} nodes
	 */
	setSelectedNodes(nodes) {
		let convertedNodes = this._convertSelectedNodes(nodes);
		if (this.component) {
			this.component.setSelectedNodes(convertedNodes);
		} else {
			this.params.selectedNodes = convertedNodes;
		}
	}

	/**
	 * Add notice
	 *
	 * @param {string} message
	 * @param {object} [options]
	 */
	addNotice(message, options) {
		if (this.component) {
			this.component.addNotice(message, options);
		}
	}
}

export default UI;
