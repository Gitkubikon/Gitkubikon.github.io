import { type VariantProps, tv } from "tailwind-variants";
import Root from "./toggle.svelte";

export const toggleVariants = tv({
	base: "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99]",
	variants: {
		variant: {
			default:
				"border border-border bg-card text-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground hover:bg-card/90",
			outline:
				"border border-border bg-transparent text-foreground hover:bg-foreground/5 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
		},
		size: {
			default: "h-11 px-5",
			sm: "h-9 px-4",
			lg: "h-12 px-6",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

export type Variant = VariantProps<typeof toggleVariants>["variant"];
export type Size = VariantProps<typeof toggleVariants>["size"];

export {
	Root,
	//
	Root as Toggle,
};
