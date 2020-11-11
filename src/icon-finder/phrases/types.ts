import type { PluginUINavigationSection } from '../../common/navigation';
import type { IconsListMode } from '../components/types';
import type { ComponentCodeOutput } from '../footer/code-samples';
import type {
	AvailableLanguages,
	LanguageKeys,
	FakeLanguages,
} from '../footer/code-tree';
import type { APIProviderError } from '../provider/add-provider';

export interface UITranslationAddForm {
	title?: string;
	placeholder: string;
	submit: string;
	invalid?: string;
}

export interface UITranslation {
	lang: string;
	search: {
		placeholder: Record<string, string>;
		defaultPlaceholder: string;
		button: string;
	};
	errors: {
		noCollections: string;
		noIconsFound: string;
		defaultError: string;
		custom: Record<string, string>;
	};
	icons: {
		header: {
			full: string;
			more: string;
			modes: Record<IconsListMode, string>;
			select: string;
		};
		headerWithCount: Record<number, string>;
		tooltip: {
			size: string;
			colorless: string;
			colorful: string;
			char: string;
			length: string;
		};
		more: string;
		moreAsNumber: boolean;
	};
	filters: Record<string, string>;
	collectionInfo: {
		total: string;
		height: string;
		author: string;
		license: string;
		palette: string;
		colorless: string;
		colorful: string;
		link: string;
	};
	parent: Record<string, string>;
	collection: {
		by: string;
	};
	providers: {
		section: string;
		add: string;
		addForm: UITranslationAddForm;
		status: Record<APIProviderError, string>;
	};
	footer: {
		iconName: string;
		iconNamePlaceholder: string;
		inlineSample: {
			before: string;
			after: string;
		};
		remove: string;
		select: string;
		about: string;
	};
	footerButtons: Record<string, string>;
	footerBlocks: Record<string, string>;
	footerOptionButtons: {
		hFlip: string;
		vFlip: string;
		rotate: string;
		rotateTitle: string;
		inline: string;
		block: string;
		inlineHint: string;
		blockHint: string;
	};
	codeSamples: {
		copy: string;
		copied: string;
		heading: string;
		titles: Partial<Record<LanguageKeys, string>>;
		childTabTitle: string;
		childTabTitles: Partial<Record<FakeLanguages, string>>;
		docsDefault: string;
		docs: Partial<Record<LanguageKeys, string>>;
		intro: Partial<Record<AvailableLanguages, string>>;
		component: Record<keyof ComponentCodeOutput, string>;
		iconify: {
			intro1: string;
			intro2: string;
			head: string;
		};
	};
	figma: {
		menu: Record<PluginUINavigationSection, string>;
		submenu: Record<string, string>;
	};
}
