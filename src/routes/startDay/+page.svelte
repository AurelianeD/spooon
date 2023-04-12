<script lang="ts">
	import Button from "../../components/Button.svelte";
	import spoonNumber, {beginDay} from '../../stores.ts';
	import {handleStartDayText} from "../../helpers/helpers";

	let src = '$lib/assets/logo.png';
	let energies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	let energySelected = 12;

	let energiesContainerStyle = "rounded-md flex flex-row border-2 border-lightBlue bg-gray gap-6 overflow-x-scroll px-32 py-3 no-scrollbar";
	let energySelectedStyle = "border border-darkBlue rounded-full px-4 py-2";

	function onSelectEnergy(energy: number) {
		energySelected = energy;
	}

	function onBeginDay() {
		spoonNumber.set(energySelected);
		beginDay.set('false');
	}


</script>

<div class="h-full">
	<h1 class="text-center">Comment vous sentez-vous aujourd'hui ?</h1>
	<div class="h-[80%] flex flex-col justify-center">
		<h2 class="pb-10">Votre quantité d'energie sur une échelle de 12</h2>
		<h2 class="text-darkBlue text-center pb-3">{handleStartDayText(energySelected)}</h2>
		<div class={energiesContainerStyle}>
			{#each energies as energy}
					<div class={energy === energySelected ? energySelectedStyle : "p-2"}>
						<button on:click={() => onSelectEnergy(energy)} class="text-darkBlue text-xl">
							{energy}
						</button>
					</div>
			{/each}
		</div>
	</div>
	<Button title="Démarrer la journée" onPress={() => {onBeginDay()}} href="/"/>
</div>

<style>
    /* Hide scrollbar for Chrome, Safari and Opera */
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .no-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
</style>
