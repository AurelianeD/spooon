<script lang="ts">
	import spoonNumber from '../../stores';
	let spoons = [
		{
			number: 1,
			text: 'Peu fatiguante'
		},
		{
			number: 2,
			text: 'Fatiguante'
		},
		{
			number: 3,
			text: 'Très fatiguante'
		},
		{
			number: 4,
			text: 'Épuisante'
		}
	];
	let spoonSelected: number;
	let activityStyle = "rounded-md p-5 flex flex-row justify-between"

	function onSelectSpoon(spoon: number){
		spoonSelected = spoon;
	}

	function onPressSpoon(spoon: number){
		spoonNumber.update(n => n - spoon);
		if( $spoonNumber < 0){
			spoonNumber.update(n => 0);
		}
	}


</script>

<div>
	<h1 class="text-2xl font-semibold">J'ai effectué une activité...</h1>
	<div class="flex flex-col gap-6">
		{#each spoons as spoon}
			<button class={spoonSelected === spoon.number ? activityStyle + ' bg-gradient-to-b from-darkBlue to-lightBlue' : activityStyle + ' border-2 border-lightBlue'} on:click={() => onSelectSpoon(spoon.number)}>
				{spoon.text}
				<div class="flex flex-row">
					{#each Array(spoon.number) as spoonNumber}
						<img src="/src/lib/assets/spoon.png" alt="spoon" class="w-10 h-10" />
					{/each}
				</div>
			</button>
		{/each}
	</div>

	<button on:click={() => onPressSpoon(spoonSelected)} class="border-lightBlue border-2 p-2 mt-10 mx-auto w-full">
		<a href="/">Valider</a>
	</button>
</div>
