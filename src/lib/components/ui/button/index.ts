import { type VariantProps, tv } from "tailwind-variants";
import type { Button as ButtonPrimitive } from "bits-ui";
import Root from "./button.svelte";

const buttonVariants = tv({
	base: "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99]",
	variants: {
		variant: {
			default:
				"bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
			destructive:
				"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md",
			outline:
				"border border-border bg-transparent text-foreground hover:bg-foreground/5",
			secondary:
				"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md",
			ghost: "text-foreground/80 hover:bg-foreground/5",
			link: "text-primary underline-offset-4 hover:underline",
		},
		size: {
			default: "h-11 px-6",
			sm: "h-9 px-4",
			lg: "h-12 px-8",
			icon: "h-11 w-11",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

type Variant = VariantProps<typeof buttonVariants>["variant"];
type Size = VariantProps<typeof buttonVariants>["size"];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	Root,
	type Props,
	type Events,
	//
	Root as Button,
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants,
};
