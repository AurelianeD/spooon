<script lang="ts">
	export let href: string;
	export let title: string;
	export let onPress: () => void;
</script>

<button
	class="mx-auto flex items-center justify-center"
	on:click={() => onPress()}
>
	<div class="h-12 rounded-md bg-gradient-to-b from-darkBlue to-lightBlue p-[2px]">
		<div class="flex items-center justify-center h-full w-full bg-white rounded px-10">
			<a {href} class="cta">{title}</a>
		</div>
	</div>
</button>
