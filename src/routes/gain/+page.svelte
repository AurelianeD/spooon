<script lang="ts">
	import spoonNumber from '../../stores';
	import iconSpoonOrange from '$lib/assets/spoonOrange.png';
	import iconSpoonWhite from '$lib/assets/spoonWhite.png';
	import Button from "../../components/Button.svelte";
	import {activitiesGain} from "$lib/types.ts";

	let activityStyle = "rounded-md p-2 flex flex-row justify-between items-center max-w-[400px] w-full mx-auto md:p-5";
	let spoonSelected: number;
	let href: string;

	function onSelectSpoon(spoon: number){
		spoonSelected = spoon;
	}

	function onValidate(spoon: number){
		if(spoon){
			if($spoonNumber + spoon > 12){
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

</script>

<div class="h-full flex flex-col">
	<h1 class="md:text-center">J'ai effectué une activité...</h1>
	<div class="flex flex-col gap-[5%] justify-center h-[80%]">
		{#each activitiesGain as spoon}
			<button class={spoonSelected === spoon.spoon_number? activityStyle + ' bg-gradient-to-b from-orange to-yellow' : activityStyle + ' border-2 border-orange'} on:click={() => onSelectSpoon(spoon.spoon_number)}>
				<p>{spoon.name}</p>
				<div class="flex flex-row gap-2">
					{#each Array(spoon.spoon_number) as spoonNumber}
						<img src={spoonSelected === spoon.spoon_number? iconSpoonWhite : iconSpoonOrange} alt="spoon" class="w-2 h-10" />
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
<!--	<button on:click={() => onPressSpoon(spoonSelected)} class="border-lightBlue border-2 p-2 mt-10 mx-auto w-full">-->
<!--		<a href="/">Valider</a>-->
<!--	</button>-->
</div>
