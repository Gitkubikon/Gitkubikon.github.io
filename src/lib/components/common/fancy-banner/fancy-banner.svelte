<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Asset } from '$lib/data/types';
	import AssetIcon from '$lib/components/ui/icon/icon-asset.svelte';

	const {
		asset,
		color,
		class: className,
		children
	}: {
		asset?: Asset;
		color?: string;
		class?: string;
		children?: Snippet;
	} = $props();

	const accent = $derived(color ?? asset?.color ?? 'var(--primary)');
</script>

<div
	style={`--accent:${accent};`}
	class={`relative isolate min-h-[200px] w-full overflow-hidden rounded-3xl border border-border/70 bg-card/95 px-6 py-10 text-center shadow-sm sm:min-h-[240px] md:min-h-[300px] md:px-12 lg:min-h-[340px] ${className}`}
>
	{#if asset}
		<div class="pointer-events-none absolute inset-0">
			<div
				class="absolute inset-0 opacity-10"
				style="background: radial-gradient(circle at 85% 20%, var(--accent), transparent 60%);"
			></div>
			<div class="absolute -right-6 top-1/2 hidden -translate-y-1/2 opacity-40 md:block">
				<AssetIcon asset={asset} size="12rem" />
			</div>
		</div>
	{/if}
	<div class="relative z-10 flex size-full flex-1 flex-col items-center justify-center gap-6">
		{@render children?.()}
	</div>
</div>
