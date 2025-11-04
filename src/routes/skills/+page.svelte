<script lang="ts">
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import SearchPage from '$lib/components/common/search-page/search-page.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import FancyCard from '$lib/components/ui/card/fancy-card.svelte';
	import AssetIcon from '$lib/components/ui/icon/icon-asset.svelte';
	import SkillsData, { groupByCategory } from '$lib/data/skills';
	import { href } from '$lib/utils';

	let query = $state('');

	function onSearch(value: string) {
		query = value;
	}

	const groups = $derived(groupByCategory(query));
</script>

<SearchPage title={SkillsData.title} {onSearch}>
	{#if groups.length === 0}
		<EmptyResult />
	{:else}
		<div class="mt-4 flex flex-col gap-14">
			{#each groups as group (group.category.slug)}
				<div class="flex flex-col gap-6">
					<div class="flex items-center gap-3">
						<div class="h-px flex-1 rounded-full bg-border/60"></div>
						<span
							class="rounded-full border border-border/70 bg-card/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground"
						>
							{group.category.name}
						</span>
						<div class="h-px flex-1 rounded-full bg-border/60"></div>
					</div>
					<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{#each group.items as item (item.slug)}
							<FancyCard color={item.color} href={href(`/skills/${item.slug}`)}>
								<CardContent class="flex flex-col gap-4">
									<div
										class="flex h-16 w-16 items-center justify-center self-start rounded-2xl border border-border/70 bg-card/90"
									>
										<AssetIcon asset={item.logo} size="2.4rem" />
									</div>
									<CardTitle>{item.name}</CardTitle>
								</CardContent>
							</FancyCard>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</SearchPage>
