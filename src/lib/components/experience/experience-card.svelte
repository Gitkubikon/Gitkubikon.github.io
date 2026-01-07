<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Experience } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { ellipsify } from '@riadh-adrani/utils';
	import SkillBadge from '../common/skill-badge/skill-badge.svelte';
	import { Avatar, AvatarFallback } from '../ui/avatar';
	import { Badge } from '../ui/badge';
	import { CardContent, CardTitle } from '../ui/card';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import Icon from '../ui/icon/icon.svelte';
	import AssetIcon from '../ui/icon/icon-asset.svelte';

	const { it }: { it: Experience } = $props();

	const exactDuration = $derived(computeExactDuration(it.period.from, it.period.to));
	const from = $derived(getMonthAndYear(it.period.from));
	const to = $derived(getMonthAndYear(it.period.to));
	const period = $derived(`${from} - ${to}`);

	const badges = $derived<Array<{ label: string; icon: `i-carbon-${string}` }>>([
		{ label: it.company, icon: 'i-carbon-building' },
		{ label: it.location, icon: 'i-carbon-location' },
		{ label: it.contract, icon: 'i-carbon-hourglass' }
	]);
</script>

<div class="glass glass-hover group flex flex-col gap-4 rounded-xl p-5">
	<div class="flex items-start gap-3">
		<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5 border border-primary/10">
			<AssetIcon asset={it.logo ?? Assets.Unknown} size="1.25rem" />
		</div>
		<div class="flex flex-1 flex-col gap-0.5">
			<div class="flex items-center justify-between gap-3">
				<h3 class="text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
					<a href={href(`/experience/${it.slug}`)}>
						{it.name}
					</a>
				</h3>
				<span class="text-[8px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-1.5 py-0.5 rounded-md">
					{it.contract}
				</span>
			</div>
			<div class="text-[10px] font-semibold text-muted-foreground/50">
				{it.company}
			</div>
		</div>
	</div>

	<p class="text-[11px] leading-relaxed text-muted-foreground/60">
		{ellipsify(it.shortDescription, 140)}
	</p>

	<div class="flex flex-wrap gap-1">
		{#each it.skills as skill (skill.slug)}
			<SkillBadge {skill} />
		{/each}
	</div>

	<div class="mt-auto flex items-center justify-between border-t border-border/10 pt-3 text-[8px] font-bold uppercase tracking-wider text-muted-foreground/30">
		<div class="flex items-center gap-2">
			<Icon icon="i-carbon-calendar" />
			<span>{period}</span>
		</div>
		<div class="flex items-center gap-2">
			<Icon icon="i-carbon-location" />
			<span>{it.location}</span>
		</div>
	</div>
</div>
