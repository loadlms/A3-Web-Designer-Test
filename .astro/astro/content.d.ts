declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"template1": {
"1.md": {
	id: "1.md";
  slug: "1";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"10.md": {
	id: "10.md";
  slug: "10";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"100.md": {
	id: "100.md";
  slug: "100";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"1000.md": {
	id: "1000.md";
  slug: "1000";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"101.md": {
	id: "101.md";
  slug: "101";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"102.md": {
	id: "102.md";
  slug: "102";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"103.md": {
	id: "103.md";
  slug: "103";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"104.md": {
	id: "104.md";
  slug: "104";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"105.md": {
	id: "105.md";
  slug: "105";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"106.md": {
	id: "106.md";
  slug: "106";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"107.md": {
	id: "107.md";
  slug: "107";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"108.md": {
	id: "108.md";
  slug: "108";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"109.md": {
	id: "109.md";
  slug: "109";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"11.md": {
	id: "11.md";
  slug: "11";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"110.md": {
	id: "110.md";
  slug: "110";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"111.md": {
	id: "111.md";
  slug: "111";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"112.md": {
	id: "112.md";
  slug: "112";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"113.md": {
	id: "113.md";
  slug: "113";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"114.md": {
	id: "114.md";
  slug: "114";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"115.md": {
	id: "115.md";
  slug: "115";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"116.md": {
	id: "116.md";
  slug: "116";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"117.md": {
	id: "117.md";
  slug: "117";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"118.md": {
	id: "118.md";
  slug: "118";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"119.md": {
	id: "119.md";
  slug: "119";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"12.md": {
	id: "12.md";
  slug: "12";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"120.md": {
	id: "120.md";
  slug: "120";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"121.md": {
	id: "121.md";
  slug: "121";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"122.md": {
	id: "122.md";
  slug: "122";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"123.md": {
	id: "123.md";
  slug: "123";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"124.md": {
	id: "124.md";
  slug: "124";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"125.md": {
	id: "125.md";
  slug: "125";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"126.md": {
	id: "126.md";
  slug: "126";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"127.md": {
	id: "127.md";
  slug: "127";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"128.md": {
	id: "128.md";
  slug: "128";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"129.md": {
	id: "129.md";
  slug: "129";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"13.md": {
	id: "13.md";
  slug: "13";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"130.md": {
	id: "130.md";
  slug: "130";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"131.md": {
	id: "131.md";
  slug: "131";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"132.md": {
	id: "132.md";
  slug: "132";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"133.md": {
	id: "133.md";
  slug: "133";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"134.md": {
	id: "134.md";
  slug: "134";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"135.md": {
	id: "135.md";
  slug: "135";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"136.md": {
	id: "136.md";
  slug: "136";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"137.md": {
	id: "137.md";
  slug: "137";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"138.md": {
	id: "138.md";
  slug: "138";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"139.md": {
	id: "139.md";
  slug: "139";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"14.md": {
	id: "14.md";
  slug: "14";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"140.md": {
	id: "140.md";
  slug: "140";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"141.md": {
	id: "141.md";
  slug: "141";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"142.md": {
	id: "142.md";
  slug: "142";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"143.md": {
	id: "143.md";
  slug: "143";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"144.md": {
	id: "144.md";
  slug: "144";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"145.md": {
	id: "145.md";
  slug: "145";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"146.md": {
	id: "146.md";
  slug: "146";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"147.md": {
	id: "147.md";
  slug: "147";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"148.md": {
	id: "148.md";
  slug: "148";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"149.md": {
	id: "149.md";
  slug: "149";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"15.md": {
	id: "15.md";
  slug: "15";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"150.md": {
	id: "150.md";
  slug: "150";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"151.md": {
	id: "151.md";
  slug: "151";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"152.md": {
	id: "152.md";
  slug: "152";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"153.md": {
	id: "153.md";
  slug: "153";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"154.md": {
	id: "154.md";
  slug: "154";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"155.md": {
	id: "155.md";
  slug: "155";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"156.md": {
	id: "156.md";
  slug: "156";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"157.md": {
	id: "157.md";
  slug: "157";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"158.md": {
	id: "158.md";
  slug: "158";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"159.md": {
	id: "159.md";
  slug: "159";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"16.md": {
	id: "16.md";
  slug: "16";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"160.md": {
	id: "160.md";
  slug: "160";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"161.md": {
	id: "161.md";
  slug: "161";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"162.md": {
	id: "162.md";
  slug: "162";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"163.md": {
	id: "163.md";
  slug: "163";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"164.md": {
	id: "164.md";
  slug: "164";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"165.md": {
	id: "165.md";
  slug: "165";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"166.md": {
	id: "166.md";
  slug: "166";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"167.md": {
	id: "167.md";
  slug: "167";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"168.md": {
	id: "168.md";
  slug: "168";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"169.md": {
	id: "169.md";
  slug: "169";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"17.md": {
	id: "17.md";
  slug: "17";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"170.md": {
	id: "170.md";
  slug: "170";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"171.md": {
	id: "171.md";
  slug: "171";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"172.md": {
	id: "172.md";
  slug: "172";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"173.md": {
	id: "173.md";
  slug: "173";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"174.md": {
	id: "174.md";
  slug: "174";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"175.md": {
	id: "175.md";
  slug: "175";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"176.md": {
	id: "176.md";
  slug: "176";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"177.md": {
	id: "177.md";
  slug: "177";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"178.md": {
	id: "178.md";
  slug: "178";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"179.md": {
	id: "179.md";
  slug: "179";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"18.md": {
	id: "18.md";
  slug: "18";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"180.md": {
	id: "180.md";
  slug: "180";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"181.md": {
	id: "181.md";
  slug: "181";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"182.md": {
	id: "182.md";
  slug: "182";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"183.md": {
	id: "183.md";
  slug: "183";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"184.md": {
	id: "184.md";
  slug: "184";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"185.md": {
	id: "185.md";
  slug: "185";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"186.md": {
	id: "186.md";
  slug: "186";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"187.md": {
	id: "187.md";
  slug: "187";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"188.md": {
	id: "188.md";
  slug: "188";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"189.md": {
	id: "189.md";
  slug: "189";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"19.md": {
	id: "19.md";
  slug: "19";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"190.md": {
	id: "190.md";
  slug: "190";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"191.md": {
	id: "191.md";
  slug: "191";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"192.md": {
	id: "192.md";
  slug: "192";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"193.md": {
	id: "193.md";
  slug: "193";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"194.md": {
	id: "194.md";
  slug: "194";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"195.md": {
	id: "195.md";
  slug: "195";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"196.md": {
	id: "196.md";
  slug: "196";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"197.md": {
	id: "197.md";
  slug: "197";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"198.md": {
	id: "198.md";
  slug: "198";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"199.md": {
	id: "199.md";
  slug: "199";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"2.md": {
	id: "2.md";
  slug: "2";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"20.md": {
	id: "20.md";
  slug: "20";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"200.md": {
	id: "200.md";
  slug: "200";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"201.md": {
	id: "201.md";
  slug: "201";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"202.md": {
	id: "202.md";
  slug: "202";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"203.md": {
	id: "203.md";
  slug: "203";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"204.md": {
	id: "204.md";
  slug: "204";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"205.md": {
	id: "205.md";
  slug: "205";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"206.md": {
	id: "206.md";
  slug: "206";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"207.md": {
	id: "207.md";
  slug: "207";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"208.md": {
	id: "208.md";
  slug: "208";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"209.md": {
	id: "209.md";
  slug: "209";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"21.md": {
	id: "21.md";
  slug: "21";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"210.md": {
	id: "210.md";
  slug: "210";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"211.md": {
	id: "211.md";
  slug: "211";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"212.md": {
	id: "212.md";
  slug: "212";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"213.md": {
	id: "213.md";
  slug: "213";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"214.md": {
	id: "214.md";
  slug: "214";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"215.md": {
	id: "215.md";
  slug: "215";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"216.md": {
	id: "216.md";
  slug: "216";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"217.md": {
	id: "217.md";
  slug: "217";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"218.md": {
	id: "218.md";
  slug: "218";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"219.md": {
	id: "219.md";
  slug: "219";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"22.md": {
	id: "22.md";
  slug: "22";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"220.md": {
	id: "220.md";
  slug: "220";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"221.md": {
	id: "221.md";
  slug: "221";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"222.md": {
	id: "222.md";
  slug: "222";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"223.md": {
	id: "223.md";
  slug: "223";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"224.md": {
	id: "224.md";
  slug: "224";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"225.md": {
	id: "225.md";
  slug: "225";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"226.md": {
	id: "226.md";
  slug: "226";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"227.md": {
	id: "227.md";
  slug: "227";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"228.md": {
	id: "228.md";
  slug: "228";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"229.md": {
	id: "229.md";
  slug: "229";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"23.md": {
	id: "23.md";
  slug: "23";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"230.md": {
	id: "230.md";
  slug: "230";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"231.md": {
	id: "231.md";
  slug: "231";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"232.md": {
	id: "232.md";
  slug: "232";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"233.md": {
	id: "233.md";
  slug: "233";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"234.md": {
	id: "234.md";
  slug: "234";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"235.md": {
	id: "235.md";
  slug: "235";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"236.md": {
	id: "236.md";
  slug: "236";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"237.md": {
	id: "237.md";
  slug: "237";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"238.md": {
	id: "238.md";
  slug: "238";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"239.md": {
	id: "239.md";
  slug: "239";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"24.md": {
	id: "24.md";
  slug: "24";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"240.md": {
	id: "240.md";
  slug: "240";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"241.md": {
	id: "241.md";
  slug: "241";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"242.md": {
	id: "242.md";
  slug: "242";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"243.md": {
	id: "243.md";
  slug: "243";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"244.md": {
	id: "244.md";
  slug: "244";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"245.md": {
	id: "245.md";
  slug: "245";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"246.md": {
	id: "246.md";
  slug: "246";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"247.md": {
	id: "247.md";
  slug: "247";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"248.md": {
	id: "248.md";
  slug: "248";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"249.md": {
	id: "249.md";
  slug: "249";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"25.md": {
	id: "25.md";
  slug: "25";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"250.md": {
	id: "250.md";
  slug: "250";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"251.md": {
	id: "251.md";
  slug: "251";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"252.md": {
	id: "252.md";
  slug: "252";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"253.md": {
	id: "253.md";
  slug: "253";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"254.md": {
	id: "254.md";
  slug: "254";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"255.md": {
	id: "255.md";
  slug: "255";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"256.md": {
	id: "256.md";
  slug: "256";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"257.md": {
	id: "257.md";
  slug: "257";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"258.md": {
	id: "258.md";
  slug: "258";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"259.md": {
	id: "259.md";
  slug: "259";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"26.md": {
	id: "26.md";
  slug: "26";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"260.md": {
	id: "260.md";
  slug: "260";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"261.md": {
	id: "261.md";
  slug: "261";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"262.md": {
	id: "262.md";
  slug: "262";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"263.md": {
	id: "263.md";
  slug: "263";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"264.md": {
	id: "264.md";
  slug: "264";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"265.md": {
	id: "265.md";
  slug: "265";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"266.md": {
	id: "266.md";
  slug: "266";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"267.md": {
	id: "267.md";
  slug: "267";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"268.md": {
	id: "268.md";
  slug: "268";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"269.md": {
	id: "269.md";
  slug: "269";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"27.md": {
	id: "27.md";
  slug: "27";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"270.md": {
	id: "270.md";
  slug: "270";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"271.md": {
	id: "271.md";
  slug: "271";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"272.md": {
	id: "272.md";
  slug: "272";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"273.md": {
	id: "273.md";
  slug: "273";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"274.md": {
	id: "274.md";
  slug: "274";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"275.md": {
	id: "275.md";
  slug: "275";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"276.md": {
	id: "276.md";
  slug: "276";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"277.md": {
	id: "277.md";
  slug: "277";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"278.md": {
	id: "278.md";
  slug: "278";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"279.md": {
	id: "279.md";
  slug: "279";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"28.md": {
	id: "28.md";
  slug: "28";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"280.md": {
	id: "280.md";
  slug: "280";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"281.md": {
	id: "281.md";
  slug: "281";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"282.md": {
	id: "282.md";
  slug: "282";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"283.md": {
	id: "283.md";
  slug: "283";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"284.md": {
	id: "284.md";
  slug: "284";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"285.md": {
	id: "285.md";
  slug: "285";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"286.md": {
	id: "286.md";
  slug: "286";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"287.md": {
	id: "287.md";
  slug: "287";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"288.md": {
	id: "288.md";
  slug: "288";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"289.md": {
	id: "289.md";
  slug: "289";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"29.md": {
	id: "29.md";
  slug: "29";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"290.md": {
	id: "290.md";
  slug: "290";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"291.md": {
	id: "291.md";
  slug: "291";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"292.md": {
	id: "292.md";
  slug: "292";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"293.md": {
	id: "293.md";
  slug: "293";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"294.md": {
	id: "294.md";
  slug: "294";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"295.md": {
	id: "295.md";
  slug: "295";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"296.md": {
	id: "296.md";
  slug: "296";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"297.md": {
	id: "297.md";
  slug: "297";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"298.md": {
	id: "298.md";
  slug: "298";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"299.md": {
	id: "299.md";
  slug: "299";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"3.md": {
	id: "3.md";
  slug: "3";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"30.md": {
	id: "30.md";
  slug: "30";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"300.md": {
	id: "300.md";
  slug: "300";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"301.md": {
	id: "301.md";
  slug: "301";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"302.md": {
	id: "302.md";
  slug: "302";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"303.md": {
	id: "303.md";
  slug: "303";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"304.md": {
	id: "304.md";
  slug: "304";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"305.md": {
	id: "305.md";
  slug: "305";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"306.md": {
	id: "306.md";
  slug: "306";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"307.md": {
	id: "307.md";
  slug: "307";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"308.md": {
	id: "308.md";
  slug: "308";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"309.md": {
	id: "309.md";
  slug: "309";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"31.md": {
	id: "31.md";
  slug: "31";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"310.md": {
	id: "310.md";
  slug: "310";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"311.md": {
	id: "311.md";
  slug: "311";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"312.md": {
	id: "312.md";
  slug: "312";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"313.md": {
	id: "313.md";
  slug: "313";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"314.md": {
	id: "314.md";
  slug: "314";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"315.md": {
	id: "315.md";
  slug: "315";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"316.md": {
	id: "316.md";
  slug: "316";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"317.md": {
	id: "317.md";
  slug: "317";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"318.md": {
	id: "318.md";
  slug: "318";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"319.md": {
	id: "319.md";
  slug: "319";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"32.md": {
	id: "32.md";
  slug: "32";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"320.md": {
	id: "320.md";
  slug: "320";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"321.md": {
	id: "321.md";
  slug: "321";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"322.md": {
	id: "322.md";
  slug: "322";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"323.md": {
	id: "323.md";
  slug: "323";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"324.md": {
	id: "324.md";
  slug: "324";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"325.md": {
	id: "325.md";
  slug: "325";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"326.md": {
	id: "326.md";
  slug: "326";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"327.md": {
	id: "327.md";
  slug: "327";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"328.md": {
	id: "328.md";
  slug: "328";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"329.md": {
	id: "329.md";
  slug: "329";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"33.md": {
	id: "33.md";
  slug: "33";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"330.md": {
	id: "330.md";
  slug: "330";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"331.md": {
	id: "331.md";
  slug: "331";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"332.md": {
	id: "332.md";
  slug: "332";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"333.md": {
	id: "333.md";
  slug: "333";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"334.md": {
	id: "334.md";
  slug: "334";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"335.md": {
	id: "335.md";
  slug: "335";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"336.md": {
	id: "336.md";
  slug: "336";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"337.md": {
	id: "337.md";
  slug: "337";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"338.md": {
	id: "338.md";
  slug: "338";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"339.md": {
	id: "339.md";
  slug: "339";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"34.md": {
	id: "34.md";
  slug: "34";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"340.md": {
	id: "340.md";
  slug: "340";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"341.md": {
	id: "341.md";
  slug: "341";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"342.md": {
	id: "342.md";
  slug: "342";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"343.md": {
	id: "343.md";
  slug: "343";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"344.md": {
	id: "344.md";
  slug: "344";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"345.md": {
	id: "345.md";
  slug: "345";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"346.md": {
	id: "346.md";
  slug: "346";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"347.md": {
	id: "347.md";
  slug: "347";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"348.md": {
	id: "348.md";
  slug: "348";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"349.md": {
	id: "349.md";
  slug: "349";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"35.md": {
	id: "35.md";
  slug: "35";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"350.md": {
	id: "350.md";
  slug: "350";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"351.md": {
	id: "351.md";
  slug: "351";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"352.md": {
	id: "352.md";
  slug: "352";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"353.md": {
	id: "353.md";
  slug: "353";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"354.md": {
	id: "354.md";
  slug: "354";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"355.md": {
	id: "355.md";
  slug: "355";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"356.md": {
	id: "356.md";
  slug: "356";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"357.md": {
	id: "357.md";
  slug: "357";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"358.md": {
	id: "358.md";
  slug: "358";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"359.md": {
	id: "359.md";
  slug: "359";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"36.md": {
	id: "36.md";
  slug: "36";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"360.md": {
	id: "360.md";
  slug: "360";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"361.md": {
	id: "361.md";
  slug: "361";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"362.md": {
	id: "362.md";
  slug: "362";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"363.md": {
	id: "363.md";
  slug: "363";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"364.md": {
	id: "364.md";
  slug: "364";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"365.md": {
	id: "365.md";
  slug: "365";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"366.md": {
	id: "366.md";
  slug: "366";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"367.md": {
	id: "367.md";
  slug: "367";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"368.md": {
	id: "368.md";
  slug: "368";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"369.md": {
	id: "369.md";
  slug: "369";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"37.md": {
	id: "37.md";
  slug: "37";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"370.md": {
	id: "370.md";
  slug: "370";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"371.md": {
	id: "371.md";
  slug: "371";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"372.md": {
	id: "372.md";
  slug: "372";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"373.md": {
	id: "373.md";
  slug: "373";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"374.md": {
	id: "374.md";
  slug: "374";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"375.md": {
	id: "375.md";
  slug: "375";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"376.md": {
	id: "376.md";
  slug: "376";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"377.md": {
	id: "377.md";
  slug: "377";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"378.md": {
	id: "378.md";
  slug: "378";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"379.md": {
	id: "379.md";
  slug: "379";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"38.md": {
	id: "38.md";
  slug: "38";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"380.md": {
	id: "380.md";
  slug: "380";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"381.md": {
	id: "381.md";
  slug: "381";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"382.md": {
	id: "382.md";
  slug: "382";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"383.md": {
	id: "383.md";
  slug: "383";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"384.md": {
	id: "384.md";
  slug: "384";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"385.md": {
	id: "385.md";
  slug: "385";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"386.md": {
	id: "386.md";
  slug: "386";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"387.md": {
	id: "387.md";
  slug: "387";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"388.md": {
	id: "388.md";
  slug: "388";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"389.md": {
	id: "389.md";
  slug: "389";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"39.md": {
	id: "39.md";
  slug: "39";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"390.md": {
	id: "390.md";
  slug: "390";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"391.md": {
	id: "391.md";
  slug: "391";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"392.md": {
	id: "392.md";
  slug: "392";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"393.md": {
	id: "393.md";
  slug: "393";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"394.md": {
	id: "394.md";
  slug: "394";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"395.md": {
	id: "395.md";
  slug: "395";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"396.md": {
	id: "396.md";
  slug: "396";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"397.md": {
	id: "397.md";
  slug: "397";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"398.md": {
	id: "398.md";
  slug: "398";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"399.md": {
	id: "399.md";
  slug: "399";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"4.md": {
	id: "4.md";
  slug: "4";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"40.md": {
	id: "40.md";
  slug: "40";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"400.md": {
	id: "400.md";
  slug: "400";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"401.md": {
	id: "401.md";
  slug: "401";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"402.md": {
	id: "402.md";
  slug: "402";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"403.md": {
	id: "403.md";
  slug: "403";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"404.md": {
	id: "404.md";
  slug: "404";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"405.md": {
	id: "405.md";
  slug: "405";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"406.md": {
	id: "406.md";
  slug: "406";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"407.md": {
	id: "407.md";
  slug: "407";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"408.md": {
	id: "408.md";
  slug: "408";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"409.md": {
	id: "409.md";
  slug: "409";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"41.md": {
	id: "41.md";
  slug: "41";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"410.md": {
	id: "410.md";
  slug: "410";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"411.md": {
	id: "411.md";
  slug: "411";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"412.md": {
	id: "412.md";
  slug: "412";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"413.md": {
	id: "413.md";
  slug: "413";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"414.md": {
	id: "414.md";
  slug: "414";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"415.md": {
	id: "415.md";
  slug: "415";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"416.md": {
	id: "416.md";
  slug: "416";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"417.md": {
	id: "417.md";
  slug: "417";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"418.md": {
	id: "418.md";
  slug: "418";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"419.md": {
	id: "419.md";
  slug: "419";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"42.md": {
	id: "42.md";
  slug: "42";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"420.md": {
	id: "420.md";
  slug: "420";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"421.md": {
	id: "421.md";
  slug: "421";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"422.md": {
	id: "422.md";
  slug: "422";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"423.md": {
	id: "423.md";
  slug: "423";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"424.md": {
	id: "424.md";
  slug: "424";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"425.md": {
	id: "425.md";
  slug: "425";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"426.md": {
	id: "426.md";
  slug: "426";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"427.md": {
	id: "427.md";
  slug: "427";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"428.md": {
	id: "428.md";
  slug: "428";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"429.md": {
	id: "429.md";
  slug: "429";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"43.md": {
	id: "43.md";
  slug: "43";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"430.md": {
	id: "430.md";
  slug: "430";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"431.md": {
	id: "431.md";
  slug: "431";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"432.md": {
	id: "432.md";
  slug: "432";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"433.md": {
	id: "433.md";
  slug: "433";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"434.md": {
	id: "434.md";
  slug: "434";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"435.md": {
	id: "435.md";
  slug: "435";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"436.md": {
	id: "436.md";
  slug: "436";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"437.md": {
	id: "437.md";
  slug: "437";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"438.md": {
	id: "438.md";
  slug: "438";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"439.md": {
	id: "439.md";
  slug: "439";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"44.md": {
	id: "44.md";
  slug: "44";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"440.md": {
	id: "440.md";
  slug: "440";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"441.md": {
	id: "441.md";
  slug: "441";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"442.md": {
	id: "442.md";
  slug: "442";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"443.md": {
	id: "443.md";
  slug: "443";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"444.md": {
	id: "444.md";
  slug: "444";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"445.md": {
	id: "445.md";
  slug: "445";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"446.md": {
	id: "446.md";
  slug: "446";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"447.md": {
	id: "447.md";
  slug: "447";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"448.md": {
	id: "448.md";
  slug: "448";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"449.md": {
	id: "449.md";
  slug: "449";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"45.md": {
	id: "45.md";
  slug: "45";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"450.md": {
	id: "450.md";
  slug: "450";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"451.md": {
	id: "451.md";
  slug: "451";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"452.md": {
	id: "452.md";
  slug: "452";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"453.md": {
	id: "453.md";
  slug: "453";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"454.md": {
	id: "454.md";
  slug: "454";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"455.md": {
	id: "455.md";
  slug: "455";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"456.md": {
	id: "456.md";
  slug: "456";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"457.md": {
	id: "457.md";
  slug: "457";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"458.md": {
	id: "458.md";
  slug: "458";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"459.md": {
	id: "459.md";
  slug: "459";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"46.md": {
	id: "46.md";
  slug: "46";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"460.md": {
	id: "460.md";
  slug: "460";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"461.md": {
	id: "461.md";
  slug: "461";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"462.md": {
	id: "462.md";
  slug: "462";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"463.md": {
	id: "463.md";
  slug: "463";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"464.md": {
	id: "464.md";
  slug: "464";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"465.md": {
	id: "465.md";
  slug: "465";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"466.md": {
	id: "466.md";
  slug: "466";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"467.md": {
	id: "467.md";
  slug: "467";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"468.md": {
	id: "468.md";
  slug: "468";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"469.md": {
	id: "469.md";
  slug: "469";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"47.md": {
	id: "47.md";
  slug: "47";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"470.md": {
	id: "470.md";
  slug: "470";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"471.md": {
	id: "471.md";
  slug: "471";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"472.md": {
	id: "472.md";
  slug: "472";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"473.md": {
	id: "473.md";
  slug: "473";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"474.md": {
	id: "474.md";
  slug: "474";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"475.md": {
	id: "475.md";
  slug: "475";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"476.md": {
	id: "476.md";
  slug: "476";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"477.md": {
	id: "477.md";
  slug: "477";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"478.md": {
	id: "478.md";
  slug: "478";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"479.md": {
	id: "479.md";
  slug: "479";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"48.md": {
	id: "48.md";
  slug: "48";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"480.md": {
	id: "480.md";
  slug: "480";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"481.md": {
	id: "481.md";
  slug: "481";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"482.md": {
	id: "482.md";
  slug: "482";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"483.md": {
	id: "483.md";
  slug: "483";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"484.md": {
	id: "484.md";
  slug: "484";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"485.md": {
	id: "485.md";
  slug: "485";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"486.md": {
	id: "486.md";
  slug: "486";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"487.md": {
	id: "487.md";
  slug: "487";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"488.md": {
	id: "488.md";
  slug: "488";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"489.md": {
	id: "489.md";
  slug: "489";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"49.md": {
	id: "49.md";
  slug: "49";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"490.md": {
	id: "490.md";
  slug: "490";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"491.md": {
	id: "491.md";
  slug: "491";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"492.md": {
	id: "492.md";
  slug: "492";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"493.md": {
	id: "493.md";
  slug: "493";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"494.md": {
	id: "494.md";
  slug: "494";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"495.md": {
	id: "495.md";
  slug: "495";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"496.md": {
	id: "496.md";
  slug: "496";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"497.md": {
	id: "497.md";
  slug: "497";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"498.md": {
	id: "498.md";
  slug: "498";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"499.md": {
	id: "499.md";
  slug: "499";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"5.md": {
	id: "5.md";
  slug: "5";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"50.md": {
	id: "50.md";
  slug: "50";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"500.md": {
	id: "500.md";
  slug: "500";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"501.md": {
	id: "501.md";
  slug: "501";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"502.md": {
	id: "502.md";
  slug: "502";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"503.md": {
	id: "503.md";
  slug: "503";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"504.md": {
	id: "504.md";
  slug: "504";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"505.md": {
	id: "505.md";
  slug: "505";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"506.md": {
	id: "506.md";
  slug: "506";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"507.md": {
	id: "507.md";
  slug: "507";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"508.md": {
	id: "508.md";
  slug: "508";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"509.md": {
	id: "509.md";
  slug: "509";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"51.md": {
	id: "51.md";
  slug: "51";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"510.md": {
	id: "510.md";
  slug: "510";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"511.md": {
	id: "511.md";
  slug: "511";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"512.md": {
	id: "512.md";
  slug: "512";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"513.md": {
	id: "513.md";
  slug: "513";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"514.md": {
	id: "514.md";
  slug: "514";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"515.md": {
	id: "515.md";
  slug: "515";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"516.md": {
	id: "516.md";
  slug: "516";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"517.md": {
	id: "517.md";
  slug: "517";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"518.md": {
	id: "518.md";
  slug: "518";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"519.md": {
	id: "519.md";
  slug: "519";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"52.md": {
	id: "52.md";
  slug: "52";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"520.md": {
	id: "520.md";
  slug: "520";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"521.md": {
	id: "521.md";
  slug: "521";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"522.md": {
	id: "522.md";
  slug: "522";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"523.md": {
	id: "523.md";
  slug: "523";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"524.md": {
	id: "524.md";
  slug: "524";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"525.md": {
	id: "525.md";
  slug: "525";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"526.md": {
	id: "526.md";
  slug: "526";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"527.md": {
	id: "527.md";
  slug: "527";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"528.md": {
	id: "528.md";
  slug: "528";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"529.md": {
	id: "529.md";
  slug: "529";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"53.md": {
	id: "53.md";
  slug: "53";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"530.md": {
	id: "530.md";
  slug: "530";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"531.md": {
	id: "531.md";
  slug: "531";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"532.md": {
	id: "532.md";
  slug: "532";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"533.md": {
	id: "533.md";
  slug: "533";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"534.md": {
	id: "534.md";
  slug: "534";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"535.md": {
	id: "535.md";
  slug: "535";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"536.md": {
	id: "536.md";
  slug: "536";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"537.md": {
	id: "537.md";
  slug: "537";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"538.md": {
	id: "538.md";
  slug: "538";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"539.md": {
	id: "539.md";
  slug: "539";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"54.md": {
	id: "54.md";
  slug: "54";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"540.md": {
	id: "540.md";
  slug: "540";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"541.md": {
	id: "541.md";
  slug: "541";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"542.md": {
	id: "542.md";
  slug: "542";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"543.md": {
	id: "543.md";
  slug: "543";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"544.md": {
	id: "544.md";
  slug: "544";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"545.md": {
	id: "545.md";
  slug: "545";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"546.md": {
	id: "546.md";
  slug: "546";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"547.md": {
	id: "547.md";
  slug: "547";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"548.md": {
	id: "548.md";
  slug: "548";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"549.md": {
	id: "549.md";
  slug: "549";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"55.md": {
	id: "55.md";
  slug: "55";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"550.md": {
	id: "550.md";
  slug: "550";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"551.md": {
	id: "551.md";
  slug: "551";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"552.md": {
	id: "552.md";
  slug: "552";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"553.md": {
	id: "553.md";
  slug: "553";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"554.md": {
	id: "554.md";
  slug: "554";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"555.md": {
	id: "555.md";
  slug: "555";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"556.md": {
	id: "556.md";
  slug: "556";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"557.md": {
	id: "557.md";
  slug: "557";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"558.md": {
	id: "558.md";
  slug: "558";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"559.md": {
	id: "559.md";
  slug: "559";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"56.md": {
	id: "56.md";
  slug: "56";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"560.md": {
	id: "560.md";
  slug: "560";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"561.md": {
	id: "561.md";
  slug: "561";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"562.md": {
	id: "562.md";
  slug: "562";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"563.md": {
	id: "563.md";
  slug: "563";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"564.md": {
	id: "564.md";
  slug: "564";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"565.md": {
	id: "565.md";
  slug: "565";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"566.md": {
	id: "566.md";
  slug: "566";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"567.md": {
	id: "567.md";
  slug: "567";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"568.md": {
	id: "568.md";
  slug: "568";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"569.md": {
	id: "569.md";
  slug: "569";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"57.md": {
	id: "57.md";
  slug: "57";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"570.md": {
	id: "570.md";
  slug: "570";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"571.md": {
	id: "571.md";
  slug: "571";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"572.md": {
	id: "572.md";
  slug: "572";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"573.md": {
	id: "573.md";
  slug: "573";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"574.md": {
	id: "574.md";
  slug: "574";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"575.md": {
	id: "575.md";
  slug: "575";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"576.md": {
	id: "576.md";
  slug: "576";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"577.md": {
	id: "577.md";
  slug: "577";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"578.md": {
	id: "578.md";
  slug: "578";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"579.md": {
	id: "579.md";
  slug: "579";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"58.md": {
	id: "58.md";
  slug: "58";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"580.md": {
	id: "580.md";
  slug: "580";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"581.md": {
	id: "581.md";
  slug: "581";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"582.md": {
	id: "582.md";
  slug: "582";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"583.md": {
	id: "583.md";
  slug: "583";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"584.md": {
	id: "584.md";
  slug: "584";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"585.md": {
	id: "585.md";
  slug: "585";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"586.md": {
	id: "586.md";
  slug: "586";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"587.md": {
	id: "587.md";
  slug: "587";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"588.md": {
	id: "588.md";
  slug: "588";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"589.md": {
	id: "589.md";
  slug: "589";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"59.md": {
	id: "59.md";
  slug: "59";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"590.md": {
	id: "590.md";
  slug: "590";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"591.md": {
	id: "591.md";
  slug: "591";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"592.md": {
	id: "592.md";
  slug: "592";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"593.md": {
	id: "593.md";
  slug: "593";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"594.md": {
	id: "594.md";
  slug: "594";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"595.md": {
	id: "595.md";
  slug: "595";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"596.md": {
	id: "596.md";
  slug: "596";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"597.md": {
	id: "597.md";
  slug: "597";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"598.md": {
	id: "598.md";
  slug: "598";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"599.md": {
	id: "599.md";
  slug: "599";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"6.md": {
	id: "6.md";
  slug: "6";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"60.md": {
	id: "60.md";
  slug: "60";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"600.md": {
	id: "600.md";
  slug: "600";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"601.md": {
	id: "601.md";
  slug: "601";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"602.md": {
	id: "602.md";
  slug: "602";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"603.md": {
	id: "603.md";
  slug: "603";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"604.md": {
	id: "604.md";
  slug: "604";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"605.md": {
	id: "605.md";
  slug: "605";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"606.md": {
	id: "606.md";
  slug: "606";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"607.md": {
	id: "607.md";
  slug: "607";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"608.md": {
	id: "608.md";
  slug: "608";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"609.md": {
	id: "609.md";
  slug: "609";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"61.md": {
	id: "61.md";
  slug: "61";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"610.md": {
	id: "610.md";
  slug: "610";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"611.md": {
	id: "611.md";
  slug: "611";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"612.md": {
	id: "612.md";
  slug: "612";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"613.md": {
	id: "613.md";
  slug: "613";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"614.md": {
	id: "614.md";
  slug: "614";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"615.md": {
	id: "615.md";
  slug: "615";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"616.md": {
	id: "616.md";
  slug: "616";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"617.md": {
	id: "617.md";
  slug: "617";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"618.md": {
	id: "618.md";
  slug: "618";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"619.md": {
	id: "619.md";
  slug: "619";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"62.md": {
	id: "62.md";
  slug: "62";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"620.md": {
	id: "620.md";
  slug: "620";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"621.md": {
	id: "621.md";
  slug: "621";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"622.md": {
	id: "622.md";
  slug: "622";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"623.md": {
	id: "623.md";
  slug: "623";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"624.md": {
	id: "624.md";
  slug: "624";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"625.md": {
	id: "625.md";
  slug: "625";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"626.md": {
	id: "626.md";
  slug: "626";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"627.md": {
	id: "627.md";
  slug: "627";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"628.md": {
	id: "628.md";
  slug: "628";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"629.md": {
	id: "629.md";
  slug: "629";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"63.md": {
	id: "63.md";
  slug: "63";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"630.md": {
	id: "630.md";
  slug: "630";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"631.md": {
	id: "631.md";
  slug: "631";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"632.md": {
	id: "632.md";
  slug: "632";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"633.md": {
	id: "633.md";
  slug: "633";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"634.md": {
	id: "634.md";
  slug: "634";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"635.md": {
	id: "635.md";
  slug: "635";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"636.md": {
	id: "636.md";
  slug: "636";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"637.md": {
	id: "637.md";
  slug: "637";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"638.md": {
	id: "638.md";
  slug: "638";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"639.md": {
	id: "639.md";
  slug: "639";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"64.md": {
	id: "64.md";
  slug: "64";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"640.md": {
	id: "640.md";
  slug: "640";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"641.md": {
	id: "641.md";
  slug: "641";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"642.md": {
	id: "642.md";
  slug: "642";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"643.md": {
	id: "643.md";
  slug: "643";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"644.md": {
	id: "644.md";
  slug: "644";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"645.md": {
	id: "645.md";
  slug: "645";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"646.md": {
	id: "646.md";
  slug: "646";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"647.md": {
	id: "647.md";
  slug: "647";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"648.md": {
	id: "648.md";
  slug: "648";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"649.md": {
	id: "649.md";
  slug: "649";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"65.md": {
	id: "65.md";
  slug: "65";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"650.md": {
	id: "650.md";
  slug: "650";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"651.md": {
	id: "651.md";
  slug: "651";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"652.md": {
	id: "652.md";
  slug: "652";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"653.md": {
	id: "653.md";
  slug: "653";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"654.md": {
	id: "654.md";
  slug: "654";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"655.md": {
	id: "655.md";
  slug: "655";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"656.md": {
	id: "656.md";
  slug: "656";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"657.md": {
	id: "657.md";
  slug: "657";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"658.md": {
	id: "658.md";
  slug: "658";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"659.md": {
	id: "659.md";
  slug: "659";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"66.md": {
	id: "66.md";
  slug: "66";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"660.md": {
	id: "660.md";
  slug: "660";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"661.md": {
	id: "661.md";
  slug: "661";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"662.md": {
	id: "662.md";
  slug: "662";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"663.md": {
	id: "663.md";
  slug: "663";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"664.md": {
	id: "664.md";
  slug: "664";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"665.md": {
	id: "665.md";
  slug: "665";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"666.md": {
	id: "666.md";
  slug: "666";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"667.md": {
	id: "667.md";
  slug: "667";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"668.md": {
	id: "668.md";
  slug: "668";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"669.md": {
	id: "669.md";
  slug: "669";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"67.md": {
	id: "67.md";
  slug: "67";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"670.md": {
	id: "670.md";
  slug: "670";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"671.md": {
	id: "671.md";
  slug: "671";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"672.md": {
	id: "672.md";
  slug: "672";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"673.md": {
	id: "673.md";
  slug: "673";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"674.md": {
	id: "674.md";
  slug: "674";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"675.md": {
	id: "675.md";
  slug: "675";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"676.md": {
	id: "676.md";
  slug: "676";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"677.md": {
	id: "677.md";
  slug: "677";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"678.md": {
	id: "678.md";
  slug: "678";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"679.md": {
	id: "679.md";
  slug: "679";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"68.md": {
	id: "68.md";
  slug: "68";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"680.md": {
	id: "680.md";
  slug: "680";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"681.md": {
	id: "681.md";
  slug: "681";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"682.md": {
	id: "682.md";
  slug: "682";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"683.md": {
	id: "683.md";
  slug: "683";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"684.md": {
	id: "684.md";
  slug: "684";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"685.md": {
	id: "685.md";
  slug: "685";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"686.md": {
	id: "686.md";
  slug: "686";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"687.md": {
	id: "687.md";
  slug: "687";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"688.md": {
	id: "688.md";
  slug: "688";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"689.md": {
	id: "689.md";
  slug: "689";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"69.md": {
	id: "69.md";
  slug: "69";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"690.md": {
	id: "690.md";
  slug: "690";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"691.md": {
	id: "691.md";
  slug: "691";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"692.md": {
	id: "692.md";
  slug: "692";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"693.md": {
	id: "693.md";
  slug: "693";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"694.md": {
	id: "694.md";
  slug: "694";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"695.md": {
	id: "695.md";
  slug: "695";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"696.md": {
	id: "696.md";
  slug: "696";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"697.md": {
	id: "697.md";
  slug: "697";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"698.md": {
	id: "698.md";
  slug: "698";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"699.md": {
	id: "699.md";
  slug: "699";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"7.md": {
	id: "7.md";
  slug: "7";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"70.md": {
	id: "70.md";
  slug: "70";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"700.md": {
	id: "700.md";
  slug: "700";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"701.md": {
	id: "701.md";
  slug: "701";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"702.md": {
	id: "702.md";
  slug: "702";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"703.md": {
	id: "703.md";
  slug: "703";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"704.md": {
	id: "704.md";
  slug: "704";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"705.md": {
	id: "705.md";
  slug: "705";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"706.md": {
	id: "706.md";
  slug: "706";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"707.md": {
	id: "707.md";
  slug: "707";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"708.md": {
	id: "708.md";
  slug: "708";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"709.md": {
	id: "709.md";
  slug: "709";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"71.md": {
	id: "71.md";
  slug: "71";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"710.md": {
	id: "710.md";
  slug: "710";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"711.md": {
	id: "711.md";
  slug: "711";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"712.md": {
	id: "712.md";
  slug: "712";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"713.md": {
	id: "713.md";
  slug: "713";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"714.md": {
	id: "714.md";
  slug: "714";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"715.md": {
	id: "715.md";
  slug: "715";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"716.md": {
	id: "716.md";
  slug: "716";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"717.md": {
	id: "717.md";
  slug: "717";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"718.md": {
	id: "718.md";
  slug: "718";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"719.md": {
	id: "719.md";
  slug: "719";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"72.md": {
	id: "72.md";
  slug: "72";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"720.md": {
	id: "720.md";
  slug: "720";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"721.md": {
	id: "721.md";
  slug: "721";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"722.md": {
	id: "722.md";
  slug: "722";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"723.md": {
	id: "723.md";
  slug: "723";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"724.md": {
	id: "724.md";
  slug: "724";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"725.md": {
	id: "725.md";
  slug: "725";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"726.md": {
	id: "726.md";
  slug: "726";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"727.md": {
	id: "727.md";
  slug: "727";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"728.md": {
	id: "728.md";
  slug: "728";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"729.md": {
	id: "729.md";
  slug: "729";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"73.md": {
	id: "73.md";
  slug: "73";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"730.md": {
	id: "730.md";
  slug: "730";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"731.md": {
	id: "731.md";
  slug: "731";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"732.md": {
	id: "732.md";
  slug: "732";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"733.md": {
	id: "733.md";
  slug: "733";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"734.md": {
	id: "734.md";
  slug: "734";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"735.md": {
	id: "735.md";
  slug: "735";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"736.md": {
	id: "736.md";
  slug: "736";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"737.md": {
	id: "737.md";
  slug: "737";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"738.md": {
	id: "738.md";
  slug: "738";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"739.md": {
	id: "739.md";
  slug: "739";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"74.md": {
	id: "74.md";
  slug: "74";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"740.md": {
	id: "740.md";
  slug: "740";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"741.md": {
	id: "741.md";
  slug: "741";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"742.md": {
	id: "742.md";
  slug: "742";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"743.md": {
	id: "743.md";
  slug: "743";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"744.md": {
	id: "744.md";
  slug: "744";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"745.md": {
	id: "745.md";
  slug: "745";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"746.md": {
	id: "746.md";
  slug: "746";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"747.md": {
	id: "747.md";
  slug: "747";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"748.md": {
	id: "748.md";
  slug: "748";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"749.md": {
	id: "749.md";
  slug: "749";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"75.md": {
	id: "75.md";
  slug: "75";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"750.md": {
	id: "750.md";
  slug: "750";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"751.md": {
	id: "751.md";
  slug: "751";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"752.md": {
	id: "752.md";
  slug: "752";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"753.md": {
	id: "753.md";
  slug: "753";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"754.md": {
	id: "754.md";
  slug: "754";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"755.md": {
	id: "755.md";
  slug: "755";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"756.md": {
	id: "756.md";
  slug: "756";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"757.md": {
	id: "757.md";
  slug: "757";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"758.md": {
	id: "758.md";
  slug: "758";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"759.md": {
	id: "759.md";
  slug: "759";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"76.md": {
	id: "76.md";
  slug: "76";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"760.md": {
	id: "760.md";
  slug: "760";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"761.md": {
	id: "761.md";
  slug: "761";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"762.md": {
	id: "762.md";
  slug: "762";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"763.md": {
	id: "763.md";
  slug: "763";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"764.md": {
	id: "764.md";
  slug: "764";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"765.md": {
	id: "765.md";
  slug: "765";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"766.md": {
	id: "766.md";
  slug: "766";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"767.md": {
	id: "767.md";
  slug: "767";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"768.md": {
	id: "768.md";
  slug: "768";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"769.md": {
	id: "769.md";
  slug: "769";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"77.md": {
	id: "77.md";
  slug: "77";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"770.md": {
	id: "770.md";
  slug: "770";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"771.md": {
	id: "771.md";
  slug: "771";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"772.md": {
	id: "772.md";
  slug: "772";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"773.md": {
	id: "773.md";
  slug: "773";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"774.md": {
	id: "774.md";
  slug: "774";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"775.md": {
	id: "775.md";
  slug: "775";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"776.md": {
	id: "776.md";
  slug: "776";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"777.md": {
	id: "777.md";
  slug: "777";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"778.md": {
	id: "778.md";
  slug: "778";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"779.md": {
	id: "779.md";
  slug: "779";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"78.md": {
	id: "78.md";
  slug: "78";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"780.md": {
	id: "780.md";
  slug: "780";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"781.md": {
	id: "781.md";
  slug: "781";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"782.md": {
	id: "782.md";
  slug: "782";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"783.md": {
	id: "783.md";
  slug: "783";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"784.md": {
	id: "784.md";
  slug: "784";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"785.md": {
	id: "785.md";
  slug: "785";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"786.md": {
	id: "786.md";
  slug: "786";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"787.md": {
	id: "787.md";
  slug: "787";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"788.md": {
	id: "788.md";
  slug: "788";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"789.md": {
	id: "789.md";
  slug: "789";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"79.md": {
	id: "79.md";
  slug: "79";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"790.md": {
	id: "790.md";
  slug: "790";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"791.md": {
	id: "791.md";
  slug: "791";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"792.md": {
	id: "792.md";
  slug: "792";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"793.md": {
	id: "793.md";
  slug: "793";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"794.md": {
	id: "794.md";
  slug: "794";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"795.md": {
	id: "795.md";
  slug: "795";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"796.md": {
	id: "796.md";
  slug: "796";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"797.md": {
	id: "797.md";
  slug: "797";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"798.md": {
	id: "798.md";
  slug: "798";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"799.md": {
	id: "799.md";
  slug: "799";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"8.md": {
	id: "8.md";
  slug: "8";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"80.md": {
	id: "80.md";
  slug: "80";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"800.md": {
	id: "800.md";
  slug: "800";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"801.md": {
	id: "801.md";
  slug: "801";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"802.md": {
	id: "802.md";
  slug: "802";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"803.md": {
	id: "803.md";
  slug: "803";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"804.md": {
	id: "804.md";
  slug: "804";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"805.md": {
	id: "805.md";
  slug: "805";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"806.md": {
	id: "806.md";
  slug: "806";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"807.md": {
	id: "807.md";
  slug: "807";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"808.md": {
	id: "808.md";
  slug: "808";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"809.md": {
	id: "809.md";
  slug: "809";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"81.md": {
	id: "81.md";
  slug: "81";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"810.md": {
	id: "810.md";
  slug: "810";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"811.md": {
	id: "811.md";
  slug: "811";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"812.md": {
	id: "812.md";
  slug: "812";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"813.md": {
	id: "813.md";
  slug: "813";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"814.md": {
	id: "814.md";
  slug: "814";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"815.md": {
	id: "815.md";
  slug: "815";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"816.md": {
	id: "816.md";
  slug: "816";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"817.md": {
	id: "817.md";
  slug: "817";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"818.md": {
	id: "818.md";
  slug: "818";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"819.md": {
	id: "819.md";
  slug: "819";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"82.md": {
	id: "82.md";
  slug: "82";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"820.md": {
	id: "820.md";
  slug: "820";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"821.md": {
	id: "821.md";
  slug: "821";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"822.md": {
	id: "822.md";
  slug: "822";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"823.md": {
	id: "823.md";
  slug: "823";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"824.md": {
	id: "824.md";
  slug: "824";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"825.md": {
	id: "825.md";
  slug: "825";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"826.md": {
	id: "826.md";
  slug: "826";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"827.md": {
	id: "827.md";
  slug: "827";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"828.md": {
	id: "828.md";
  slug: "828";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"829.md": {
	id: "829.md";
  slug: "829";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"83.md": {
	id: "83.md";
  slug: "83";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"830.md": {
	id: "830.md";
  slug: "830";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"831.md": {
	id: "831.md";
  slug: "831";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"832.md": {
	id: "832.md";
  slug: "832";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"833.md": {
	id: "833.md";
  slug: "833";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"834.md": {
	id: "834.md";
  slug: "834";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"835.md": {
	id: "835.md";
  slug: "835";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"836.md": {
	id: "836.md";
  slug: "836";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"837.md": {
	id: "837.md";
  slug: "837";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"838.md": {
	id: "838.md";
  slug: "838";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"839.md": {
	id: "839.md";
  slug: "839";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"84.md": {
	id: "84.md";
  slug: "84";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"840.md": {
	id: "840.md";
  slug: "840";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"841.md": {
	id: "841.md";
  slug: "841";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"842.md": {
	id: "842.md";
  slug: "842";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"843.md": {
	id: "843.md";
  slug: "843";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"844.md": {
	id: "844.md";
  slug: "844";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"845.md": {
	id: "845.md";
  slug: "845";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"846.md": {
	id: "846.md";
  slug: "846";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"847.md": {
	id: "847.md";
  slug: "847";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"848.md": {
	id: "848.md";
  slug: "848";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"849.md": {
	id: "849.md";
  slug: "849";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"85.md": {
	id: "85.md";
  slug: "85";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"850.md": {
	id: "850.md";
  slug: "850";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"851.md": {
	id: "851.md";
  slug: "851";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"852.md": {
	id: "852.md";
  slug: "852";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"853.md": {
	id: "853.md";
  slug: "853";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"854.md": {
	id: "854.md";
  slug: "854";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"855.md": {
	id: "855.md";
  slug: "855";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"856.md": {
	id: "856.md";
  slug: "856";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"857.md": {
	id: "857.md";
  slug: "857";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"858.md": {
	id: "858.md";
  slug: "858";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"859.md": {
	id: "859.md";
  slug: "859";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"86.md": {
	id: "86.md";
  slug: "86";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"860.md": {
	id: "860.md";
  slug: "860";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"861.md": {
	id: "861.md";
  slug: "861";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"862.md": {
	id: "862.md";
  slug: "862";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"863.md": {
	id: "863.md";
  slug: "863";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"864.md": {
	id: "864.md";
  slug: "864";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"865.md": {
	id: "865.md";
  slug: "865";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"866.md": {
	id: "866.md";
  slug: "866";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"867.md": {
	id: "867.md";
  slug: "867";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"868.md": {
	id: "868.md";
  slug: "868";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"869.md": {
	id: "869.md";
  slug: "869";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"87.md": {
	id: "87.md";
  slug: "87";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"870.md": {
	id: "870.md";
  slug: "870";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"871.md": {
	id: "871.md";
  slug: "871";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"872.md": {
	id: "872.md";
  slug: "872";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"873.md": {
	id: "873.md";
  slug: "873";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"874.md": {
	id: "874.md";
  slug: "874";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"875.md": {
	id: "875.md";
  slug: "875";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"876.md": {
	id: "876.md";
  slug: "876";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"877.md": {
	id: "877.md";
  slug: "877";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"878.md": {
	id: "878.md";
  slug: "878";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"879.md": {
	id: "879.md";
  slug: "879";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"88.md": {
	id: "88.md";
  slug: "88";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"880.md": {
	id: "880.md";
  slug: "880";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"881.md": {
	id: "881.md";
  slug: "881";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"882.md": {
	id: "882.md";
  slug: "882";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"883.md": {
	id: "883.md";
  slug: "883";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"884.md": {
	id: "884.md";
  slug: "884";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"885.md": {
	id: "885.md";
  slug: "885";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"886.md": {
	id: "886.md";
  slug: "886";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"887.md": {
	id: "887.md";
  slug: "887";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"888.md": {
	id: "888.md";
  slug: "888";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"889.md": {
	id: "889.md";
  slug: "889";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"89.md": {
	id: "89.md";
  slug: "89";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"890.md": {
	id: "890.md";
  slug: "890";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"891.md": {
	id: "891.md";
  slug: "891";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"892.md": {
	id: "892.md";
  slug: "892";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"893.md": {
	id: "893.md";
  slug: "893";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"894.md": {
	id: "894.md";
  slug: "894";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"895.md": {
	id: "895.md";
  slug: "895";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"896.md": {
	id: "896.md";
  slug: "896";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"897.md": {
	id: "897.md";
  slug: "897";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"898.md": {
	id: "898.md";
  slug: "898";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"899.md": {
	id: "899.md";
  slug: "899";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"9.md": {
	id: "9.md";
  slug: "9";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"90.md": {
	id: "90.md";
  slug: "90";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"900.md": {
	id: "900.md";
  slug: "900";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"901.md": {
	id: "901.md";
  slug: "901";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"902.md": {
	id: "902.md";
  slug: "902";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"903.md": {
	id: "903.md";
  slug: "903";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"904.md": {
	id: "904.md";
  slug: "904";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"905.md": {
	id: "905.md";
  slug: "905";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"906.md": {
	id: "906.md";
  slug: "906";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"907.md": {
	id: "907.md";
  slug: "907";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"908.md": {
	id: "908.md";
  slug: "908";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"909.md": {
	id: "909.md";
  slug: "909";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"91.md": {
	id: "91.md";
  slug: "91";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"910.md": {
	id: "910.md";
  slug: "910";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"911.md": {
	id: "911.md";
  slug: "911";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"912.md": {
	id: "912.md";
  slug: "912";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"913.md": {
	id: "913.md";
  slug: "913";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"914.md": {
	id: "914.md";
  slug: "914";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"915.md": {
	id: "915.md";
  slug: "915";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"916.md": {
	id: "916.md";
  slug: "916";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"917.md": {
	id: "917.md";
  slug: "917";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"918.md": {
	id: "918.md";
  slug: "918";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"919.md": {
	id: "919.md";
  slug: "919";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"92.md": {
	id: "92.md";
  slug: "92";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"920.md": {
	id: "920.md";
  slug: "920";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"921.md": {
	id: "921.md";
  slug: "921";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"922.md": {
	id: "922.md";
  slug: "922";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"923.md": {
	id: "923.md";
  slug: "923";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"924.md": {
	id: "924.md";
  slug: "924";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"925.md": {
	id: "925.md";
  slug: "925";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"926.md": {
	id: "926.md";
  slug: "926";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"927.md": {
	id: "927.md";
  slug: "927";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"928.md": {
	id: "928.md";
  slug: "928";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"929.md": {
	id: "929.md";
  slug: "929";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"93.md": {
	id: "93.md";
  slug: "93";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"930.md": {
	id: "930.md";
  slug: "930";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"931.md": {
	id: "931.md";
  slug: "931";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"932.md": {
	id: "932.md";
  slug: "932";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"933.md": {
	id: "933.md";
  slug: "933";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"934.md": {
	id: "934.md";
  slug: "934";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"935.md": {
	id: "935.md";
  slug: "935";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"936.md": {
	id: "936.md";
  slug: "936";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"937.md": {
	id: "937.md";
  slug: "937";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"938.md": {
	id: "938.md";
  slug: "938";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"939.md": {
	id: "939.md";
  slug: "939";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"94.md": {
	id: "94.md";
  slug: "94";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"940.md": {
	id: "940.md";
  slug: "940";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"941.md": {
	id: "941.md";
  slug: "941";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"942.md": {
	id: "942.md";
  slug: "942";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"943.md": {
	id: "943.md";
  slug: "943";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"944.md": {
	id: "944.md";
  slug: "944";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"945.md": {
	id: "945.md";
  slug: "945";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"946.md": {
	id: "946.md";
  slug: "946";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"947.md": {
	id: "947.md";
  slug: "947";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"948.md": {
	id: "948.md";
  slug: "948";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"949.md": {
	id: "949.md";
  slug: "949";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"95.md": {
	id: "95.md";
  slug: "95";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"950.md": {
	id: "950.md";
  slug: "950";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"951.md": {
	id: "951.md";
  slug: "951";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"952.md": {
	id: "952.md";
  slug: "952";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"953.md": {
	id: "953.md";
  slug: "953";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"954.md": {
	id: "954.md";
  slug: "954";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"955.md": {
	id: "955.md";
  slug: "955";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"956.md": {
	id: "956.md";
  slug: "956";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"957.md": {
	id: "957.md";
  slug: "957";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"958.md": {
	id: "958.md";
  slug: "958";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"959.md": {
	id: "959.md";
  slug: "959";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"96.md": {
	id: "96.md";
  slug: "96";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"960.md": {
	id: "960.md";
  slug: "960";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"961.md": {
	id: "961.md";
  slug: "961";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"962.md": {
	id: "962.md";
  slug: "962";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"963.md": {
	id: "963.md";
  slug: "963";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"964.md": {
	id: "964.md";
  slug: "964";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"965.md": {
	id: "965.md";
  slug: "965";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"966.md": {
	id: "966.md";
  slug: "966";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"967.md": {
	id: "967.md";
  slug: "967";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"968.md": {
	id: "968.md";
  slug: "968";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"969.md": {
	id: "969.md";
  slug: "969";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"97.md": {
	id: "97.md";
  slug: "97";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"970.md": {
	id: "970.md";
  slug: "970";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"971.md": {
	id: "971.md";
  slug: "971";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"972.md": {
	id: "972.md";
  slug: "972";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"973.md": {
	id: "973.md";
  slug: "973";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"974.md": {
	id: "974.md";
  slug: "974";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"975.md": {
	id: "975.md";
  slug: "975";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"976.md": {
	id: "976.md";
  slug: "976";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"977.md": {
	id: "977.md";
  slug: "977";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"978.md": {
	id: "978.md";
  slug: "978";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"979.md": {
	id: "979.md";
  slug: "979";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"98.md": {
	id: "98.md";
  slug: "98";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"980.md": {
	id: "980.md";
  slug: "980";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"981.md": {
	id: "981.md";
  slug: "981";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"982.md": {
	id: "982.md";
  slug: "982";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"983.md": {
	id: "983.md";
  slug: "983";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"984.md": {
	id: "984.md";
  slug: "984";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"985.md": {
	id: "985.md";
  slug: "985";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"986.md": {
	id: "986.md";
  slug: "986";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"987.md": {
	id: "987.md";
  slug: "987";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"988.md": {
	id: "988.md";
  slug: "988";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"989.md": {
	id: "989.md";
  slug: "989";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"99.md": {
	id: "99.md";
  slug: "99";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"990.md": {
	id: "990.md";
  slug: "990";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"991.md": {
	id: "991.md";
  slug: "991";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"992.md": {
	id: "992.md";
  slug: "992";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"993.md": {
	id: "993.md";
  slug: "993";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"994.md": {
	id: "994.md";
  slug: "994";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"995.md": {
	id: "995.md";
  slug: "995";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"996.md": {
	id: "996.md";
  slug: "996";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"997.md": {
	id: "997.md";
  slug: "997";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"998.md": {
	id: "998.md";
  slug: "998";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
"999.md": {
	id: "999.md";
  slug: "999";
  body: string;
  collection: "template1";
  data: InferEntrySchema<"template1">
} & { render(): Render[".md"] };
};
"template2": {
"1.md": {
	id: "1.md";
  slug: "1";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"10.md": {
	id: "10.md";
  slug: "10";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"100.md": {
	id: "100.md";
  slug: "100";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"1000.md": {
	id: "1000.md";
  slug: "1000";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"101.md": {
	id: "101.md";
  slug: "101";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"102.md": {
	id: "102.md";
  slug: "102";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"103.md": {
	id: "103.md";
  slug: "103";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"104.md": {
	id: "104.md";
  slug: "104";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"105.md": {
	id: "105.md";
  slug: "105";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"106.md": {
	id: "106.md";
  slug: "106";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"107.md": {
	id: "107.md";
  slug: "107";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"108.md": {
	id: "108.md";
  slug: "108";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"109.md": {
	id: "109.md";
  slug: "109";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"11.md": {
	id: "11.md";
  slug: "11";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"110.md": {
	id: "110.md";
  slug: "110";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"111.md": {
	id: "111.md";
  slug: "111";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"112.md": {
	id: "112.md";
  slug: "112";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"113.md": {
	id: "113.md";
  slug: "113";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"114.md": {
	id: "114.md";
  slug: "114";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"115.md": {
	id: "115.md";
  slug: "115";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"116.md": {
	id: "116.md";
  slug: "116";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"117.md": {
	id: "117.md";
  slug: "117";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"118.md": {
	id: "118.md";
  slug: "118";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"119.md": {
	id: "119.md";
  slug: "119";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"12.md": {
	id: "12.md";
  slug: "12";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"120.md": {
	id: "120.md";
  slug: "120";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"121.md": {
	id: "121.md";
  slug: "121";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"122.md": {
	id: "122.md";
  slug: "122";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"123.md": {
	id: "123.md";
  slug: "123";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"124.md": {
	id: "124.md";
  slug: "124";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"125.md": {
	id: "125.md";
  slug: "125";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"126.md": {
	id: "126.md";
  slug: "126";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"127.md": {
	id: "127.md";
  slug: "127";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"128.md": {
	id: "128.md";
  slug: "128";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"129.md": {
	id: "129.md";
  slug: "129";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"13.md": {
	id: "13.md";
  slug: "13";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"130.md": {
	id: "130.md";
  slug: "130";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"131.md": {
	id: "131.md";
  slug: "131";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"132.md": {
	id: "132.md";
  slug: "132";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"133.md": {
	id: "133.md";
  slug: "133";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"134.md": {
	id: "134.md";
  slug: "134";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"135.md": {
	id: "135.md";
  slug: "135";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"136.md": {
	id: "136.md";
  slug: "136";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"137.md": {
	id: "137.md";
  slug: "137";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"138.md": {
	id: "138.md";
  slug: "138";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"139.md": {
	id: "139.md";
  slug: "139";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"14.md": {
	id: "14.md";
  slug: "14";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"140.md": {
	id: "140.md";
  slug: "140";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"141.md": {
	id: "141.md";
  slug: "141";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"142.md": {
	id: "142.md";
  slug: "142";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"143.md": {
	id: "143.md";
  slug: "143";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"144.md": {
	id: "144.md";
  slug: "144";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"145.md": {
	id: "145.md";
  slug: "145";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"146.md": {
	id: "146.md";
  slug: "146";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"147.md": {
	id: "147.md";
  slug: "147";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"148.md": {
	id: "148.md";
  slug: "148";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"149.md": {
	id: "149.md";
  slug: "149";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"15.md": {
	id: "15.md";
  slug: "15";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"150.md": {
	id: "150.md";
  slug: "150";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"151.md": {
	id: "151.md";
  slug: "151";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"152.md": {
	id: "152.md";
  slug: "152";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"153.md": {
	id: "153.md";
  slug: "153";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"154.md": {
	id: "154.md";
  slug: "154";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"155.md": {
	id: "155.md";
  slug: "155";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"156.md": {
	id: "156.md";
  slug: "156";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"157.md": {
	id: "157.md";
  slug: "157";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"158.md": {
	id: "158.md";
  slug: "158";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"159.md": {
	id: "159.md";
  slug: "159";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"16.md": {
	id: "16.md";
  slug: "16";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"160.md": {
	id: "160.md";
  slug: "160";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"161.md": {
	id: "161.md";
  slug: "161";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"162.md": {
	id: "162.md";
  slug: "162";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"163.md": {
	id: "163.md";
  slug: "163";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"164.md": {
	id: "164.md";
  slug: "164";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"165.md": {
	id: "165.md";
  slug: "165";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"166.md": {
	id: "166.md";
  slug: "166";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"167.md": {
	id: "167.md";
  slug: "167";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"168.md": {
	id: "168.md";
  slug: "168";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"169.md": {
	id: "169.md";
  slug: "169";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"17.md": {
	id: "17.md";
  slug: "17";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"170.md": {
	id: "170.md";
  slug: "170";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"171.md": {
	id: "171.md";
  slug: "171";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"172.md": {
	id: "172.md";
  slug: "172";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"173.md": {
	id: "173.md";
  slug: "173";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"174.md": {
	id: "174.md";
  slug: "174";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"175.md": {
	id: "175.md";
  slug: "175";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"176.md": {
	id: "176.md";
  slug: "176";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"177.md": {
	id: "177.md";
  slug: "177";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"178.md": {
	id: "178.md";
  slug: "178";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"179.md": {
	id: "179.md";
  slug: "179";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"18.md": {
	id: "18.md";
  slug: "18";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"180.md": {
	id: "180.md";
  slug: "180";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"181.md": {
	id: "181.md";
  slug: "181";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"182.md": {
	id: "182.md";
  slug: "182";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"183.md": {
	id: "183.md";
  slug: "183";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"184.md": {
	id: "184.md";
  slug: "184";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"185.md": {
	id: "185.md";
  slug: "185";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"186.md": {
	id: "186.md";
  slug: "186";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"187.md": {
	id: "187.md";
  slug: "187";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"188.md": {
	id: "188.md";
  slug: "188";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"189.md": {
	id: "189.md";
  slug: "189";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"19.md": {
	id: "19.md";
  slug: "19";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"190.md": {
	id: "190.md";
  slug: "190";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"191.md": {
	id: "191.md";
  slug: "191";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"192.md": {
	id: "192.md";
  slug: "192";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"193.md": {
	id: "193.md";
  slug: "193";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"194.md": {
	id: "194.md";
  slug: "194";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"195.md": {
	id: "195.md";
  slug: "195";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"196.md": {
	id: "196.md";
  slug: "196";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"197.md": {
	id: "197.md";
  slug: "197";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"198.md": {
	id: "198.md";
  slug: "198";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"199.md": {
	id: "199.md";
  slug: "199";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"2.md": {
	id: "2.md";
  slug: "2";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"20.md": {
	id: "20.md";
  slug: "20";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"200.md": {
	id: "200.md";
  slug: "200";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"201.md": {
	id: "201.md";
  slug: "201";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"202.md": {
	id: "202.md";
  slug: "202";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"203.md": {
	id: "203.md";
  slug: "203";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"204.md": {
	id: "204.md";
  slug: "204";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"205.md": {
	id: "205.md";
  slug: "205";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"206.md": {
	id: "206.md";
  slug: "206";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"207.md": {
	id: "207.md";
  slug: "207";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"208.md": {
	id: "208.md";
  slug: "208";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"209.md": {
	id: "209.md";
  slug: "209";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"21.md": {
	id: "21.md";
  slug: "21";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"210.md": {
	id: "210.md";
  slug: "210";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"211.md": {
	id: "211.md";
  slug: "211";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"212.md": {
	id: "212.md";
  slug: "212";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"213.md": {
	id: "213.md";
  slug: "213";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"214.md": {
	id: "214.md";
  slug: "214";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"215.md": {
	id: "215.md";
  slug: "215";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"216.md": {
	id: "216.md";
  slug: "216";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"217.md": {
	id: "217.md";
  slug: "217";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"218.md": {
	id: "218.md";
  slug: "218";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"219.md": {
	id: "219.md";
  slug: "219";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"22.md": {
	id: "22.md";
  slug: "22";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"220.md": {
	id: "220.md";
  slug: "220";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"221.md": {
	id: "221.md";
  slug: "221";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"222.md": {
	id: "222.md";
  slug: "222";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"223.md": {
	id: "223.md";
  slug: "223";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"224.md": {
	id: "224.md";
  slug: "224";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"225.md": {
	id: "225.md";
  slug: "225";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"226.md": {
	id: "226.md";
  slug: "226";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"227.md": {
	id: "227.md";
  slug: "227";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"228.md": {
	id: "228.md";
  slug: "228";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"229.md": {
	id: "229.md";
  slug: "229";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"23.md": {
	id: "23.md";
  slug: "23";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"230.md": {
	id: "230.md";
  slug: "230";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"231.md": {
	id: "231.md";
  slug: "231";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"232.md": {
	id: "232.md";
  slug: "232";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"233.md": {
	id: "233.md";
  slug: "233";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"234.md": {
	id: "234.md";
  slug: "234";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"235.md": {
	id: "235.md";
  slug: "235";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"236.md": {
	id: "236.md";
  slug: "236";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"237.md": {
	id: "237.md";
  slug: "237";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"238.md": {
	id: "238.md";
  slug: "238";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"239.md": {
	id: "239.md";
  slug: "239";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"24.md": {
	id: "24.md";
  slug: "24";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"240.md": {
	id: "240.md";
  slug: "240";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"241.md": {
	id: "241.md";
  slug: "241";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"242.md": {
	id: "242.md";
  slug: "242";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"243.md": {
	id: "243.md";
  slug: "243";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"244.md": {
	id: "244.md";
  slug: "244";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"245.md": {
	id: "245.md";
  slug: "245";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"246.md": {
	id: "246.md";
  slug: "246";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"247.md": {
	id: "247.md";
  slug: "247";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"248.md": {
	id: "248.md";
  slug: "248";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"249.md": {
	id: "249.md";
  slug: "249";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"25.md": {
	id: "25.md";
  slug: "25";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"250.md": {
	id: "250.md";
  slug: "250";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"251.md": {
	id: "251.md";
  slug: "251";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"252.md": {
	id: "252.md";
  slug: "252";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"253.md": {
	id: "253.md";
  slug: "253";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"254.md": {
	id: "254.md";
  slug: "254";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"255.md": {
	id: "255.md";
  slug: "255";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"256.md": {
	id: "256.md";
  slug: "256";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"257.md": {
	id: "257.md";
  slug: "257";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"258.md": {
	id: "258.md";
  slug: "258";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"259.md": {
	id: "259.md";
  slug: "259";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"26.md": {
	id: "26.md";
  slug: "26";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"260.md": {
	id: "260.md";
  slug: "260";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"261.md": {
	id: "261.md";
  slug: "261";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"262.md": {
	id: "262.md";
  slug: "262";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"263.md": {
	id: "263.md";
  slug: "263";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"264.md": {
	id: "264.md";
  slug: "264";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"265.md": {
	id: "265.md";
  slug: "265";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"266.md": {
	id: "266.md";
  slug: "266";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"267.md": {
	id: "267.md";
  slug: "267";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"268.md": {
	id: "268.md";
  slug: "268";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"269.md": {
	id: "269.md";
  slug: "269";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"27.md": {
	id: "27.md";
  slug: "27";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"270.md": {
	id: "270.md";
  slug: "270";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"271.md": {
	id: "271.md";
  slug: "271";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"272.md": {
	id: "272.md";
  slug: "272";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"273.md": {
	id: "273.md";
  slug: "273";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"274.md": {
	id: "274.md";
  slug: "274";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"275.md": {
	id: "275.md";
  slug: "275";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"276.md": {
	id: "276.md";
  slug: "276";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"277.md": {
	id: "277.md";
  slug: "277";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"278.md": {
	id: "278.md";
  slug: "278";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"279.md": {
	id: "279.md";
  slug: "279";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"28.md": {
	id: "28.md";
  slug: "28";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"280.md": {
	id: "280.md";
  slug: "280";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"281.md": {
	id: "281.md";
  slug: "281";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"282.md": {
	id: "282.md";
  slug: "282";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"283.md": {
	id: "283.md";
  slug: "283";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"284.md": {
	id: "284.md";
  slug: "284";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"285.md": {
	id: "285.md";
  slug: "285";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"286.md": {
	id: "286.md";
  slug: "286";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"287.md": {
	id: "287.md";
  slug: "287";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"288.md": {
	id: "288.md";
  slug: "288";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"289.md": {
	id: "289.md";
  slug: "289";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"29.md": {
	id: "29.md";
  slug: "29";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"290.md": {
	id: "290.md";
  slug: "290";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"291.md": {
	id: "291.md";
  slug: "291";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"292.md": {
	id: "292.md";
  slug: "292";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"293.md": {
	id: "293.md";
  slug: "293";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"294.md": {
	id: "294.md";
  slug: "294";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"295.md": {
	id: "295.md";
  slug: "295";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"296.md": {
	id: "296.md";
  slug: "296";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"297.md": {
	id: "297.md";
  slug: "297";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"298.md": {
	id: "298.md";
  slug: "298";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"299.md": {
	id: "299.md";
  slug: "299";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"3.md": {
	id: "3.md";
  slug: "3";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"30.md": {
	id: "30.md";
  slug: "30";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"300.md": {
	id: "300.md";
  slug: "300";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"301.md": {
	id: "301.md";
  slug: "301";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"302.md": {
	id: "302.md";
  slug: "302";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"303.md": {
	id: "303.md";
  slug: "303";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"304.md": {
	id: "304.md";
  slug: "304";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"305.md": {
	id: "305.md";
  slug: "305";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"306.md": {
	id: "306.md";
  slug: "306";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"307.md": {
	id: "307.md";
  slug: "307";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"308.md": {
	id: "308.md";
  slug: "308";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"309.md": {
	id: "309.md";
  slug: "309";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"31.md": {
	id: "31.md";
  slug: "31";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"310.md": {
	id: "310.md";
  slug: "310";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"311.md": {
	id: "311.md";
  slug: "311";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"312.md": {
	id: "312.md";
  slug: "312";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"313.md": {
	id: "313.md";
  slug: "313";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"314.md": {
	id: "314.md";
  slug: "314";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"315.md": {
	id: "315.md";
  slug: "315";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"316.md": {
	id: "316.md";
  slug: "316";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"317.md": {
	id: "317.md";
  slug: "317";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"318.md": {
	id: "318.md";
  slug: "318";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"319.md": {
	id: "319.md";
  slug: "319";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"32.md": {
	id: "32.md";
  slug: "32";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"320.md": {
	id: "320.md";
  slug: "320";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"321.md": {
	id: "321.md";
  slug: "321";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"322.md": {
	id: "322.md";
  slug: "322";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"323.md": {
	id: "323.md";
  slug: "323";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"324.md": {
	id: "324.md";
  slug: "324";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"325.md": {
	id: "325.md";
  slug: "325";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"326.md": {
	id: "326.md";
  slug: "326";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"327.md": {
	id: "327.md";
  slug: "327";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"328.md": {
	id: "328.md";
  slug: "328";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"329.md": {
	id: "329.md";
  slug: "329";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"33.md": {
	id: "33.md";
  slug: "33";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"330.md": {
	id: "330.md";
  slug: "330";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"331.md": {
	id: "331.md";
  slug: "331";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"332.md": {
	id: "332.md";
  slug: "332";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"333.md": {
	id: "333.md";
  slug: "333";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"334.md": {
	id: "334.md";
  slug: "334";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"335.md": {
	id: "335.md";
  slug: "335";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"336.md": {
	id: "336.md";
  slug: "336";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"337.md": {
	id: "337.md";
  slug: "337";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"338.md": {
	id: "338.md";
  slug: "338";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"339.md": {
	id: "339.md";
  slug: "339";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"34.md": {
	id: "34.md";
  slug: "34";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"340.md": {
	id: "340.md";
  slug: "340";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"341.md": {
	id: "341.md";
  slug: "341";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"342.md": {
	id: "342.md";
  slug: "342";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"343.md": {
	id: "343.md";
  slug: "343";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"344.md": {
	id: "344.md";
  slug: "344";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"345.md": {
	id: "345.md";
  slug: "345";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"346.md": {
	id: "346.md";
  slug: "346";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"347.md": {
	id: "347.md";
  slug: "347";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"348.md": {
	id: "348.md";
  slug: "348";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"349.md": {
	id: "349.md";
  slug: "349";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"35.md": {
	id: "35.md";
  slug: "35";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"350.md": {
	id: "350.md";
  slug: "350";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"351.md": {
	id: "351.md";
  slug: "351";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"352.md": {
	id: "352.md";
  slug: "352";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"353.md": {
	id: "353.md";
  slug: "353";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"354.md": {
	id: "354.md";
  slug: "354";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"355.md": {
	id: "355.md";
  slug: "355";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"356.md": {
	id: "356.md";
  slug: "356";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"357.md": {
	id: "357.md";
  slug: "357";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"358.md": {
	id: "358.md";
  slug: "358";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"359.md": {
	id: "359.md";
  slug: "359";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"36.md": {
	id: "36.md";
  slug: "36";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"360.md": {
	id: "360.md";
  slug: "360";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"361.md": {
	id: "361.md";
  slug: "361";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"362.md": {
	id: "362.md";
  slug: "362";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"363.md": {
	id: "363.md";
  slug: "363";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"364.md": {
	id: "364.md";
  slug: "364";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"365.md": {
	id: "365.md";
  slug: "365";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"366.md": {
	id: "366.md";
  slug: "366";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"367.md": {
	id: "367.md";
  slug: "367";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"368.md": {
	id: "368.md";
  slug: "368";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"369.md": {
	id: "369.md";
  slug: "369";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"37.md": {
	id: "37.md";
  slug: "37";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"370.md": {
	id: "370.md";
  slug: "370";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"371.md": {
	id: "371.md";
  slug: "371";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"372.md": {
	id: "372.md";
  slug: "372";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"373.md": {
	id: "373.md";
  slug: "373";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"374.md": {
	id: "374.md";
  slug: "374";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"375.md": {
	id: "375.md";
  slug: "375";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"376.md": {
	id: "376.md";
  slug: "376";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"377.md": {
	id: "377.md";
  slug: "377";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"378.md": {
	id: "378.md";
  slug: "378";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"379.md": {
	id: "379.md";
  slug: "379";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"38.md": {
	id: "38.md";
  slug: "38";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"380.md": {
	id: "380.md";
  slug: "380";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"381.md": {
	id: "381.md";
  slug: "381";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"382.md": {
	id: "382.md";
  slug: "382";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"383.md": {
	id: "383.md";
  slug: "383";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"384.md": {
	id: "384.md";
  slug: "384";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"385.md": {
	id: "385.md";
  slug: "385";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"386.md": {
	id: "386.md";
  slug: "386";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"387.md": {
	id: "387.md";
  slug: "387";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"388.md": {
	id: "388.md";
  slug: "388";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"389.md": {
	id: "389.md";
  slug: "389";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"39.md": {
	id: "39.md";
  slug: "39";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"390.md": {
	id: "390.md";
  slug: "390";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"391.md": {
	id: "391.md";
  slug: "391";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"392.md": {
	id: "392.md";
  slug: "392";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"393.md": {
	id: "393.md";
  slug: "393";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"394.md": {
	id: "394.md";
  slug: "394";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"395.md": {
	id: "395.md";
  slug: "395";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"396.md": {
	id: "396.md";
  slug: "396";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"397.md": {
	id: "397.md";
  slug: "397";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"398.md": {
	id: "398.md";
  slug: "398";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"399.md": {
	id: "399.md";
  slug: "399";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"4.md": {
	id: "4.md";
  slug: "4";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"40.md": {
	id: "40.md";
  slug: "40";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"400.md": {
	id: "400.md";
  slug: "400";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"401.md": {
	id: "401.md";
  slug: "401";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"402.md": {
	id: "402.md";
  slug: "402";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"403.md": {
	id: "403.md";
  slug: "403";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"404.md": {
	id: "404.md";
  slug: "404";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"405.md": {
	id: "405.md";
  slug: "405";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"406.md": {
	id: "406.md";
  slug: "406";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"407.md": {
	id: "407.md";
  slug: "407";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"408.md": {
	id: "408.md";
  slug: "408";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"409.md": {
	id: "409.md";
  slug: "409";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"41.md": {
	id: "41.md";
  slug: "41";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"410.md": {
	id: "410.md";
  slug: "410";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"411.md": {
	id: "411.md";
  slug: "411";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"412.md": {
	id: "412.md";
  slug: "412";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"413.md": {
	id: "413.md";
  slug: "413";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"414.md": {
	id: "414.md";
  slug: "414";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"415.md": {
	id: "415.md";
  slug: "415";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"416.md": {
	id: "416.md";
  slug: "416";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"417.md": {
	id: "417.md";
  slug: "417";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"418.md": {
	id: "418.md";
  slug: "418";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"419.md": {
	id: "419.md";
  slug: "419";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"42.md": {
	id: "42.md";
  slug: "42";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"420.md": {
	id: "420.md";
  slug: "420";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"421.md": {
	id: "421.md";
  slug: "421";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"422.md": {
	id: "422.md";
  slug: "422";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"423.md": {
	id: "423.md";
  slug: "423";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"424.md": {
	id: "424.md";
  slug: "424";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"425.md": {
	id: "425.md";
  slug: "425";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"426.md": {
	id: "426.md";
  slug: "426";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"427.md": {
	id: "427.md";
  slug: "427";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"428.md": {
	id: "428.md";
  slug: "428";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"429.md": {
	id: "429.md";
  slug: "429";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"43.md": {
	id: "43.md";
  slug: "43";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"430.md": {
	id: "430.md";
  slug: "430";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"431.md": {
	id: "431.md";
  slug: "431";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"432.md": {
	id: "432.md";
  slug: "432";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"433.md": {
	id: "433.md";
  slug: "433";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"434.md": {
	id: "434.md";
  slug: "434";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"435.md": {
	id: "435.md";
  slug: "435";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"436.md": {
	id: "436.md";
  slug: "436";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"437.md": {
	id: "437.md";
  slug: "437";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"438.md": {
	id: "438.md";
  slug: "438";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"439.md": {
	id: "439.md";
  slug: "439";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"44.md": {
	id: "44.md";
  slug: "44";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"440.md": {
	id: "440.md";
  slug: "440";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"441.md": {
	id: "441.md";
  slug: "441";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"442.md": {
	id: "442.md";
  slug: "442";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"443.md": {
	id: "443.md";
  slug: "443";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"444.md": {
	id: "444.md";
  slug: "444";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"445.md": {
	id: "445.md";
  slug: "445";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"446.md": {
	id: "446.md";
  slug: "446";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"447.md": {
	id: "447.md";
  slug: "447";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"448.md": {
	id: "448.md";
  slug: "448";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"449.md": {
	id: "449.md";
  slug: "449";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"45.md": {
	id: "45.md";
  slug: "45";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"450.md": {
	id: "450.md";
  slug: "450";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"451.md": {
	id: "451.md";
  slug: "451";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"452.md": {
	id: "452.md";
  slug: "452";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"453.md": {
	id: "453.md";
  slug: "453";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"454.md": {
	id: "454.md";
  slug: "454";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"455.md": {
	id: "455.md";
  slug: "455";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"456.md": {
	id: "456.md";
  slug: "456";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"457.md": {
	id: "457.md";
  slug: "457";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"458.md": {
	id: "458.md";
  slug: "458";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"459.md": {
	id: "459.md";
  slug: "459";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"46.md": {
	id: "46.md";
  slug: "46";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"460.md": {
	id: "460.md";
  slug: "460";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"461.md": {
	id: "461.md";
  slug: "461";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"462.md": {
	id: "462.md";
  slug: "462";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"463.md": {
	id: "463.md";
  slug: "463";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"464.md": {
	id: "464.md";
  slug: "464";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"465.md": {
	id: "465.md";
  slug: "465";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"466.md": {
	id: "466.md";
  slug: "466";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"467.md": {
	id: "467.md";
  slug: "467";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"468.md": {
	id: "468.md";
  slug: "468";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"469.md": {
	id: "469.md";
  slug: "469";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"47.md": {
	id: "47.md";
  slug: "47";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"470.md": {
	id: "470.md";
  slug: "470";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"471.md": {
	id: "471.md";
  slug: "471";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"472.md": {
	id: "472.md";
  slug: "472";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"473.md": {
	id: "473.md";
  slug: "473";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"474.md": {
	id: "474.md";
  slug: "474";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"475.md": {
	id: "475.md";
  slug: "475";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"476.md": {
	id: "476.md";
  slug: "476";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"477.md": {
	id: "477.md";
  slug: "477";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"478.md": {
	id: "478.md";
  slug: "478";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"479.md": {
	id: "479.md";
  slug: "479";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"48.md": {
	id: "48.md";
  slug: "48";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"480.md": {
	id: "480.md";
  slug: "480";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"481.md": {
	id: "481.md";
  slug: "481";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"482.md": {
	id: "482.md";
  slug: "482";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"483.md": {
	id: "483.md";
  slug: "483";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"484.md": {
	id: "484.md";
  slug: "484";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"485.md": {
	id: "485.md";
  slug: "485";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"486.md": {
	id: "486.md";
  slug: "486";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"487.md": {
	id: "487.md";
  slug: "487";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"488.md": {
	id: "488.md";
  slug: "488";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"489.md": {
	id: "489.md";
  slug: "489";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"49.md": {
	id: "49.md";
  slug: "49";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"490.md": {
	id: "490.md";
  slug: "490";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"491.md": {
	id: "491.md";
  slug: "491";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"492.md": {
	id: "492.md";
  slug: "492";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"493.md": {
	id: "493.md";
  slug: "493";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"494.md": {
	id: "494.md";
  slug: "494";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"495.md": {
	id: "495.md";
  slug: "495";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"496.md": {
	id: "496.md";
  slug: "496";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"497.md": {
	id: "497.md";
  slug: "497";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"498.md": {
	id: "498.md";
  slug: "498";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"499.md": {
	id: "499.md";
  slug: "499";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"5.md": {
	id: "5.md";
  slug: "5";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"50.md": {
	id: "50.md";
  slug: "50";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"500.md": {
	id: "500.md";
  slug: "500";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"501.md": {
	id: "501.md";
  slug: "501";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"502.md": {
	id: "502.md";
  slug: "502";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"503.md": {
	id: "503.md";
  slug: "503";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"504.md": {
	id: "504.md";
  slug: "504";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"505.md": {
	id: "505.md";
  slug: "505";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"506.md": {
	id: "506.md";
  slug: "506";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"507.md": {
	id: "507.md";
  slug: "507";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"508.md": {
	id: "508.md";
  slug: "508";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"509.md": {
	id: "509.md";
  slug: "509";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"51.md": {
	id: "51.md";
  slug: "51";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"510.md": {
	id: "510.md";
  slug: "510";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"511.md": {
	id: "511.md";
  slug: "511";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"512.md": {
	id: "512.md";
  slug: "512";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"513.md": {
	id: "513.md";
  slug: "513";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"514.md": {
	id: "514.md";
  slug: "514";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"515.md": {
	id: "515.md";
  slug: "515";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"516.md": {
	id: "516.md";
  slug: "516";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"517.md": {
	id: "517.md";
  slug: "517";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"518.md": {
	id: "518.md";
  slug: "518";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"519.md": {
	id: "519.md";
  slug: "519";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"52.md": {
	id: "52.md";
  slug: "52";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"520.md": {
	id: "520.md";
  slug: "520";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"521.md": {
	id: "521.md";
  slug: "521";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"522.md": {
	id: "522.md";
  slug: "522";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"523.md": {
	id: "523.md";
  slug: "523";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"524.md": {
	id: "524.md";
  slug: "524";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"525.md": {
	id: "525.md";
  slug: "525";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"526.md": {
	id: "526.md";
  slug: "526";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"527.md": {
	id: "527.md";
  slug: "527";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"528.md": {
	id: "528.md";
  slug: "528";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"529.md": {
	id: "529.md";
  slug: "529";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"53.md": {
	id: "53.md";
  slug: "53";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"530.md": {
	id: "530.md";
  slug: "530";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"531.md": {
	id: "531.md";
  slug: "531";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"532.md": {
	id: "532.md";
  slug: "532";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"533.md": {
	id: "533.md";
  slug: "533";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"534.md": {
	id: "534.md";
  slug: "534";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"535.md": {
	id: "535.md";
  slug: "535";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"536.md": {
	id: "536.md";
  slug: "536";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"537.md": {
	id: "537.md";
  slug: "537";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"538.md": {
	id: "538.md";
  slug: "538";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"539.md": {
	id: "539.md";
  slug: "539";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"54.md": {
	id: "54.md";
  slug: "54";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"540.md": {
	id: "540.md";
  slug: "540";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"541.md": {
	id: "541.md";
  slug: "541";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"542.md": {
	id: "542.md";
  slug: "542";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"543.md": {
	id: "543.md";
  slug: "543";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"544.md": {
	id: "544.md";
  slug: "544";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"545.md": {
	id: "545.md";
  slug: "545";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"546.md": {
	id: "546.md";
  slug: "546";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"547.md": {
	id: "547.md";
  slug: "547";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"548.md": {
	id: "548.md";
  slug: "548";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"549.md": {
	id: "549.md";
  slug: "549";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"55.md": {
	id: "55.md";
  slug: "55";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"550.md": {
	id: "550.md";
  slug: "550";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"551.md": {
	id: "551.md";
  slug: "551";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"552.md": {
	id: "552.md";
  slug: "552";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"553.md": {
	id: "553.md";
  slug: "553";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"554.md": {
	id: "554.md";
  slug: "554";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"555.md": {
	id: "555.md";
  slug: "555";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"556.md": {
	id: "556.md";
  slug: "556";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"557.md": {
	id: "557.md";
  slug: "557";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"558.md": {
	id: "558.md";
  slug: "558";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"559.md": {
	id: "559.md";
  slug: "559";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"56.md": {
	id: "56.md";
  slug: "56";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"560.md": {
	id: "560.md";
  slug: "560";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"561.md": {
	id: "561.md";
  slug: "561";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"562.md": {
	id: "562.md";
  slug: "562";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"563.md": {
	id: "563.md";
  slug: "563";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"564.md": {
	id: "564.md";
  slug: "564";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"565.md": {
	id: "565.md";
  slug: "565";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"566.md": {
	id: "566.md";
  slug: "566";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"567.md": {
	id: "567.md";
  slug: "567";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"568.md": {
	id: "568.md";
  slug: "568";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"569.md": {
	id: "569.md";
  slug: "569";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"57.md": {
	id: "57.md";
  slug: "57";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"570.md": {
	id: "570.md";
  slug: "570";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"571.md": {
	id: "571.md";
  slug: "571";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"572.md": {
	id: "572.md";
  slug: "572";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"573.md": {
	id: "573.md";
  slug: "573";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"574.md": {
	id: "574.md";
  slug: "574";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"575.md": {
	id: "575.md";
  slug: "575";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"576.md": {
	id: "576.md";
  slug: "576";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"577.md": {
	id: "577.md";
  slug: "577";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"578.md": {
	id: "578.md";
  slug: "578";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"579.md": {
	id: "579.md";
  slug: "579";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"58.md": {
	id: "58.md";
  slug: "58";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"580.md": {
	id: "580.md";
  slug: "580";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"581.md": {
	id: "581.md";
  slug: "581";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"582.md": {
	id: "582.md";
  slug: "582";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"583.md": {
	id: "583.md";
  slug: "583";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"584.md": {
	id: "584.md";
  slug: "584";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"585.md": {
	id: "585.md";
  slug: "585";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"586.md": {
	id: "586.md";
  slug: "586";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"587.md": {
	id: "587.md";
  slug: "587";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"588.md": {
	id: "588.md";
  slug: "588";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"589.md": {
	id: "589.md";
  slug: "589";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"59.md": {
	id: "59.md";
  slug: "59";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"590.md": {
	id: "590.md";
  slug: "590";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"591.md": {
	id: "591.md";
  slug: "591";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"592.md": {
	id: "592.md";
  slug: "592";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"593.md": {
	id: "593.md";
  slug: "593";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"594.md": {
	id: "594.md";
  slug: "594";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"595.md": {
	id: "595.md";
  slug: "595";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"596.md": {
	id: "596.md";
  slug: "596";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"597.md": {
	id: "597.md";
  slug: "597";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"598.md": {
	id: "598.md";
  slug: "598";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"599.md": {
	id: "599.md";
  slug: "599";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"6.md": {
	id: "6.md";
  slug: "6";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"60.md": {
	id: "60.md";
  slug: "60";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"600.md": {
	id: "600.md";
  slug: "600";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"601.md": {
	id: "601.md";
  slug: "601";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"602.md": {
	id: "602.md";
  slug: "602";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"603.md": {
	id: "603.md";
  slug: "603";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"604.md": {
	id: "604.md";
  slug: "604";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"605.md": {
	id: "605.md";
  slug: "605";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"606.md": {
	id: "606.md";
  slug: "606";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"607.md": {
	id: "607.md";
  slug: "607";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"608.md": {
	id: "608.md";
  slug: "608";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"609.md": {
	id: "609.md";
  slug: "609";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"61.md": {
	id: "61.md";
  slug: "61";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"610.md": {
	id: "610.md";
  slug: "610";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"611.md": {
	id: "611.md";
  slug: "611";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"612.md": {
	id: "612.md";
  slug: "612";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"613.md": {
	id: "613.md";
  slug: "613";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"614.md": {
	id: "614.md";
  slug: "614";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"615.md": {
	id: "615.md";
  slug: "615";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"616.md": {
	id: "616.md";
  slug: "616";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"617.md": {
	id: "617.md";
  slug: "617";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"618.md": {
	id: "618.md";
  slug: "618";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"619.md": {
	id: "619.md";
  slug: "619";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"62.md": {
	id: "62.md";
  slug: "62";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"620.md": {
	id: "620.md";
  slug: "620";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"621.md": {
	id: "621.md";
  slug: "621";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"622.md": {
	id: "622.md";
  slug: "622";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"623.md": {
	id: "623.md";
  slug: "623";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"624.md": {
	id: "624.md";
  slug: "624";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"625.md": {
	id: "625.md";
  slug: "625";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"626.md": {
	id: "626.md";
  slug: "626";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"627.md": {
	id: "627.md";
  slug: "627";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"628.md": {
	id: "628.md";
  slug: "628";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"629.md": {
	id: "629.md";
  slug: "629";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"63.md": {
	id: "63.md";
  slug: "63";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"630.md": {
	id: "630.md";
  slug: "630";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"631.md": {
	id: "631.md";
  slug: "631";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"632.md": {
	id: "632.md";
  slug: "632";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"633.md": {
	id: "633.md";
  slug: "633";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"634.md": {
	id: "634.md";
  slug: "634";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"635.md": {
	id: "635.md";
  slug: "635";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"636.md": {
	id: "636.md";
  slug: "636";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"637.md": {
	id: "637.md";
  slug: "637";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"638.md": {
	id: "638.md";
  slug: "638";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"639.md": {
	id: "639.md";
  slug: "639";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"64.md": {
	id: "64.md";
  slug: "64";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"640.md": {
	id: "640.md";
  slug: "640";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"641.md": {
	id: "641.md";
  slug: "641";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"642.md": {
	id: "642.md";
  slug: "642";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"643.md": {
	id: "643.md";
  slug: "643";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"644.md": {
	id: "644.md";
  slug: "644";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"645.md": {
	id: "645.md";
  slug: "645";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"646.md": {
	id: "646.md";
  slug: "646";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"647.md": {
	id: "647.md";
  slug: "647";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"648.md": {
	id: "648.md";
  slug: "648";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"649.md": {
	id: "649.md";
  slug: "649";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"65.md": {
	id: "65.md";
  slug: "65";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"650.md": {
	id: "650.md";
  slug: "650";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"651.md": {
	id: "651.md";
  slug: "651";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"652.md": {
	id: "652.md";
  slug: "652";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"653.md": {
	id: "653.md";
  slug: "653";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"654.md": {
	id: "654.md";
  slug: "654";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"655.md": {
	id: "655.md";
  slug: "655";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"656.md": {
	id: "656.md";
  slug: "656";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"657.md": {
	id: "657.md";
  slug: "657";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"658.md": {
	id: "658.md";
  slug: "658";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"659.md": {
	id: "659.md";
  slug: "659";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"66.md": {
	id: "66.md";
  slug: "66";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"660.md": {
	id: "660.md";
  slug: "660";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"661.md": {
	id: "661.md";
  slug: "661";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"662.md": {
	id: "662.md";
  slug: "662";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"663.md": {
	id: "663.md";
  slug: "663";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"664.md": {
	id: "664.md";
  slug: "664";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"665.md": {
	id: "665.md";
  slug: "665";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"666.md": {
	id: "666.md";
  slug: "666";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"667.md": {
	id: "667.md";
  slug: "667";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"668.md": {
	id: "668.md";
  slug: "668";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"669.md": {
	id: "669.md";
  slug: "669";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"67.md": {
	id: "67.md";
  slug: "67";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"670.md": {
	id: "670.md";
  slug: "670";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"671.md": {
	id: "671.md";
  slug: "671";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"672.md": {
	id: "672.md";
  slug: "672";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"673.md": {
	id: "673.md";
  slug: "673";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"674.md": {
	id: "674.md";
  slug: "674";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"675.md": {
	id: "675.md";
  slug: "675";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"676.md": {
	id: "676.md";
  slug: "676";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"677.md": {
	id: "677.md";
  slug: "677";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"678.md": {
	id: "678.md";
  slug: "678";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"679.md": {
	id: "679.md";
  slug: "679";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"68.md": {
	id: "68.md";
  slug: "68";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"680.md": {
	id: "680.md";
  slug: "680";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"681.md": {
	id: "681.md";
  slug: "681";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"682.md": {
	id: "682.md";
  slug: "682";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"683.md": {
	id: "683.md";
  slug: "683";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"684.md": {
	id: "684.md";
  slug: "684";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"685.md": {
	id: "685.md";
  slug: "685";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"686.md": {
	id: "686.md";
  slug: "686";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"687.md": {
	id: "687.md";
  slug: "687";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"688.md": {
	id: "688.md";
  slug: "688";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"689.md": {
	id: "689.md";
  slug: "689";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"69.md": {
	id: "69.md";
  slug: "69";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"690.md": {
	id: "690.md";
  slug: "690";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"691.md": {
	id: "691.md";
  slug: "691";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"692.md": {
	id: "692.md";
  slug: "692";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"693.md": {
	id: "693.md";
  slug: "693";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"694.md": {
	id: "694.md";
  slug: "694";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"695.md": {
	id: "695.md";
  slug: "695";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"696.md": {
	id: "696.md";
  slug: "696";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"697.md": {
	id: "697.md";
  slug: "697";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"698.md": {
	id: "698.md";
  slug: "698";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"699.md": {
	id: "699.md";
  slug: "699";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"7.md": {
	id: "7.md";
  slug: "7";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"70.md": {
	id: "70.md";
  slug: "70";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"700.md": {
	id: "700.md";
  slug: "700";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"701.md": {
	id: "701.md";
  slug: "701";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"702.md": {
	id: "702.md";
  slug: "702";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"703.md": {
	id: "703.md";
  slug: "703";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"704.md": {
	id: "704.md";
  slug: "704";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"705.md": {
	id: "705.md";
  slug: "705";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"706.md": {
	id: "706.md";
  slug: "706";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"707.md": {
	id: "707.md";
  slug: "707";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"708.md": {
	id: "708.md";
  slug: "708";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"709.md": {
	id: "709.md";
  slug: "709";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"71.md": {
	id: "71.md";
  slug: "71";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"710.md": {
	id: "710.md";
  slug: "710";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"711.md": {
	id: "711.md";
  slug: "711";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"712.md": {
	id: "712.md";
  slug: "712";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"713.md": {
	id: "713.md";
  slug: "713";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"714.md": {
	id: "714.md";
  slug: "714";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"715.md": {
	id: "715.md";
  slug: "715";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"716.md": {
	id: "716.md";
  slug: "716";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"717.md": {
	id: "717.md";
  slug: "717";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"718.md": {
	id: "718.md";
  slug: "718";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"719.md": {
	id: "719.md";
  slug: "719";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"72.md": {
	id: "72.md";
  slug: "72";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"720.md": {
	id: "720.md";
  slug: "720";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"721.md": {
	id: "721.md";
  slug: "721";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"722.md": {
	id: "722.md";
  slug: "722";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"723.md": {
	id: "723.md";
  slug: "723";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"724.md": {
	id: "724.md";
  slug: "724";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"725.md": {
	id: "725.md";
  slug: "725";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"726.md": {
	id: "726.md";
  slug: "726";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"727.md": {
	id: "727.md";
  slug: "727";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"728.md": {
	id: "728.md";
  slug: "728";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"729.md": {
	id: "729.md";
  slug: "729";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"73.md": {
	id: "73.md";
  slug: "73";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"730.md": {
	id: "730.md";
  slug: "730";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"731.md": {
	id: "731.md";
  slug: "731";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"732.md": {
	id: "732.md";
  slug: "732";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"733.md": {
	id: "733.md";
  slug: "733";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"734.md": {
	id: "734.md";
  slug: "734";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"735.md": {
	id: "735.md";
  slug: "735";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"736.md": {
	id: "736.md";
  slug: "736";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"737.md": {
	id: "737.md";
  slug: "737";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"738.md": {
	id: "738.md";
  slug: "738";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"739.md": {
	id: "739.md";
  slug: "739";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"74.md": {
	id: "74.md";
  slug: "74";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"740.md": {
	id: "740.md";
  slug: "740";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"741.md": {
	id: "741.md";
  slug: "741";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"742.md": {
	id: "742.md";
  slug: "742";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"743.md": {
	id: "743.md";
  slug: "743";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"744.md": {
	id: "744.md";
  slug: "744";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"745.md": {
	id: "745.md";
  slug: "745";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"746.md": {
	id: "746.md";
  slug: "746";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"747.md": {
	id: "747.md";
  slug: "747";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"748.md": {
	id: "748.md";
  slug: "748";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"749.md": {
	id: "749.md";
  slug: "749";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"75.md": {
	id: "75.md";
  slug: "75";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"750.md": {
	id: "750.md";
  slug: "750";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"751.md": {
	id: "751.md";
  slug: "751";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"752.md": {
	id: "752.md";
  slug: "752";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"753.md": {
	id: "753.md";
  slug: "753";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"754.md": {
	id: "754.md";
  slug: "754";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"755.md": {
	id: "755.md";
  slug: "755";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"756.md": {
	id: "756.md";
  slug: "756";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"757.md": {
	id: "757.md";
  slug: "757";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"758.md": {
	id: "758.md";
  slug: "758";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"759.md": {
	id: "759.md";
  slug: "759";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"76.md": {
	id: "76.md";
  slug: "76";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"760.md": {
	id: "760.md";
  slug: "760";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"761.md": {
	id: "761.md";
  slug: "761";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"762.md": {
	id: "762.md";
  slug: "762";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"763.md": {
	id: "763.md";
  slug: "763";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"764.md": {
	id: "764.md";
  slug: "764";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"765.md": {
	id: "765.md";
  slug: "765";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"766.md": {
	id: "766.md";
  slug: "766";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"767.md": {
	id: "767.md";
  slug: "767";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"768.md": {
	id: "768.md";
  slug: "768";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"769.md": {
	id: "769.md";
  slug: "769";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"77.md": {
	id: "77.md";
  slug: "77";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"770.md": {
	id: "770.md";
  slug: "770";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"771.md": {
	id: "771.md";
  slug: "771";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"772.md": {
	id: "772.md";
  slug: "772";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"773.md": {
	id: "773.md";
  slug: "773";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"774.md": {
	id: "774.md";
  slug: "774";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"775.md": {
	id: "775.md";
  slug: "775";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"776.md": {
	id: "776.md";
  slug: "776";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"777.md": {
	id: "777.md";
  slug: "777";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"778.md": {
	id: "778.md";
  slug: "778";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"779.md": {
	id: "779.md";
  slug: "779";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"78.md": {
	id: "78.md";
  slug: "78";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"780.md": {
	id: "780.md";
  slug: "780";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"781.md": {
	id: "781.md";
  slug: "781";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"782.md": {
	id: "782.md";
  slug: "782";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"783.md": {
	id: "783.md";
  slug: "783";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"784.md": {
	id: "784.md";
  slug: "784";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"785.md": {
	id: "785.md";
  slug: "785";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"786.md": {
	id: "786.md";
  slug: "786";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"787.md": {
	id: "787.md";
  slug: "787";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"788.md": {
	id: "788.md";
  slug: "788";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"789.md": {
	id: "789.md";
  slug: "789";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"79.md": {
	id: "79.md";
  slug: "79";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"790.md": {
	id: "790.md";
  slug: "790";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"791.md": {
	id: "791.md";
  slug: "791";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"792.md": {
	id: "792.md";
  slug: "792";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"793.md": {
	id: "793.md";
  slug: "793";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"794.md": {
	id: "794.md";
  slug: "794";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"795.md": {
	id: "795.md";
  slug: "795";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"796.md": {
	id: "796.md";
  slug: "796";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"797.md": {
	id: "797.md";
  slug: "797";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"798.md": {
	id: "798.md";
  slug: "798";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"799.md": {
	id: "799.md";
  slug: "799";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"8.md": {
	id: "8.md";
  slug: "8";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"80.md": {
	id: "80.md";
  slug: "80";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"800.md": {
	id: "800.md";
  slug: "800";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"801.md": {
	id: "801.md";
  slug: "801";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"802.md": {
	id: "802.md";
  slug: "802";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"803.md": {
	id: "803.md";
  slug: "803";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"804.md": {
	id: "804.md";
  slug: "804";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"805.md": {
	id: "805.md";
  slug: "805";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"806.md": {
	id: "806.md";
  slug: "806";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"807.md": {
	id: "807.md";
  slug: "807";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"808.md": {
	id: "808.md";
  slug: "808";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"809.md": {
	id: "809.md";
  slug: "809";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"81.md": {
	id: "81.md";
  slug: "81";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"810.md": {
	id: "810.md";
  slug: "810";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"811.md": {
	id: "811.md";
  slug: "811";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"812.md": {
	id: "812.md";
  slug: "812";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"813.md": {
	id: "813.md";
  slug: "813";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"814.md": {
	id: "814.md";
  slug: "814";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"815.md": {
	id: "815.md";
  slug: "815";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"816.md": {
	id: "816.md";
  slug: "816";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"817.md": {
	id: "817.md";
  slug: "817";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"818.md": {
	id: "818.md";
  slug: "818";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"819.md": {
	id: "819.md";
  slug: "819";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"82.md": {
	id: "82.md";
  slug: "82";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"820.md": {
	id: "820.md";
  slug: "820";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"821.md": {
	id: "821.md";
  slug: "821";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"822.md": {
	id: "822.md";
  slug: "822";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"823.md": {
	id: "823.md";
  slug: "823";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"824.md": {
	id: "824.md";
  slug: "824";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"825.md": {
	id: "825.md";
  slug: "825";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"826.md": {
	id: "826.md";
  slug: "826";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"827.md": {
	id: "827.md";
  slug: "827";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"828.md": {
	id: "828.md";
  slug: "828";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"829.md": {
	id: "829.md";
  slug: "829";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"83.md": {
	id: "83.md";
  slug: "83";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"830.md": {
	id: "830.md";
  slug: "830";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"831.md": {
	id: "831.md";
  slug: "831";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"832.md": {
	id: "832.md";
  slug: "832";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"833.md": {
	id: "833.md";
  slug: "833";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"834.md": {
	id: "834.md";
  slug: "834";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"835.md": {
	id: "835.md";
  slug: "835";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"836.md": {
	id: "836.md";
  slug: "836";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"837.md": {
	id: "837.md";
  slug: "837";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"838.md": {
	id: "838.md";
  slug: "838";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"839.md": {
	id: "839.md";
  slug: "839";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"84.md": {
	id: "84.md";
  slug: "84";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"840.md": {
	id: "840.md";
  slug: "840";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"841.md": {
	id: "841.md";
  slug: "841";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"842.md": {
	id: "842.md";
  slug: "842";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"843.md": {
	id: "843.md";
  slug: "843";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"844.md": {
	id: "844.md";
  slug: "844";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"845.md": {
	id: "845.md";
  slug: "845";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"846.md": {
	id: "846.md";
  slug: "846";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"847.md": {
	id: "847.md";
  slug: "847";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"848.md": {
	id: "848.md";
  slug: "848";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"849.md": {
	id: "849.md";
  slug: "849";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"85.md": {
	id: "85.md";
  slug: "85";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"850.md": {
	id: "850.md";
  slug: "850";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"851.md": {
	id: "851.md";
  slug: "851";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"852.md": {
	id: "852.md";
  slug: "852";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"853.md": {
	id: "853.md";
  slug: "853";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"854.md": {
	id: "854.md";
  slug: "854";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"855.md": {
	id: "855.md";
  slug: "855";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"856.md": {
	id: "856.md";
  slug: "856";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"857.md": {
	id: "857.md";
  slug: "857";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"858.md": {
	id: "858.md";
  slug: "858";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"859.md": {
	id: "859.md";
  slug: "859";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"86.md": {
	id: "86.md";
  slug: "86";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"860.md": {
	id: "860.md";
  slug: "860";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"861.md": {
	id: "861.md";
  slug: "861";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"862.md": {
	id: "862.md";
  slug: "862";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"863.md": {
	id: "863.md";
  slug: "863";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"864.md": {
	id: "864.md";
  slug: "864";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"865.md": {
	id: "865.md";
  slug: "865";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"866.md": {
	id: "866.md";
  slug: "866";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"867.md": {
	id: "867.md";
  slug: "867";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"868.md": {
	id: "868.md";
  slug: "868";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"869.md": {
	id: "869.md";
  slug: "869";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"87.md": {
	id: "87.md";
  slug: "87";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"870.md": {
	id: "870.md";
  slug: "870";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"871.md": {
	id: "871.md";
  slug: "871";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"872.md": {
	id: "872.md";
  slug: "872";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"873.md": {
	id: "873.md";
  slug: "873";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"874.md": {
	id: "874.md";
  slug: "874";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"875.md": {
	id: "875.md";
  slug: "875";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"876.md": {
	id: "876.md";
  slug: "876";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"877.md": {
	id: "877.md";
  slug: "877";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"878.md": {
	id: "878.md";
  slug: "878";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"879.md": {
	id: "879.md";
  slug: "879";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"88.md": {
	id: "88.md";
  slug: "88";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"880.md": {
	id: "880.md";
  slug: "880";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"881.md": {
	id: "881.md";
  slug: "881";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"882.md": {
	id: "882.md";
  slug: "882";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"883.md": {
	id: "883.md";
  slug: "883";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"884.md": {
	id: "884.md";
  slug: "884";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"885.md": {
	id: "885.md";
  slug: "885";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"886.md": {
	id: "886.md";
  slug: "886";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"887.md": {
	id: "887.md";
  slug: "887";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"888.md": {
	id: "888.md";
  slug: "888";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"889.md": {
	id: "889.md";
  slug: "889";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"89.md": {
	id: "89.md";
  slug: "89";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"890.md": {
	id: "890.md";
  slug: "890";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"891.md": {
	id: "891.md";
  slug: "891";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"892.md": {
	id: "892.md";
  slug: "892";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"893.md": {
	id: "893.md";
  slug: "893";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"894.md": {
	id: "894.md";
  slug: "894";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"895.md": {
	id: "895.md";
  slug: "895";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"896.md": {
	id: "896.md";
  slug: "896";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"897.md": {
	id: "897.md";
  slug: "897";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"898.md": {
	id: "898.md";
  slug: "898";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"899.md": {
	id: "899.md";
  slug: "899";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"9.md": {
	id: "9.md";
  slug: "9";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"90.md": {
	id: "90.md";
  slug: "90";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"900.md": {
	id: "900.md";
  slug: "900";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"901.md": {
	id: "901.md";
  slug: "901";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"902.md": {
	id: "902.md";
  slug: "902";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"903.md": {
	id: "903.md";
  slug: "903";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"904.md": {
	id: "904.md";
  slug: "904";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"905.md": {
	id: "905.md";
  slug: "905";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"906.md": {
	id: "906.md";
  slug: "906";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"907.md": {
	id: "907.md";
  slug: "907";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"908.md": {
	id: "908.md";
  slug: "908";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"909.md": {
	id: "909.md";
  slug: "909";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"91.md": {
	id: "91.md";
  slug: "91";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"910.md": {
	id: "910.md";
  slug: "910";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"911.md": {
	id: "911.md";
  slug: "911";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"912.md": {
	id: "912.md";
  slug: "912";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"913.md": {
	id: "913.md";
  slug: "913";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"914.md": {
	id: "914.md";
  slug: "914";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"915.md": {
	id: "915.md";
  slug: "915";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"916.md": {
	id: "916.md";
  slug: "916";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"917.md": {
	id: "917.md";
  slug: "917";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"918.md": {
	id: "918.md";
  slug: "918";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"919.md": {
	id: "919.md";
  slug: "919";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"92.md": {
	id: "92.md";
  slug: "92";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"920.md": {
	id: "920.md";
  slug: "920";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"921.md": {
	id: "921.md";
  slug: "921";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"922.md": {
	id: "922.md";
  slug: "922";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"923.md": {
	id: "923.md";
  slug: "923";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"924.md": {
	id: "924.md";
  slug: "924";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"925.md": {
	id: "925.md";
  slug: "925";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"926.md": {
	id: "926.md";
  slug: "926";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"927.md": {
	id: "927.md";
  slug: "927";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"928.md": {
	id: "928.md";
  slug: "928";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"929.md": {
	id: "929.md";
  slug: "929";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"93.md": {
	id: "93.md";
  slug: "93";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"930.md": {
	id: "930.md";
  slug: "930";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"931.md": {
	id: "931.md";
  slug: "931";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"932.md": {
	id: "932.md";
  slug: "932";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"933.md": {
	id: "933.md";
  slug: "933";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"934.md": {
	id: "934.md";
  slug: "934";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"935.md": {
	id: "935.md";
  slug: "935";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"936.md": {
	id: "936.md";
  slug: "936";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"937.md": {
	id: "937.md";
  slug: "937";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"938.md": {
	id: "938.md";
  slug: "938";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"939.md": {
	id: "939.md";
  slug: "939";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"94.md": {
	id: "94.md";
  slug: "94";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"940.md": {
	id: "940.md";
  slug: "940";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"941.md": {
	id: "941.md";
  slug: "941";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"942.md": {
	id: "942.md";
  slug: "942";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"943.md": {
	id: "943.md";
  slug: "943";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"944.md": {
	id: "944.md";
  slug: "944";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"945.md": {
	id: "945.md";
  slug: "945";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"946.md": {
	id: "946.md";
  slug: "946";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"947.md": {
	id: "947.md";
  slug: "947";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"948.md": {
	id: "948.md";
  slug: "948";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"949.md": {
	id: "949.md";
  slug: "949";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"95.md": {
	id: "95.md";
  slug: "95";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"950.md": {
	id: "950.md";
  slug: "950";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"951.md": {
	id: "951.md";
  slug: "951";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"952.md": {
	id: "952.md";
  slug: "952";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"953.md": {
	id: "953.md";
  slug: "953";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"954.md": {
	id: "954.md";
  slug: "954";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"955.md": {
	id: "955.md";
  slug: "955";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"956.md": {
	id: "956.md";
  slug: "956";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"957.md": {
	id: "957.md";
  slug: "957";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"958.md": {
	id: "958.md";
  slug: "958";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"959.md": {
	id: "959.md";
  slug: "959";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"96.md": {
	id: "96.md";
  slug: "96";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"960.md": {
	id: "960.md";
  slug: "960";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"961.md": {
	id: "961.md";
  slug: "961";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"962.md": {
	id: "962.md";
  slug: "962";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"963.md": {
	id: "963.md";
  slug: "963";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"964.md": {
	id: "964.md";
  slug: "964";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"965.md": {
	id: "965.md";
  slug: "965";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"966.md": {
	id: "966.md";
  slug: "966";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"967.md": {
	id: "967.md";
  slug: "967";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"968.md": {
	id: "968.md";
  slug: "968";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"969.md": {
	id: "969.md";
  slug: "969";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"97.md": {
	id: "97.md";
  slug: "97";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"970.md": {
	id: "970.md";
  slug: "970";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"971.md": {
	id: "971.md";
  slug: "971";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"972.md": {
	id: "972.md";
  slug: "972";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"973.md": {
	id: "973.md";
  slug: "973";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"974.md": {
	id: "974.md";
  slug: "974";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"975.md": {
	id: "975.md";
  slug: "975";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"976.md": {
	id: "976.md";
  slug: "976";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"977.md": {
	id: "977.md";
  slug: "977";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"978.md": {
	id: "978.md";
  slug: "978";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"979.md": {
	id: "979.md";
  slug: "979";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"98.md": {
	id: "98.md";
  slug: "98";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"980.md": {
	id: "980.md";
  slug: "980";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"981.md": {
	id: "981.md";
  slug: "981";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"982.md": {
	id: "982.md";
  slug: "982";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"983.md": {
	id: "983.md";
  slug: "983";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"984.md": {
	id: "984.md";
  slug: "984";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"985.md": {
	id: "985.md";
  slug: "985";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"986.md": {
	id: "986.md";
  slug: "986";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"987.md": {
	id: "987.md";
  slug: "987";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"988.md": {
	id: "988.md";
  slug: "988";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"989.md": {
	id: "989.md";
  slug: "989";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"99.md": {
	id: "99.md";
  slug: "99";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"990.md": {
	id: "990.md";
  slug: "990";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"991.md": {
	id: "991.md";
  slug: "991";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"992.md": {
	id: "992.md";
  slug: "992";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"993.md": {
	id: "993.md";
  slug: "993";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"994.md": {
	id: "994.md";
  slug: "994";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"995.md": {
	id: "995.md";
  slug: "995";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"996.md": {
	id: "996.md";
  slug: "996";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"997.md": {
	id: "997.md";
  slug: "997";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"998.md": {
	id: "998.md";
  slug: "998";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
"999.md": {
	id: "999.md";
  slug: "999";
  body: string;
  collection: "template2";
  data: InferEntrySchema<"template2">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
