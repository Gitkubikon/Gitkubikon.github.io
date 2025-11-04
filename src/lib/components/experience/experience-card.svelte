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

	const exactDuration = computeExactDuration(it.period.from, it.period.to);
	const from = $derived(getMonthAndYear(it.period.from));
	const to = $derived(getMonthAndYear(it.period.to));
	const period = $derived(`${from} - ${to}`);

const badges = $derived<Array<{ label: string; icon: `i-carbon-${string}` }>>([
	{ label: it.company, icon: 'i-carbon-building' },
	{ label: it.location, icon: 'i-carbon-location' },
	{ label: it.contract, icon: 'i-carbon-hourglass' }
]);
</script>

<FancyCard color={it.color} href={href(`/experience/${it.slug}`)}>
	<CardContent class="flex flex-col gap-6 sm:flex-row sm:items-start">
		<Avatar class="h-12 w-12 rounded-2xl">
			<AvatarFallback class="rounded-2xl border border-border/70 bg-secondary/80 text-foreground">
				<AssetIcon asset={it.logo ?? Assets.Unknown} size="1.8rem" />
			</AvatarFallback>
		</Avatar>
		<div class="flex flex-1 flex-col gap-4">
			<CardTitle class="text-lg font-semibold text-foreground">{it.name}</CardTitle>
			<div class="flex flex-wrap gap-2">
				{#each badges as badge (badge.icon)}
					<Badge variant="secondary" class="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em]">
						<Icon icon={badge.icon} className="text-base" />
						{badge.label}
					</Badge>
				{/each}
			</div>
			<div class="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
				<div class="flex items-center gap-2">
					<Icon icon="i-carbon-calendar" className="text-base" />
					<span>{period}</span>
				</div>
				<div class="flex items-center gap-2">
					<Icon icon="i-carbon-time" className="text-base" />
					<span>{exactDuration}</span>
				</div>
			</div>
			<p class="text-sm leading-relaxed text-muted-foreground">
				{ellipsify(it.shortDescription, 160)}
			</p>
			<div class="flex flex-wrap gap-2 pt-1">
				{#each it.skills as skill (skill.slug)}
					<SkillBadge {skill} />
				{/each}
			</div>
		</div>
	</CardContent>
</FancyCard>
