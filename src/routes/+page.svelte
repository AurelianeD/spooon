<script lang="ts">
	import spoonNumber from '../stores.ts';

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<h1>Spoooooooone</h1>
	<p>Il me reste {$spoonNumber}</p>
	<a href="activities">J'ai dépensé de l'énergie</a>
</div>

<style>
</style>
