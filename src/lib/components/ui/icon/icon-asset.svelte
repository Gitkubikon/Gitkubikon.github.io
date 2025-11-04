<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Asset } from '$lib/data/types';
	import { cn } from '$lib/utils.js';

	const {
		asset,
		size = '2.5rem',
		class: className
	}: {
		asset: Asset;
		size?: string;
		class?: string;
	} = $props();

</script>

<Icon
	icon={asset.name}
	class={cn('flex-shrink-0', className)}
	style={`width: ${size}; height: ${size};${asset.color ? ` color: ${asset.color};` : ''}`}
/>
