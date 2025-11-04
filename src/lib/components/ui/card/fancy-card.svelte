<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import type {
		HTMLAttributes,
		KeyboardEventHandler,
		MouseEventHandler
	} from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	import { changeColorOpacity, isHexColor } from '@riadh-adrani/utils';
	import { convertNamedToHexColor, NAMED_COLORS, type NamedColor } from '$lib/data/colors';

	const {
		color = NAMED_COLORS.gray,
		href,
		class: className,
		children,
		...rest
	}: HTMLAttributes<HTMLDivElement> & {
		color?: string;
		href?: string;
	} = $props();

	const computedColor = $derived(
		isHexColor(color) ? color : convertNamedToHexColor(color as NamedColor)
	);

	const accentSolid = $derived(changeColorOpacity(computedColor, 0.9));
	const accentSoft = $derived(changeColorOpacity(computedColor, 0.18));

	const onClick: MouseEventHandler<HTMLElement> = (event) => {
		if (!href) return;

		const target = event.target as HTMLElement | null;

	if (target?.closest('a,button')) {
		return;
	}

	if (!browser) return;

	if (
		event.defaultPrevented ||
		event.button !== 0 ||
		event.metaKey ||
		event.ctrlKey ||
		event.shiftKey ||
		event.altKey
	) {
		window.open(href, '_blank', 'noopener,noreferrer');
		return;
	}

	goto(href);
};

	const onKeydown: KeyboardEventHandler<HTMLElement> = (event) => {
		if (!href) return;
		if (event.key !== 'Enter' && event.key !== ' ') return;

		event.preventDefault();
		goto(href);
	};
</script>

<div
	style={`--fancy-accent:${accentSolid};--fancy-wash:${accentSoft};`}
	class={cn(
		'group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card text-card-foreground shadow-sm transition-all duration-200 hover:border-border hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
		className
	)}
	{...rest}
	onclick={onClick}
	onkeydown={onKeydown}
>
	<span
		class="pointer-events-none absolute inset-x-8 top-0 h-px opacity-60 transition-opacity duration-200 group-hover:opacity-100"
		style="background: linear-gradient(90deg, transparent, var(--fancy-accent), transparent);"
	></span>
	<span
		class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-30"
		style="background: radial-gradient(circle at 20% 20%, var(--fancy-wash), transparent 65%);"
	></span>
	<div class="relative flex flex-1 flex-col">
		{@render children?.()}
	</div>
</div>
