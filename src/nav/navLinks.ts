export type Group = "projects" | "labs" | "scenes" | "nursery";
export type Lane = "workshop" | "doneish" | "library" | "archive";

export type NavItem = {
	id: string;
	group: Group;
	slug: string;
	title: string;
	order?: number;

	// Nursery only
	lane?: Lane;

	// Optional tiny descriptor for search later
	use?: string;
};

export function groupRoute(group: Group) {
	return `/${group}`;
}

export function laneRoute(lane: Lane) {
	return `/nursery/${lane}`;
}

export const GROUPS: { key: Group; label: string }[] = [
	{ key: "projects", label: "Projects" },
	{ key: "labs", label: "Labs" },
	{ key: "scenes", label: "Scenes" },
	{ key: "nursery", label: "Nursery" },
];

export const LANES: { key: Lane; label: string }[] = [
	{ key: "workshop", label: "Workshop" },
	{ key: "doneish", label: "Done-ish" },
	{ key: "library", label: "Library" },
	{ key: "archive", label: "Archive" },
];

export const NAV_ITEMS: NavItem[] = [
	// Projects
	{ id: "iow", group: "projects", slug: "iow", title: "...iow", order: 10 },
	{ id: "weather", group: "projects", slug: "weather", title: "Weather", order: 10 },
	{ id: "clock", group: "projects", slug: "clock", title: "Clock", order: 10 },
	{ id: "mood", group: "projects", slug: "mood", title: "Mood", order: 10 },
	{ id: "spacetours", group: "projects", slug: "spacetours", title: "Space Tours", order: 10 },
	{ id: "pillars", group: "projects", slug: "pillars", title: "Pillars", order: 10 },
	{ id: "bank", group: "projects", slug: "bank", title: "Bank", order: 10 },
	{ id: "maria", group: "projects", slug: "maria", title: "Maria", order: 10 },


	// Scenes
	{ id: "porch", group: "scenes", slug: "porch", title: "Porch", order: 10 },
	{ id: "rain_gate", group: "scenes", slug: "rain_gate", title: "Rain Gate", order: 10 },
	{ id: "spicemarket", group: "scenes", slug: "spiceMarket", title: "Spice Market", order: 10 },
	{ id: "flowermarket", group: "scenes", slug: "flowerMarket", title: "Flower Market", order: 10 },
	{ id: "morning", group: "scenes", slug: "morning", title: "Paint the Sky", order: 10 },


	// Labs
	{ id: "three", group: "labs", slug: "Three", title: "Three.js", order: 10 },
	{ id: "dolyette", group: "labs", slug: "dolyette", title: "Dolyette", order: 10 },
	{ id: "color", group: "labs", slug: "OKLCH", title: "OKLCH", order: 10 },
	{ id: "gridtest", group: "labs", slug: "gridtest", title: "Grid Test", order: 10 },


	// Nursery seed
	{ id: "seed-grad-01", group: "nursery", lane: "workshop", slug: "seed-grad-01", title: "Seed Gradient 01", order: 10 },
	{ id: "brandywine", group: "nursery", lane: "workshop", slug: "brandyWine", title: "Brandy & Wine", order: 10 },
	{ id: "green", group: "nursery", lane: "workshop", slug: "green", title: "GREEN", order: 10 },
	{ id: "orange", group: "nursery", lane: "workshop", slug: "orange", title: "ORANGE", order: 10 },
	{ id: "pistachio", group: "nursery", lane: "workshop", slug: "pistachio", title: "Pistachio", order: 10 },
	{ id: "plumgold", group: "nursery", lane: "workshop", slug: "plumGold", title: "Plum Gold", order: 10 },
	{ id: "rose", group: "nursery", lane: "workshop", slug: "rose", title: "ROSE", order: 10 },
	{ id: "sagecream", group: "nursery", lane: "workshop", slug: "sageCream", title: "Sage & Cream", order: 10 },
	{ id: "scoopTV", group: "nursery", lane: "workshop", slug: "scoopTV", title: "Scoop TV", order: 10 },
	{ id: "svaldbard", group: "nursery", lane: "workshop", slug: "svalbard", title: "Svalbard", order: 10 },
	{ id: "two", group: "nursery", lane: "workshop", slug: "two", title: "TWO", order: 10 },

];

export function routeFor(item: NavItem) {
	// Nursery gets lane in the URL
	if (item.group === "nursery") {
		const lane = item.lane ?? "workshop";
		return `/nursery/${lane}/${item.slug}`;
	}
	return `/${item.group}/${item.slug}`;
}

export function itemsForGroup(group: Group) {
	return NAV_ITEMS
		.filter(i => i.group === group)
		.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export function nurseryItemsForLane(lane: Lane) {
	return NAV_ITEMS
		.filter(i => i.group === "nursery" && i.lane === lane)
		.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}
