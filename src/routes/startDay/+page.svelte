<script lang="ts">
	import Button from "../../components/Button.svelte";
	import spoonNumber from '../../stores.ts';
	import {handleStartDayText} from "../../helpers/helpers";

	let src = '$lib/assets/logo.png';
	let energies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	let energySelected = 1;

	let energiesContainerStyle = "rounded-md flex flex-row border-2 border-lightBlue bg-gray gap-6 overflow-x-scroll px-32 py-5 no-scrollbar";
	let energySelectedStyle = "border border-darkBlue rounded-full px-4 py-2";

	function onSelectEnergy(energy: number) {
		energySelected = energy;
	}

	function onBeginDay() {
		spoonNumber.set(energySelected);
	}


</script>

<div class="h-full flex flex-col">
	<h1 class="text-center pb-10">Comment vous sentez-vous aujourd'hui ?</h1>
	<div class="flex flex-col justify-center h-[80%] w-full max-w-[500px] mx-auto">
		<h2 class="pb-5 md:pb-20">Votre quantité d'energie sur une échelle de 12</h2>
		<p class="text-darkBlue pb-5 text-center">{handleStartDayText(energySelected)}</p>
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
	<div class="flex flex-col mx-auto w-full">
		<Button
				title="Démarrer la journée"
				onPress={() => {onBeginDay()}}
				href="/"
				firstColor="darkBlue"
				secondColor="lightBlue"
		/>
	</div>
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
