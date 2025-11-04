<script>
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import ResumeData from '$lib/data/resume';
</script>

<TitledPage title={ResumeData.title}>
	<div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
		<a href={ResumeData.resume} class="w-full sm:w-auto">
			<Button class="w-full gap-2 sm:w-auto" size="lg">
				Download Résumé
				<Icon icon="i-carbon-download" className="text-lg" />
			</Button>
		</a>
	</div>
	<div
		class="overflow-hidden rounded-2xl border border-border/70 bg-card/95 shadow-sm"
	>
		<iframe
			src={ResumeData.resume}
			class="min-h-[600px] h-full w-full"
			title={ResumeData.title}
		></iframe>
	</div>
</TitledPage>
