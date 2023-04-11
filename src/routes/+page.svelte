<script lang="ts">
	import spoonNumber, {beginDay} from '../stores.ts';
	import {handleTextSpoon, handleImageSpoon} from '../helpers/helpers.ts';
	import Button from "../components/Button.svelte";
	import { browser } from "$app/environment";

	beginDay.subscribe(value => {
		if($beginDay === 'true' && browser){
			window.location.href	= "/startDay";
		}
	})


</script>

<svelte:head>
	<title>Spooon</title>
	<meta name="description" content="Spooon App" />
</svelte:head>

<div class=" flex flex-col justify-between ">
	<h1 class="text-3xl font-bold text-center">Mon niveau d'énergie aujourd'hui</h1>
	<div class="mx-auto flex items-center justify-center">
		<img id="spoon" src={handleImageSpoon($spoonNumber)} alt="roue de cuillière" class="w-96">
		<p class="text-4xl absolute">{$spoonNumber}</p>
	</div>
	<h1 class="text-2xl font-bold mx-auto flex items-center justify-center text-center">{handleTextSpoon($spoonNumber)}</h1>
	<Button
		title="J'ai dépensé de l'énergie"
		href="/activities"
	/>
	<button
	class="mx-auto flex items-center justify-center mt-10"
>
		<div class="h-10 rounded-md bg-gradient-to-b from-darkBlue to-lightBlue p-[2px]">
			<div class="flex items-center justify-center h-full w-full bg-white rounded px-6">
				<a href="gain">Je me suis ressourcé.e</a>
			</div>
		</div>
	</button>
	<!-- <div class="flex items-center justify-center mt-10">
		<label for="spoonNumber">Entrez un nombre :&nbsp</label>
		<input class="border-2" id="spoonNumber" type="number" bind:value={$spoonNumber} min="0" max="12">
	</div> -->
</div>
<div class="flex justify-center mt-4">
	<!-- <input class="border-darkBlue border-2" type="time" step="3600" bind:value /> -->
</div>

