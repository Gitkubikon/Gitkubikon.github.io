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

<!-- Epic Background Ambient Photo - Full Viewport -->
<div class="pointer-events-none fixed inset-0 z-[-1] select-none overflow-hidden">
	<img 
		src="/Bewebungsfoto_transparent.png" 
		alt="" 
		class="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 max-w-none object-cover opacity-[0.5] blur-[16px] brightness-125 contrast-125 transition-all duration-1000"
		style="mask-image: radial-gradient(circle at center, black 60%, transparent 100%);"
	/>
</div>

<ResponsiveContainer className="relative flex flex-1 items-center justify-center py-16 lg:py-24">
	<section class="grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr,0.7fr]">
		<div class="flex flex-col gap-10 animate-in fade-in slide-in-from-left-6 duration-1000 ease-out">
			<div class="flex flex-col gap-6">
				<Badge
					variant="secondary"
					class="w-fit border-none bg-primary/5 px-3 py-1.5 text-[9px] font-bold tracking-[0.3em] text-primary"
				>
					DRONE OPS PRODUCT ENGINEER
				</Badge>
				
				<div class="flex flex-col gap-4">
					<span class="text-sm font-bold uppercase tracking-[0.5em] text-muted-foreground/40">
						Hello, I'm
					</span>
					<H1 className="text-balance text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
						<span class="text-foreground">{heroName}</span>
					</H1>
				</div>

				<Muted className="max-w-lg text-base leading-relaxed text-foreground/60 sm:text-lg">
					{HomeData.hero.description}
				</Muted>
			</div>

			<div class="flex flex-wrap items-center gap-3">
				<a href={href('/projects')}>
					<Button size="lg" class="h-12 px-8 rounded-xl">
						Explore Projects
						<Icon icon="i-carbon-arrow-right" className="ml-2 text-lg" />
					</Button>
				</a>
				<a href={href('/resume')}>
					<Button variant="outline" size="lg" class="h-12 px-8 rounded-xl">
						View Résumé
					</Button>
				</a>
			</div>

			<div class="flex flex-col gap-3">
				<span class="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40">
					Connected via
				</span>
				<div class="flex flex-wrap items-center gap-2.5">
					{#each HomeData.hero.links as item}
						<a
							href={item.href}
							target="_blank"
							class="group flex items-center justify-center rounded-xl border border-border/30 bg-card/20 p-2.5 text-foreground/40 transition-all hover:border-primary/20 hover:bg-primary/5 hover:text-primary"
							title={item.label}
						>
							<Icon icon={item.icon} className="text-lg transition-transform group-hover:scale-105" />
						</a>
					{/each}
				</div>
			</div>
		</div>

		<aside class="glass group relative flex w-full flex-col gap-6 overflow-hidden rounded-[1.5rem] p-8 animate-in fade-in slide-in-from-right-6 duration-1000 ease-out">
			<div class="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl transition-colors group-hover:bg-primary/10"></div>
			
			<div class="relative flex items-center justify-between">
				<div class="flex flex-col gap-0.5">
					<span class="text-[9px] font-bold uppercase tracking-[0.4em] text-primary/60">
						Core stack
					</span>
					<h2 class="text-lg font-bold text-foreground">Technical Arsenal</h2>
				</div>
				<Icon icon="i-carbon-chip" className="text-xl text-primary/40" />
			</div>

			<ul class="relative grid grid-cols-2 gap-4">
				{#each featuredSkills as item}
					<li class="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border/30 bg-card/30 p-6 transition-all hover:border-primary/20 hover:bg-card/50 hover:shadow-lg hover:-translate-y-0.5">
						<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-background/30 shadow-inner">
							<AssetIcon asset={item.logo} size="1.75rem" />
						</div>
						<span class="text-xs font-bold text-foreground/80">{item.name}</span>
					</li>
				{/each}
			</ul>

			<div class="relative rounded-2xl bg-primary/[0.03] p-5 text-xs font-medium leading-relaxed text-muted-foreground/60 border border-primary/5">
				Previously shipped reliable systems for crews at <span class="text-primary/70 font-bold">HIVE</span>, now focusing on <span class="text-foreground/80">#mitdenkt</span>, while also working with <span class="text-foreground/80">GRIT Racing</span> & <span class="text-foreground/80">GRIT Auto</span> and prototyping <span class="text-primary/70">AICO Flow</span>.
			</div>
		</aside>
	</section>
</ResponsiveContainer>
