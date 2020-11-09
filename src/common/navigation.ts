/**
 * Main navigation sections
 */
export type PluginUINavigationSection = 'menu' | 'import' | 'about';

/**
 * Navigation sections for each menu
 */
interface PluginUINavigationBase {
	section: PluginUINavigationSection;
	submenu: string;
}

interface PluginUIMenuNavigation extends PluginUINavigationBase {
	section: 'menu';
	submenu: 'options' | 'reset';
}

interface PluginUIImportNavigation extends PluginUINavigationBase {
	section: 'import';
	submenu: 'iconify' | 'svg' | 'recent';
}

interface PluginUIAboutNavigation extends PluginUINavigationBase {
	section: 'about';
	submenu: 'about' | 'repo' | 'support';
}

/**
 * Combination
 */
export type PluginUINavigation =
	| PluginUIMenuNavigation
	| PluginUIImportNavigation
	| PluginUIAboutNavigation;