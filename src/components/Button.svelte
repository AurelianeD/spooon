<script lang="ts">
	export let href: string;
	export let title: string;
	export let onPress: () => void;
</script>

<button
	class="mx-auto flex items-center justify-center mt-10"
	on:click={() => onPress()}
>
	<div class="rounded-md bg-gradient-to-b from-darkBlue to-lightBlue p-[2px]">
		<div class="h-full w-full bg-white rounded">
			<a class="py-3 px-16 flex items-center justify-center" {href}>{title}</a>
		</div>
	</div>
</button>
