<script lang="ts">
	import { Toggle as TogglePrimitive } from "bits-ui";
	import { type Size, type Variant, toggleVariants } from "./index.js";
	import { cn } from "$lib/utils.js";
	import type { ClassValue } from "clsx";

	type $$Props = TogglePrimitive.Props & {
		variant?: Variant;
		size?: Size;
	};
	type $$Events = TogglePrimitive.Events;

	let className: ClassValue | undefined = undefined;
	export let variant: $$Props["variant"] = "default";
	export let size: $$Props["size"] = "default";
	export let pressed: $$Props["pressed"] = undefined;
	export { className as class };
</script>

<TogglePrimitive.Root
	bind:pressed
	class={cn(toggleVariants({ variant, size, className: cn(className) }))}
	{...$$restProps}
	on:click
>
	<slot />
</TogglePrimitive.Root>
