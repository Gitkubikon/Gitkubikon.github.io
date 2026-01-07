<script lang="ts">
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import BasePage from '../base-page/base-page.svelte';

	export let title = 'Title';
</script>

<BasePage {title}>
	<div class="flex flex-col items-center gap-4 py-16 text-center">
		<H1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
			{title}
		</H1>
		<div class="h-1.5 w-12 rounded-full bg-primary/40"></div>
	</div>
	<slot />
</BasePage>
