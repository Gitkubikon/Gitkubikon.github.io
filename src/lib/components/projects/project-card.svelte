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

<div class="glass glass-hover group flex h-full flex-col overflow-hidden rounded-[1.5rem] p-6">
	<div class="flex flex-col gap-5">
		<div class="flex items-start gap-3">
			<div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 border border-primary/10">
				<AssetIcon asset={project.logo ?? Assets.Unknown} size="1.5rem" />
			</div>
			<div class="flex flex-1 flex-col gap-0.5">
				<div class="flex items-center justify-between gap-4">
					<h3 class="line-clamp-1 text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
						<a href={href(`/projects/${project.slug}`)}>
							{project.name}
						</a>
					</h3>
					{#if project.links.length > 0}
						<div class="flex items-center gap-2">
							<a 
								href={project.links[0].to} 
								target="_blank"
								class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
							>
								<Icon icon="i-carbon-link" className="text-sm" />
							</a>
						</div>
					{/if}
				</div>
				<div class="flex flex-wrap items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
					<span>{project.type}</span>
					<span class="h-1 w-1 rounded-full bg-border/50"></span>
					<span>{exactDuration}</span>
				</div>
			</div>
		</div>

		<p class="line-clamp-3 text-xs leading-relaxed text-muted-foreground/70">
			{project.shortDescription}
		</p>

		<div class="flex flex-wrap gap-1.5 pt-1">
			{#each project.skills as skill (skill.slug)}
				<SkillBadge {skill} />
			{/each}
		</div>
		
		<div class="mt-auto flex items-center justify-between border-t border-border/10 pt-3 text-[8px] font-bold uppercase tracking-[0.2em] text-muted-foreground/30">
			<span>{from} — {to}</span>
			<Icon icon="i-carbon-arrow-right" className="opacity-0 group-hover:opacity-100 transition-opacity" />
		</div>
	</div>
</div>
