<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import { onMount, type Snippet } from 'svelte';
	import TitledPage from '../titled-page/titled-page.svelte';

	let {
		title = 'Untitled',
		onSearch,
		children
	}: { title: string; onSearch: (value: string) => void; children: Snippet } = $props();

	let query = $state('');
	let mounted = $state(false);

	$effect(() => {
		if (mounted) {
			let searchParams = new URLSearchParams(window.location.search);

			searchParams.set('q', query);

			const url = `${window.location.protocol}//${window.location.host}${
				window.location.pathname
			}?${searchParams.toString()}`;

			const state = window.history.state;

			window.history.replaceState(state, '', url);

			onSearch(query);
		}
	});

	onMount(() => {
		let searchParams = new URLSearchParams(window.location.search);
		query = searchParams.get('q') ?? '';
		mounted = true;
	});
</script>

<TitledPage {title}>
	<div
		class="flex flex-col gap-3 rounded-2xl border border-border/70 bg-card/95 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6"
	>
		<Input placeholder="Search..." bind:value={query} class="h-12 flex-1" />
	</div>
	{@render children()}
</TitledPage>
