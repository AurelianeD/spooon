<script lang="ts">
	import spoonNumber, {beginDay} from '../stores.ts';
	// import {hour} from '../stores.ts';
	// import {minute} from '../stores.ts';
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
		firstColor="darkBlue"
		secondColor="lightBlue"
		title="J'ai dépensé de l'énergie"
		href="/activities"
	/>
	<Button
		firstColor="orange"
		secondColor="yellow"
		title="J'ai récupéré de l'énergie"
		href="/gain"
	/>
	<!-- <label for="hour">Heure :</label>
    <input
      type="number"
      id="hour"
      min="0"
      max="23"
      bind:value={$hour}
    />
    <br />
    <label for="minute">Minute :</label>
    <input
      type="number"
      id="minute"
      min="0"
      max="59"
      bind:value={$minute}
    />
	<button class="mx-auto flex items-center justify-center mt-10 h-10 w-10 border-2" on:click={setUserMorningTime}></button> -->
</div>
<div class="flex justify-center mt-4">
</div>

