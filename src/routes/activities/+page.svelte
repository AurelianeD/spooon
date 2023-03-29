<script lang="ts">
	import spoonNumber from '../../stores';
	let spoons = [
		{
			number: 1,
			text: 'Activité peu fatiguante'
		},
		{
			number: 2,
			text: 'Activité fatiguante'
		},
		{
			number: 3,
			text: 'Activité très fatiguante'
		},
		{
			number: 4,
			text: 'Activité épuisante'
		}
	];
	let spoonSelected: number;

	function onSelectSpoon(spoon: number){
		spoonSelected = spoon;
	};

	function onPressSpoon(spoon: number){
		spoonNumber.update(n => n - spoon);
	}
</script>

<div>
	<h1>Combien de cuillière avez vous dépensez ?</h1>
	<div class="flex flex-col gap-6">
		{#each spoons as spoon}
			<button class="bg-slate-500	border-sm p-10" on:click={() => onSelectSpoon(spoon.number)}>
				<div>
					<p>{spoon.number}</p>
					<p>{spoon.text}</p>
				</div>
			</button>
		{/each}
	</div>

	<button on:click={() => onPressSpoon(spoonSelected)} class="border-black border-2 p-2 mt-10 mx-auto w-full">
		<a href="/">Valider</a>
	</button>
</div>
