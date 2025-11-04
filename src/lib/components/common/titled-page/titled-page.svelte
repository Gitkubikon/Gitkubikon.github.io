<script lang="ts">
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import BasePage from '../base-page/base-page.svelte';

	export let title = 'Title';
</script>

<BasePage {title}>
	<div class="flex flex-col items-center gap-3 py-12 text-center">
		<H1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
			{title}
		</H1>
		<div class="h-[2px] w-16 rounded-full bg-primary/60"></div>
	</div>
	<section
		class="flex flex-1 flex-col gap-8 rounded-2xl border border-border/70 bg-card/95 p-6 shadow-sm sm:p-10"
	>
		<slot />
	</section>
</BasePage>
