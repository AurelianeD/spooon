<script lang="ts">
	export let href: string;
	export let title: string;
	export let onPress: () => void;
</script>

<a {href} class="cta">
	<button
			class="mx-auto flex-1 items-center justify-center w-full"
			on:click={() => onPress()}
	>
		<div class="rounded-md bg-gradient-to-b from-darkBlue to-lightBlue p-[2px]">
			<div class="flex items-center justify-center bg-white rounded px-10 py-3">
				{title}
			</div>
		</div>
	</button>
</a>
