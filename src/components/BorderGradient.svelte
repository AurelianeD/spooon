<script lang="ts">
	export let firstColor: string;
	export let secondColor: string;
</script>

<div class="max-w-[400px] mx-auto w-full rounded-md bg-gradient-to-b from-{firstColor} to-{secondColor} p-[2px]">
	<div class="flex items-center justify-center bg-white rounded-md">
		<slot />
	</div>
</div>
