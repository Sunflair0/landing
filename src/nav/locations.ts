import { NAV_ITEMS, type Group, type Lane, type NavItem } from "./navLinks";


export function getGroupFromPath(pathname: string): Group | null {
	const seg = pathname.split("/").filter(Boolean)[0];
	if (seg === "projects" || seg === "labs" || seg === "scenes" || seg === "nursery") return seg;
	return null;
}

export function getLaneFromPath(pathname: string): Lane | null {
	const parts = pathname.split("/").filter(Boolean);
	if (parts[0] !== "nursery") return null;
	const lane = parts[1];
	if (lane === "workshop" || lane === "doneish" || lane === "library" || lane === "archive") return lane;
	return null;
}

export function getItemFromPath(pathname: string): NavItem | null {
	const parts = pathname.split("/").filter(Boolean);

	// /nursery/:lane/:slug
	if (parts[0] === "nursery" && parts.length >= 3) {
		const lane = parts[1]  as Lane;
		const slug = parts[2];
		return NAV_ITEMS.find(i => i.group === "nursery" && i.lane === lane && i.slug === slug) ?? null;
	}

	// /group/:slug
	if (parts.length >= 2) {
		const [group, slug] = parts;
		return NAV_ITEMS.find(i => i.group === group && i.slug === slug) ?? null;
	}

	return null;
}
