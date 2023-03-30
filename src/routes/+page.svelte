<script lang="ts">
	import spoonNumber from '../stores.ts';
	import {handleTextSpoon} from '../helpers/helpers.ts';

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class=" flex flex-col justify-between">
	<h1 class="text-3xl font-bold text-center">Mon niveau d'énergie aujourd'hui</h1>
	<div class="mx-auto flex items-center justify-center">
		<img src="src/lib/assets/cuilleres.png" alt="">
		<p class="text-4xl absolute">{$spoonNumber}</p>
	</div>
	<h1 class="text-2xl font-bold mx-auto flex items-center justify-center text-center">{handleTextSpoon($spoonNumber)}</h1>
	<button class="mx-auto flex items-center justify-center">
		<div class="h-12 w-80 rounded-md bg-gradient-to-b from-darkBlue to-lightBlue p-[2px]">
			<div class="flex items-center justify-center h-full w-full bg-white rounded">
				<a href="activities">J'ai dépensé de l'énergie</a>
			</div>
		</div>
	</button>
</div>

