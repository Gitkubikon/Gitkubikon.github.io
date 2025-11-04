<script lang="ts">
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import SearchPage from '$lib/components/common/search-page/search-page.svelte';
	import EducationCard from '$lib/components/education/education-card.svelte';
	import ExperienceCard from '$lib/components/experience/experience-card.svelte';
	import ProjectCard from '$lib/components/projects/project-card.svelte';
	import Avatar from '$lib/components/ui/avatar/avatar.svelte';
	import AvatarFallback from '$lib/components/ui/avatar/avatar-fallback.svelte';
	import { CardContent, CardTitle } from '$lib/components/ui/card';
	import FancyCard from '$lib/components/ui/card/fancy-card.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import AssetIcon from '$lib/components/ui/icon/icon-asset.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Large from '$lib/components/ui/typography/large.svelte';
	import EducationData from '$lib/data/education';
	import ExperienceData from '$lib/data/experience';
	import ProjectsData from '$lib/data/projects';
	import SkillsData from '$lib/data/skills';
	import type { Education, Experience, Project, Skill } from '$lib/data/types';
	import { href } from '$lib/utils';

	type SkillGroup = {
		icon: `i-carbon-${string}`;
		name: 'Skills';
		items: Array<Skill>;
	};

	type ProjectGroup = {
		icon: `i-carbon-${string}`;
		name: 'Projects';
		items: Array<Project>;
	};

	type ExperienceGroup = {
		icon: `i-carbon-${string}`;
		name: 'Experience';
		items: Array<Experience>;
	};

	type EducationGroup = {
		icon: `i-carbon-${string}`;
		name: 'Education';
		items: Array<Education>;
	};

	type Group = SkillGroup | ProjectGroup | ExperienceGroup | EducationGroup;

	let search = $state('');

	const getResult = (q: string): Array<Group> => {
		const skills = SkillsData.items.filter((it) => it.name.toLowerCase().includes(q.toLowerCase()));

		const projects = ProjectsData.items.filter((it) =>
			it.name.toLowerCase().includes(q.toLowerCase())
		);

		const experience = ExperienceData.items.filter(
			(it) =>
				it.name.toLowerCase().includes(q.toLowerCase()) ||
				it.company.toLowerCase().includes(q) ||
				it.location.toLowerCase().includes(q)
		);

		const education = EducationData.items.filter(
			(it) =>
				it.name.toLowerCase().includes(q.toLowerCase()) ||
				it.degree.toLowerCase().includes(q) ||
				it.location.toLowerCase().includes(q) ||
				it.organization.toLowerCase().includes(q)
		);

		const groups: Array<Group> = [];

		if (skills.length) {
			groups.push({
				icon: 'i-carbon-assembly-cluster',
				name: 'Skills',
				items: skills
			});
		}

		if (projects.length) {
			groups.push({
				icon: 'i-carbon-cube',
				name: 'Projects',
				items: projects
			});
		}

		if (experience.length) {
			groups.push({
				icon: 'i-carbon-development',
				name: 'Experience',
				items: experience
			});
		}

		if (education.length) {
			groups.push({
				icon: 'i-carbon-education',
				name: 'Education',
				items: education
			});
		}

		return groups;
	};

	let result = $derived(getResult(search));

	const onSearch = (query: string) => (search = query);
</script>

<SearchPage title="Search" {onSearch}>
	{#if result.length === 0}
		<EmptyResult />
	{:else}
		<div class="mt-8 flex flex-col gap-12">
			{#each result as group (group.name)}
				<div class="flex flex-col gap-8">
					<div class="flex flex-row items-center gap-6">
						<div class="flex flex-row gap-2">
							<Large>
								<Icon icon={group.icon} />
							</Large>
							<Large>{group.name}</Large>
						</div>
						<Separator class="flex-1" />
					</div>
					{#if group.name === 'Skills'}
						<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
							{#each group.items as skill (skill.slug)}
								<FancyCard color={skill.color} href={href(`/skills/${skill.slug}`)}>
									<CardContent class="flex flex-col items-center gap-3 p-5 text-center">
										<Avatar class="h-14 w-14 rounded-2xl">
											<AvatarFallback class="rounded-2xl border border-border/70 bg-secondary/80 text-foreground">
												<AssetIcon asset={skill.logo} size="2rem" />
											</AvatarFallback>
										</Avatar>
										<CardTitle class="text-sm font-medium">{skill.name}</CardTitle>
									</CardContent>
								</FancyCard>
							{/each}
						</div>
					{:else if group.name === 'Projects'}
						<div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
							{#each group.items as project (project.slug)}
								<ProjectCard {project} />
							{/each}
						</div>
					{:else if group.name === 'Experience'}
						<div class="flex flex-col gap-5">
							{#each group.items as it (it.slug)}
								<ExperienceCard {it} />
							{/each}
						</div>
					{:else if group.name === 'Education'}
						<div class="flex flex-col gap-5">
							{#each group.items as it (it.slug)}
								<EducationCard {it} />
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</SearchPage>
