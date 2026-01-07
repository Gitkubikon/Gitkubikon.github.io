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
	import { page } from '$app/stores';
	import { mode, toggleMode } from 'mode-watcher';

	let isDarkMode = $derived($mode === 'dark');
</script>

<div class="fixed inset-x-0 top-6 z-50 flex justify-center px-6">
	<nav
		class="glass flex items-center gap-2 rounded-full px-6 py-2.5 transition-all duration-500 ring-1 ring-white/5 shadow-2xl"
	>
		<div class="flex items-center">
			<a
				href={href('/')}
				class="group flex h-11 items-center gap-3 rounded-full px-3 transition-all hover:bg-primary/5"
			>
				<div
					class="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/80 transition-transform group-hover:scale-105 shadow-sm"
				>
					<Icon icon={NavBarData.left.icon} className="text-base text-primary-foreground" />
				</div>
				<span class="text-xs font-bold uppercase tracking-wider text-foreground/80 group-hover:text-primary">
					{NavBarData.left.title}
				</span>
			</a>
		</div>

		<div class="mx-2 h-4 w-[1px] bg-border/20"></div>

		<div class="hidden flex-row items-center gap-0.5 sm:flex">
			{#each NavBarData.items as item}
				<a href={href(item.href)}>
					<Tooltip>
						<TooltipTrigger>
							<div
								class="flex h-10 items-center gap-2 rounded-full px-4 text-[11px] font-bold uppercase tracking-wider transition-all hover:bg-primary/5 hover:text-primary"
								class:text-primary={$page.url.pathname === item.href}
								class:text-muted-foreground={$page.url.pathname !== item.href}
							>
								<Icon icon={item.icon} className="text-lg" />
								<span class="hidden lg:block">{item.title}</span>
							</div>
						</TooltipTrigger>
						<TooltipContent side="bottom" class="lg:hidden">
							{item.title}
						</TooltipContent>
					</Tooltip>
				</a>
			{/each}
		</div>

		<div class="mx-2 h-4 w-[1px] bg-border/20 hidden sm:block"></div>

		<div class="hidden flex-row items-center gap-1 sm:flex">
			<a href={href('/search')}>
				<div class="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground/60 transition-all hover:bg-primary/5 hover:text-primary">
					<Icon icon="i-carbon-search" className="text-xl" />
				</div>
			</a>
			<button
				onclick={toggleMode}
				class="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground/60 transition-all hover:bg-primary/5 hover:text-primary"
			>
				<Icon icon={isDarkMode ? 'i-carbon-sun' : 'i-carbon-moon'} className="text-xl" />
			</button>
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
