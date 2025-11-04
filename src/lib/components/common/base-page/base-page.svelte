<script lang="ts">
	import ResponsiveContainer from '$lib/components/ui/responsive-container/responsive-container.svelte';
	import Title from '../title/title.svelte';

	export let title = 'Title';
</script>

<Title {title} />
<ResponsiveContainer className="relative flex flex-1 flex-col gap-12 pb-20">
	<slot />
</ResponsiveContainer>
