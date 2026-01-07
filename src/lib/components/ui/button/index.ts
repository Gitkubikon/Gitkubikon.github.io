import { type VariantProps, tv } from "tailwind-variants";
import type { Button as ButtonPrimitive } from "bits-ui";
import Root from "./button.svelte";

const buttonVariants = tv({
	base: "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
	variants: {
		variant: {
			default:
				"bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5",
			destructive:
				"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-lg hover:-translate-y-0.5",
			outline:
				"border-2 border-primary/20 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary/40",
			secondary:
				"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md hover:-translate-y-0.5",
			ghost: "text-foreground/80 hover:bg-foreground/10 hover:text-foreground",
			link: "text-primary underline-offset-4 hover:underline",
		},
		size: {
			default: "h-12 px-8",
			sm: "h-10 px-6",
			lg: "h-14 px-10 text-base",
			icon: "h-12 w-12",
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
