<script lang="ts">
	export let href: string;
	export let title: string;
	export let source: string;
	export let firstColor: string;
	export let secondColor: string;
	export let onPress: () => void;
	export let noHasIcon: boolean;
</script>

<a {href} class="cta">
	<button
			class="mx-auto flex-1 items-center justify-center w-full"
			on:click={() => onPress()}
	>
	<div class="rounded-md bg-gradient-to-b from-{firstColor} to-{secondColor} p-[2px]">
			<div class="flex items-center justify-center bg-white rounded px-6 py-2">
				<img class:hidden={noHasIcon} class="h-8 mr-2" src={source} alt="Logo énergie">
				<p class="cta">{title}</p>
			</div>
		</div>
	</button>
</a>
