<script lang="ts">
	import Icon from '$lib/components/ui/icon/icon.svelte';
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
	<div class="flex flex-col gap-10">
		<div class="glass group flex items-center gap-4 overflow-hidden rounded-xl border-none bg-background/40 px-5 focus-within:bg-background/60 transition-all ring-1 ring-white/5 focus-within:ring-primary/30 shadow-md">
			<Icon icon="i-carbon-search" className="text-muted-foreground/40 text-xl transition-colors group-focus-within:text-primary/60" />
			<input
				type="text"
				placeholder="Search projects..."
				bind:value={query}
				class="h-12 w-full border-none bg-transparent py-3 text-base font-medium text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-0"
			/>
		</div>
		{@render children()}
	</div>
</TitledPage>
