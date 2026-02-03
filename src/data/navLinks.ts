export type NavGroup = "projects" | "labs" | "splashes" | "scenes";

export type NavLink = {
  href: string;
  label: string;
  NavGroup: string;
};

export const navLinks: NavLink[] = [
	{ href: "/two", label: "Two", NavGroup: "layout"},
	{ href: "/orange", label: "Orange", NavGroup: "layout" },
	{ href: "/rose", label: "Rose", NavGroup: "layout" },
	{ href: "/green", label: "Green", NavGroup: "layout" },
	{ href: "/svalbard", label: "Svalbard", NavGroup: "layout" },
	{ href: "/plum-gold", label: "Plum & Gold", NavGroup: "layout" },
	{ href: "/sage-cream", label: "Sage & Cream", NavGroup: "layout" },
];
