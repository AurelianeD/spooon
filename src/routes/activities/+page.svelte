<script lang="ts">
	import spoonNumber from '../../stores';
	import iconSpoon from '$lib/assets/spoon.png';
	import iconSpoonWhite from '$lib/assets/spoonWhite.png';
	import Button from "../../components/Button.svelte";
	import {activitiesLoose} from "$lib/types.ts";

	let activityStyle = "rounded-md p-2 flex flex-row justify-between items-center max-w-[400px] w-full mx-auto md:p-5";
	let spoonSelected: number;
	let href: string;

	function onSelectSpoon(spoon: number){
		spoonSelected = spoon;
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

</script>

<div class="h-full flex flex-col">
	<h1 class="md:text-center">J'ai effectué une activité...</h1>
	<div class="flex flex-col gap-[5%] justify-center h-[80%]">
		{#each activitiesLoose as spoon}
			<button class={spoonSelected === spoon.spoon_number? activityStyle + ' bg-gradient-to-b from-darkBlue to-lightBlue' : activityStyle + ' border-2 border-darkBlue'} on:click={() => onSelectSpoon(spoon.spoon_number)}>
				<p>{spoon.name}</p>
				<div class="flex flex-row gap-2">
					{#each Array(spoon.spoon_number) as spoonNumber}
						<img src={spoonSelected === spoon.spoon_number? iconSpoonWhite : iconSpoon} alt="spoon" class="w-2 h-10" />
					{/each}
				</div>
			</button>
		{/each}
	</div>
	<Button
		firstColor="darkBlue"
		secondColor="lightBlue"
		title="Valider"
		onPress={() => onValidate(spoonSelected)}
		{href}
	/>
</div>
