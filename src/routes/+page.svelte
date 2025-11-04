<script lang="ts">
	import Title from '$lib/components/common/title/title.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import AssetIcon from '$lib/components/ui/icon/icon-asset.svelte';
	import ResponsiveContainer from '$lib/components/ui/responsive-container/responsive-container.svelte';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import HomeData from '$lib/data/home';
	import { href } from '$lib/utils';

	const heroName = $derived(HomeData.hero.title.replace(/,\s*$/, ''));
	const featuredSkills = $derived(HomeData.carousel.slice(0, 6));
</script>

<Title title={HomeData.title} />
<ResponsiveContainer className="flex flex-1 items-center py-14 md:py-20">
	<section class="grid w-full gap-12 md:grid-cols-[1.6fr,1fr] md:items-start">
		<div class="flex flex-col gap-10">
			<div class="flex flex-col gap-6">
				<Badge
					variant="secondary"
					class="w-fit px-4 py-2 text-[10px] tracking-[0.35em] text-foreground/70"
				>
					DRONE OPS PRODUCT ENGINEER
				</Badge>
				<H1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
					<span class="block text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
						Hello, I'm
					</span>
					<span class="mt-3 block text-foreground">
						<span class="text-primary">{heroName}</span>
					</span>
				</H1>
				<Muted className="max-w-2xl text-base sm:text-lg">
					{HomeData.hero.description}
				</Muted>
			</div>

			<div class="flex flex-wrap items-center gap-3">
				<a href={href('/projects')}>
					<Button size="lg">
						Explore Projects
						<Icon icon="i-carbon-arrow-right" className="text-xl" />
					</Button>
				</a>
				<a href={href('/resume')}>
					<Button variant="outline" size="lg">
						View Résumé
					</Button>
				</a>
			</div>

			<div class="flex flex-col gap-3">
				<span class="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
					Find me
				</span>
				<div class="flex flex-wrap items-center gap-2">
					{#each HomeData.hero.links as item}
						<a
							href={item.href}
							target="_blank"
							class="flex items-center gap-2 rounded-full border border-border/80 bg-card px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-border hover:text-foreground"
						>
							<Icon icon={item.icon} className="text-base" />
							<span class="hidden sm:inline">{item.label}</span>
						</a>
					{/each}
				</div>
			</div>
		</div>

		<aside class="flex w-full flex-col gap-6 rounded-2xl border border-border/70 bg-card/90 p-6 shadow-sm">
			<div class="flex items-center justify-between">
				<span class="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
					Core stack
				</span>
				<Icon icon="i-carbon-bar-chart" className="text-muted-foreground" />
			</div>
			<ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
				{#each featuredSkills as item}
					<li class="flex items-center gap-3 rounded-xl border border-border/70 bg-card px-3 py-3 transition-colors hover:border-border hover:bg-card/90">
						<AssetIcon asset={item.logo} size="1.75rem" />
						<span class="text-sm font-medium text-foreground">{item.name}</span>
					</li>
				{/each}
			</ul>
			<div class="rounded-xl border border-dashed border-border/70 p-4 text-sm text-muted-foreground">
				Previously shipped reliable systems for crews at HIVE, now focusing on #mitdenkt, while also working with GRIT Racing & GRIT Auto and prototyping AICO Flow.
			</div>
		</aside>
	</section>
</ResponsiveContainer>
