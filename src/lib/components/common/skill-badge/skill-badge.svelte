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
			class="group inline-flex size-10 items-center justify-center rounded-xl bg-background/40 text-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary ring-1 ring-white/5 hover:ring-primary/20 shadow-sm"
		>
			<AssetIcon
				asset={skill.logo}
				size="1.5rem"
				class="transition-transform duration-200 group-hover:scale-110"
			/>
		</a>
	</TooltipTrigger>
	<TooltipContent>{skill.name}</TooltipContent>
</Tooltip>
