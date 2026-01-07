<script>
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import ResumeData from '$lib/data/resume';
</script>

<TitledPage title={ResumeData.title}>
	<div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
		<a href={ResumeData.resume} class="w-full sm:w-auto">
			<Button class="w-full gap-2 sm:w-auto h-11 px-6 rounded-xl" size="lg">
				Download Résumé
				<Icon icon="i-carbon-download" className="text-lg" />
			</Button>
		</a>
	</div>
	<div
		class="glass overflow-hidden rounded-[1.25rem] p-1"
	>
		<iframe
			src={ResumeData.resume}
			class="min-h-[800px] h-full w-full rounded-xl"
			title={ResumeData.title}
		></iframe>
	</div>
</TitledPage>
