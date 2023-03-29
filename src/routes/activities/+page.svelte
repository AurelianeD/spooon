<script lang="ts">
	import spoonNumber from '../../stores';
	let spoons = [
		{
			number: 1,
			text: 'peu fatiguante'
		},
		{
			number: 2,
			text: 'fatiguante'
		},
		{
			number: 3,
			text: 'très fatiguante'
		},
		{
			number: 4,
			text: 'épuisante'
		}
	];
	let spoonSelected: number;
	let activityStyle = "rounded-md p-5 flex flex-row justify-between border-2"

	function onSelectSpoon(spoon: number){
		spoonSelected = spoon;
	}

	function onPressSpoon(spoon: number){
		spoonNumber.update(n => n - spoon);
	}


</script>

<div>
	<h1>J'ai effectué une activité...</h1>
	<div class="flex flex-col gap-6">
		{#each spoons as spoon}
			<button class={spoonSelected === spoon.number ? activityStyle + ' border-lightBlue' : activityStyle + ' border-black'} on:click={() => onSelectSpoon(spoon.number)}>
				{spoon.text}
				<div class="flex flex-row">
					{#each Array(spoon.number) as spoonNumber}
						<img src="/src/lib/assets/spoon.png" alt="spoon" class="w-10 h-10" />
					{/each}
				</div>
			</button>
		{/each}
	</div>

	<button on:click={() => onPressSpoon(spoonSelected)} class="border-black border-2 p-2 mt-10 mx-auto w-full">
		<a href="/">Valider</a>
	</button>
</div>
