<script lang="ts">
	import spoonNumber from '../../stores';
	import iconSpoon from '$lib/assets/spoonOrange.png';
	import iconSpoonWhite from '$lib/assets/spoonWhite.png';
	import {activitiesGain} from "$lib/types.ts";
	import Button from "../../components/Button.svelte";

	let spoonSelected: number;
	let activityStyle = "rounded-md p-2 flex flex-row justify-between items-center";
	let href:	string;

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

	function onPressSpoon(spoon: number){
		if(spoon){
			if($spoonNumber + spoon > 12){
				console.log('is	negative');
				spoonNumber.update(n => 12);
			}else{
				spoonNumber.update(n => n + spoon);
			}
			return href = "/";
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

<div class="h-full flex flex-col">
	<h1>J'ai effectué une activité...</h1>
	<div class="flex flex-col gap-[5%] justify-center h-[80%]">
		{#each activitiesGain as spoon}
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
