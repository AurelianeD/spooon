<script lang="ts">
	import spoonNumber from '../../stores';
	import iconSpoon from '$lib/assets/spoon.png'
	import {activitiesGain} from "$lib/types.ts";
	import Button from "../../components/Button.svelte";

	let spoonSelected: number;
	let activityStyle = "rounded-md p-2 flex flex-row justify-between items-center";
	let href:	string;

	function onSelectSpoon(spoon: number){
		spoonSelected = spoon;
	}

	function onPressSpoon(spoon: number){
		if(spoon){
			if( $spoonNumber < 0){
				spoonNumber.update(n => 0);
			}else{
				spoonNumber.update(n => n + spoon);
			}
			return href = "/";
		}else{
			alert("Veuillez sélectionner une activité");
			return href = "/activities";
		}
	}


</script>

<div class="h-full flex flex-col">
	<h1>J'ai effectué une activité...</h1>
	<div class="flex flex-col gap-[5%] justify-center h-[80%]">
		{#each activitiesGain as spoon}
			<button
					class={spoonSelected === spoon.spoon_number ? activityStyle + ' bg-gradient-to-b from-darkBlue to-lightBlue' : activityStyle + ' border-2 border-lightBlue'}
					on:click={() => onSelectSpoon(spoon.spoon_number)}
			>
				{spoon.name}
				<div class="flex flex-row gap-2">
					{#each Array(spoon.spoon_number) as spoonNumber}
						<img src={iconSpoon} alt="spoon" class="w-2 h-10" />
					{/each}
				</div>
			</button>
		{/each}
	</div>
	<Button
			title="Valider"
			onPress={() => onPressSpoon(spoonSelected)}
			{href}
	/>
</div>
