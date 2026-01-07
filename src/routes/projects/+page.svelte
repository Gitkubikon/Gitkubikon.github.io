<script lang="ts">
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import SearchPage from '$lib/components/common/search-page/search-page.svelte';
	import ProjectCard from '$lib/components/projects/project-card.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Toggle from '$lib/components/ui/toggle/toggle.svelte';
	import ProjectsData from '$lib/data/projects';
	import SkillsData from '$lib/data/skills';
	import type { Skill } from '$lib/data/types';

	interface SkillFilter extends Skill {
		isSelected?: boolean;
	}

	let filters: Array<SkillFilter> = $state(
		SkillsData.items.filter((it) => {
			return ProjectsData.items.some((project) =>
				project.skills.some((skill) => skill.slug === it.slug)
			);
		})
	);

	let search = $state('');
	let result = $derived(
		ProjectsData.items.filter((project) => {
			const isFiltered =
				filters.every((item) => !item.isSelected) ||
				project.skills.some((tech) =>
					filters.some((filter) => filter.isSelected && filter.slug === tech.slug)
				);

			const isSearched =
				search.trim().length === 0 ||
				project.name.trim().toLowerCase().includes(search.trim().toLowerCase());

			return isFiltered && isSearched;
		})
	);

	const toggleSelected = (slug: string) => {
		filters = filters.map((it) => (it.slug === slug ? { ...it, isSelected: !it.isSelected } : it));
	};

	const onSearch = (query: string) => (search = query);
</script>

<SearchPage title={ProjectsData.title} {onSearch}>
	<div class="flex flex-col gap-10">
		<div class="flex flex-wrap items-center gap-3">
			<div class="flex items-center gap-2 pr-4 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/30 border-r border-border/20 mr-1">
				<Icon icon="i-carbon-filter" />
				<span>Filter</span>
			</div>
			{#each filters as it (it.slug)}
				<Toggle
					pressed={it.isSelected}
					variant="outline"
					class="h-9 rounded-xl border-none bg-background/40 px-5 text-xs font-bold uppercase tracking-wider text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary data-[state=on]:bg-primary/20 data-[state=on]:text-primary data-[state=on]:ring-1 data-[state=on]:ring-primary/30"
					on:click={() => toggleSelected(it.slug)}
				>
					<div class="flex items-center gap-2">
						{#if it.isSelected}
							<Icon icon="i-carbon-checkmark" />
						{/if}
						{it.name}
					</div>
				</Toggle>
			{/each}
		</div>
		{#if result.length === 0}
			<EmptyResult />
		{:else}
			<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
				{#each result as it (it.slug)}
					<ProjectCard project={it} />
				{/each}
			</div>
		{/if}
	</div>
</SearchPage>
