import { type VariantProps, tv } from "tailwind-variants";
export { default as Badge } from "./badge.svelte";

export const badgeVariants = tv({
	base: "focus:ring-ring inline-flex select-none items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
	variants: {
		variant: {
			default:
				"border-transparent bg-secondary text-secondary-foreground",
			secondary: "border border-border bg-transparent text-foreground/70",
			destructive: "border-transparent bg-destructive text-destructive-foreground",
			outline: "border border-border text-foreground/80",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export type Variant = VariantProps<typeof badgeVariants>["variant"];
