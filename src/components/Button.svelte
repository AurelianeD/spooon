<script lang="ts">
	export let href: string;
	export let title: string;
	export let source: string;
	export let firstColor: string;
	export let secondColor: string;
	export let onPress: () => void;
	export let noHasIcon: boolean;
</script>

<a {href} class="max-w-[400px] mx-auto w-full">
	<button
			class="items-center justify-center w-full"
			on:click={() => onPress()}
	>
		<div class="rounded-md bg-gradient-to-b from-{firstColor} to-{secondColor} p-[2px]">
			<div class="flex items-center justify-center bg-white rounded py-2">
				<img class:hidden={noHasIcon} class="max-h-[20px] md:max-h-[30px] mr-2" src={source} alt="Logo énergie">
				<p class="cta">{title}</p>
			</div>
		</div>
	</button>
</a>
