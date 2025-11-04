<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Project } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { ellipsify } from '@riadh-adrani/utils';
	import ButtonLink from '../common/button-link/button-link.svelte';
	import SkillBadge from '../common/skill-badge/skill-badge.svelte';
	import Avatar from '../ui/avatar/avatar.svelte';
	import AvatarFallback from '../ui/avatar/avatar-fallback.svelte';
import Button from '../ui/button/button.svelte';
	import { CardHeader } from '../ui/card';
	import CardContent from '../ui/card/card-content.svelte';
	import CardTitle from '../ui/card/card-title.svelte';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '../ui/dropdown-menu';
	import Icon from '../ui/icon/icon.svelte';
	import AssetIcon from '../ui/icon/icon-asset.svelte';
	import Separator from '../ui/separator/separator.svelte';

	const { project }: { project: Project } = $props();

	const from = $derived(getMonthAndYear(project.period.from));
	const to = $derived(getMonthAndYear(project.period.to));
	const exactDuration = $derived(computeExactDuration(project.period.from, project.period.to));
	const hasExtraLinks = $derived(project.links.length > 1);
</script>

<FancyCard color={project.color} class="flex h-full flex-col">
	<CardHeader class="flex flex-col gap-4 pb-4">
		<div class="flex items-start gap-3">
			<Avatar class="h-12 w-12 rounded-2xl">
				<AvatarFallback class="rounded-2xl border border-border/70 bg-secondary/80 text-foreground">
					<AssetIcon asset={project.logo ?? Assets.Unknown} size="1.8rem" />
				</AvatarFallback>
			</Avatar>
			<div class="flex flex-1 flex-col gap-3">
				<div class="flex items-start justify-between gap-2">
					<CardTitle class="min-w-0 flex-1 text-lg font-semibold leading-tight text-foreground">
						<a
							href={href(`/projects/${project.slug}`)}
							class="block truncate text-foreground transition-colors hover:text-primary"
						>
							{project.name}
						</a>
					</CardTitle>
					{#if project.links.length > 0 || hasExtraLinks}
						<div class="flex shrink-0 items-center gap-1">
							{#if project.links.length > 0}
								<ButtonLink link={project.links[0]} />
							{/if}
							{#if hasExtraLinks}
								<DropdownMenu>
									<DropdownMenuTrigger>
										<Button size="icon" variant="ghost" class="text-muted-foreground">
											<Icon icon="i-carbon-overflow-menu-vertical" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent class="w-44">
										{#each project.links.slice(1) as link (link.to)}
											<a href={link.to} target={'_blank'}>
												<DropdownMenuItem>
													{link.label}
												</DropdownMenuItem>
											</a>
										{/each}
									</DropdownMenuContent>
								</DropdownMenu>
							{/if}
						</div>
					{/if}
				</div>
				<div class="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
					<div class="flex items-center gap-2">
						<Icon icon="i-carbon-assembly-cluster" className="text-base" />
						<span>{project.type}</span>
					</div>
					<div class="flex items-center gap-2">
						<Icon icon="i-carbon-time" className="text-base" />
						<span>{exactDuration}</span>
					</div>
				</div>
			</div>
		</div>
		<Separator class="bg-border/70" />
	</CardHeader>
	<CardContent class="flex flex-1 flex-col gap-5 pt-0">
		<p class="text-sm leading-relaxed text-muted-foreground">
			{ellipsify(project.shortDescription, 120)}
		</p>
		<div class="flex items-center justify-between text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
			<span>{from}</span>
			<span>{to}</span>
		</div>
		<div class="flex flex-wrap gap-2 pt-2">
			{#each project.skills as skill (skill.slug)}
				<SkillBadge {skill} />
			{/each}
		</div>
	</CardContent>
</FancyCard>
