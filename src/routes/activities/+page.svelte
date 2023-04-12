<script lang="ts">
	import spoonNumber from '../../stores';
	import iconSpoon from '$lib/assets/spoon.png';
	import iconSpoonWhite from '$lib/assets/spoonWhite.png';
	import Button from "../../components/Button.svelte";
	import {activitiesLoose} from "$lib/types.ts";

	let activityStyle = "rounded-md p-2 flex flex-row justify-between items-center";
	let spoonSelected: number;
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
			if($spoonNumber - spoon < 0){
				spoonNumber.update(n => 0);
			}else{
				spoonNumber.update(n => n - spoon);
			}
			return href	= '/';
		}else{
			alert('Veuillez sélectionner une activité');
			return href = '/activities';
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
		{#each activitiesLoose as spoon}
			<button class={spoon.selected ? activityStyle + ' bg-gradient-to-b from-darkBlue to-lightBlue' : activityStyle + ' border-2 border-darkBlue'} on:click={() => onSelectSpoon(spoon)}>
				<p>{spoon.name}</p>
				<div class="flex flex-row gap-2">
					{#each Array(spoon.spoon_number) as spoonNumber}
						<img src={spoon.icon} alt="spoon" class="w-10 h-10" />
					{/each}
				</div>
			</button>
		{/each}
	</div>
	<Button
		title="Valider"
		onPress={() => onValidate(spoonSelected)}
		{href}
	/>
<!--	<button on:click={() => onPressSpoon(spoonSelected)} class="border-lightBlue border-2 p-2 mt-10 mx-auto w-full">-->
<!--		<a href="/">Valider</a>-->
<!--	</button>-->
</div>
