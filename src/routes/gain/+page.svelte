<script lang="ts">
	import spoonNumber from '../../stores';
	import iconSpoon from '$lib/assets/spoon.png';
	import iconSpoonWhite from '$lib/assets/spoonWhite.png';
	import Button from "../../components/Button.svelte";
	import BorderGradient from "../../components/BorderGradient.svelte";
	import {activitiesGain} from "$lib/types.ts";
	import lightningPositive from "$lib/assets/lightningPositive.png";

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
	<h1 class="text-center">Ajout d'énergie</h1>
	<div class="flex flex-col gap-[5%] justify-center h-[80%]">
		<p class="md:text-center">J'ai effectué une activité...</p>
		{#each activitiesGain as spoon}
			{#if $spoonNumber + spoon.spoon_number > 12}
				<div class={activityStyle + " bg-gray border-2 border-gray2"}>
					<p class="text-gray700">{spoon.name}</p>
					<div class="flex flex-row gap-2">
						{#each Array(spoon.spoon_number) as spoonNumber}
							<img src={iconSpoonWhite} alt="spoon" class="w-2 h-10" />
						{/each}
					</div>
				</div>
			{:else}
				<BorderGradient firstColor="darkBlue" secondColor="lightBlue">
					<button
							class={spoonSelected === spoon.spoon_number? activityStyle + ' bg-gradient-to-b from-darkBlue to-lightBlue' : activityStyle}
							on:click={() => onSelectSpoon(spoon.spoon_number)}
					>
						<p class:text-white={spoonSelected === spoon.spoon_number}>{spoon.name}</p>
						<div class="flex flex-row gap-2">
							{#each Array(spoon.spoon_number) as spoonNumber}
								<img src={spoonSelected === spoon.spoon_number? iconSpoonWhite : iconSpoon} alt="spoon" class="w-2 h-10" />
							{/each}
						</div>
					</button>
				</BorderGradient>
			{/if}
		{/each}
	</div>
	<Button
		firstColor="darkBlue"
		secondColor="lightBlue"
		source={lightningPositive}
		title="Valider"
		noHasIcon={true}
		onPress={() => onValidate(spoonSelected)}
		{href}
	/>
<!--	<button on:click={() => onPressSpoon(spoonSelected)} class="border-lightBlue border-2 p-2 mt-10 mx-auto w-full">-->
<!--		<a href="/">Valider</a>-->
<!--	</button>-->
</div>
