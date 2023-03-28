<script lang="ts">
	import {spoonNumberSelected} from '../stores.ts';
	import spoonNumber from '../stores.ts';
	function onSelectSpoon(number){
		spoonNumberSelected.update(n => number);
	}
	function add(){
		spoonNumber.update(n => n + 1);
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<h1>Spoooooooone</h1>
	<button on:click={() => onSelectSpoon(1)}><a href="activities">1 cuillière</a></button>
	<button on:click={() => onSelectSpoon(2)}><a href="activities">2 cuillières</a></button>
	<button on:click={() => onSelectSpoon(3)}><a href="activities">3 cuillières</a></button>
	<button on:click={() => onSelectSpoon(4)}><a href="activities">4 cuillières</a></button>
	<button on:click={() => add()}>+1</button>
</div>

<style>
</style>
