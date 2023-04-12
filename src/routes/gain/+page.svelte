<script lang="ts">
	import spoonNumber from '../../stores';
	import iconSpoon from '$lib/assets/spoonOrange.png';
	import iconSpoonWhite from '$lib/assets/spoonWhite.png';
	import Button from "../../components/Button.svelte";

	let spoons = [
		{
			number: 1,
			text: 'Peu fatiguante',
			selected: false
		},
		{
			number: 2,
			text: 'Fatiguante',
			selected: false
		},
		{
			number: 3,
			text: 'Très fatiguante',
			selected: false
		},
		{
			number: 4,
			text: 'Épuisante',
			selected: false
		}
	];

	let spoonSelected: number;
	let activityStyle = "rounded-md p-5 flex flex-row justify-between";
	let href: string;

	function onSelectSpoon(spoon: {number: number, selected: boolean}){
		spoons = spoons.map(s => {
			if (s.number === spoon.number) {
				s.selected = true;
			} else {
				s.selected = false;
			}
			return s;
		});
		spoonSelected = spoon.number;
	}

	function onValidate(spoon: number){
		if(spoon){
			if($spoonNumber + spoon > 12){
				console.log('is	negative');
				spoonNumber.update(n => 12);
			}else{
				spoonNumber.update(n => n + spoon);
			}
			return href	= '/';
		}else{
			alert('Veuillez sélectionner une activité');
			return href = '/gain';
		}
	}

	$: {
		spoons = spoons.map(spoon => {
			if (spoon.selected) {
				spoon.icon = iconSpoonWhite;
			} else {
				spoon.icon = iconSpoon;
			}
			return spoon;
		});
	}

</script>

<div>
	<h1 class="text-2xl font-semibold">J'ai effectué une activité...</h1>
	<div class="flex flex-col gap-6">
		{#each spoons as spoon}
			<button class={spoon.selected ? activityStyle + ' bg-gradient-to-b from-orange to-yellow' : activityStyle + ' border-2 border-orange'} on:click={() => onSelectSpoon(spoon)}>
				{spoon.text}
				<div class="flex flex-row">
					{#each Array(spoon.number) as spoonNumber}
						<img src={spoon.icon} alt="spoon" class="w-10 h-10" />
					{/each}
				</div>
			</button>
		{/each}
	</div>
	<Button
		firstColor="orange"
		secondColor="yellow"
		title="Valider"
		onPress={() => onValidate(spoonSelected)}
		{href}
	/>
</div>
