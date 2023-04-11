<script lang="ts">
	import Button from "../../components/Button.svelte";
	import spoonNumber, {beginDay} from '../../stores.ts';
	let src = '$lib/assets/logo.png';
	let energies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	let energySelected = 1;

	let energiesContainerStyle = "flex flex-row border-2 border-lightBlue gap-6 overflow-x-scroll px-32 py-5 no-scrollbar";
	let energySelectedStyle = "border-2 border-lightBlue rounded-full bg-gray p-2"

	function onSelectEnergy(energy: number) {
		energySelected = energy;
	}

	function onBeginDay() {
		spoonNumber.set(energySelected);
		beginDay.set('false');
	}
</script>

<div class="">
	<h1>Comment vous sentez-vous aujourd'hui ?</h1>
	<p>Votre quantité d'energie sur une échelle de 12</p>
	<div class={energiesContainerStyle}>
		{#each energies as energy}
			<button
					on:click={() => onSelectEnergy(energy)}
					class={energy === energySelected ? energySelectedStyle : "p-2"}
			>
				{energy}
			</button>
		{/each}
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
