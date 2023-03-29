<script lang="ts">
	import spoonNumber from '../../stores';
	let spoons = [1, 2, 3, 4];

	function onPressSpoon(spoon: number){
		spoonNumber.update(n => n - spoon);
	}
</script>

<div>
	<h1>Activité</h1>
	<div class="flex flex-row">
		{#each spoons as spoon}
			<div class="bg-slate-500	border-sm">
				<button on:click={() => onPressSpoon(spoon)}><a href="/">{spoon} cuillière</a></button>
			</div>
		{/each}
	</div>
</div>
