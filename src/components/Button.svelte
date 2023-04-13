<script lang="ts">
	export let href: string;
	export let title: string;
	export let source: string;
	export let firstColor: string;
	export let secondColor: string;
	export let onPress: () => void;
</script>

<a {href} class="max-w-[400px] mx-auto w-full">
	<button
			class="items-center justify-center w-full"
			on:click={() => onPress()}
	>
	<div class="rounded-md bg-gradient-to-b from-{firstColor} to-{secondColor} p-[2px]">
			<div class="flex items-center justify-center bg-white rounded py-3">
				<img class="max-h-[20px] mr-2 md:max-h-[30px]" src={source} alt="Logo énergie">
				<p class="cta md:text-xl">{title}</p>
			</div>
		</div>
	</button>
</a>
