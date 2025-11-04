<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Tooltip, TooltipTrigger } from '$lib/components/ui/tooltip';
	import TooltipContent from '$lib/components/ui/tooltip/tooltip-content.svelte';
	import H4 from '$lib/components/ui/typography/h4.svelte';
	import Large from '$lib/components/ui/typography/large.svelte';
	import BaseData from '$lib/data/base';
	import NavBarData from '$lib/data/nav-bar';
	import { href } from '$lib/utils';
	import { mode, toggleMode } from 'mode-watcher';

	let isDarkMode = $derived($mode === 'dark');
</script>

<div class="fixed inset-x-0 top-4 z-40 flex justify-center px-4 sm:px-6">
	<nav
		class="flex w-full max-w-5xl items-center gap-3 rounded-2xl border border-border/80 bg-card/95 px-4 py-2.5 shadow-sm backdrop-blur supports-[backdrop-filter]:backdrop-blur-xl transition-colors duration-200"
	>
		<div class="flex flex-1 items-center gap-3">
			<a
				href={href('/')}
				class="flex items-center gap-3 rounded-full px-2 py-1 text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground"
			>
				<div
					class="flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-primary/80 text-primary-foreground"
				>
					<Icon icon={NavBarData.left.icon} className="text-lg" />
				</div>
				<H4 className="hidden text-sm font-semibold tracking-tight sm:block">
					{NavBarData.left.title}
				</H4>
				<Large className="text-sm font-semibold sm:hidden">{BaseData.fullName}</Large>
			</a>
		</div>

		<div class="hidden flex-[2] flex-row items-center justify-center gap-1 sm:flex">
			{#each NavBarData.items as item}
				<a href={href(item.href)}>
					<Tooltip>
						<TooltipTrigger>
							<Button
								class="flex flex-row items-center justify-center gap-2 px-4 text-sm font-medium text-foreground/70 hover:text-foreground"
								variant="ghost"
							>
								<Icon icon={item.icon} className="text-lg" />
								<div class="hidden lg:block">{item.title}</div>
							</Button>
						</TooltipTrigger>
						<TooltipContent side="bottom" class="lg:hidden">
							{item.title}
						</TooltipContent>
					</Tooltip>
				</a>
			{/each}
		</div>

		<div class="hidden flex-1 flex-row items-center justify-end gap-2 sm:flex">
			<a href={href('/search')}>
				<Button variant="ghost" class="text-lg">
					<Icon icon="i-carbon-search" />
				</Button>
			</a>
			<Button variant="ghost" class="text-lg" on:click={toggleMode}>
				<Icon icon={isDarkMode ? 'i-carbon-moon' : 'i-carbon-sun'} />
			</Button>
		</div>

		<div class="flex flex-1 flex-row items-center justify-end gap-1 sm:hidden">
			<Dialog>
				<DialogTrigger>
					<Button size="icon" variant="ghost">
						<Icon className="text-xl" icon="i-carbon-menu" />
					</Button>
				</DialogTrigger>
				<DialogContent class="border border-border/70 bg-card/95 backdrop-blur-xl">
					<div class="flex flex-col gap-2 pt-4">
						{#each NavBarData.items as item}
							<DialogClose>
								<a href={href(item.href)} class="w-full">
									<Button
										class="flex w-full flex-row items-center justify-start gap-3 text-foreground/80"
										variant="ghost"
									>
										<Icon icon={item.icon} className="text-lg" />
										<div>{item.title}</div>
									</Button>
								</a>
							</DialogClose>
						{/each}
						<Separator />
						<DialogClose>
							<a href={href('/search')} class="w-full">
								<Button
									class="flex w-full flex-row items-center justify-start gap-3 text-foreground/80"
									variant="ghost"
								>
									<Icon icon={'i-carbon-search'} className="text-lg" />
									<div>Search</div>
								</Button>
							</a>
						</DialogClose>
						<Separator />
						<Button
							class="flex w-full flex-row items-center justify-start gap-3 text-foreground/80"
							variant="ghost"
							on:click={toggleMode}
						>
							<Icon icon={isDarkMode ? 'i-carbon-moon' : 'i-carbon-sun'} className="text-lg" />
							<div>{isDarkMode ? 'Dark' : 'Light'}</div>
						</Button>
					</div>
					<DialogFooter class="items-end">
						<DialogClose>
							<Button>Close</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	</nav>
</div>
