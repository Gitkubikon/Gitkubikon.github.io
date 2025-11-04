<script lang="ts">
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import AssetIcon from '$lib/components/ui/icon/icon-asset.svelte';
	import type { Skill } from '$lib/data/types';
	import { href } from '$lib/utils';

	const { skill }: { skill: Skill } = $props();
</script>

<Tooltip openDelay={100}>
	<TooltipTrigger>
		<a
			href={href(`/skills/${skill.slug}`)}
			class="group inline-flex size-12 items-center justify-center rounded-xl border border-border/70 bg-card/90 text-foreground transition-colors duration-200 hover:border-border hover:bg-card"
		>
			<AssetIcon
				asset={skill.logo}
				size="2rem"
				class="transition-transform duration-200 group-hover:scale-110"
			/>
		</a>
	</TooltipTrigger>
	<TooltipContent>{skill.name}</TooltipContent>
</Tooltip>
