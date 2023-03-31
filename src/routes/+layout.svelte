<script>
	import "../app.css";
	import logo from '$lib/assets/logo.png';
	import favicon from '$lib/assets/favicon.png';
	import { page } from '$app/stores';

</script>
<!--//TODO: align bottom-->
<div class="flex flex-row p-5 justify-between items-center mb-10">
	{#if $page.url.pathname !== '/'}
		<a href="/" class="flex flex-row items-center gap-2">
			<img src={favicon} alt="logo" class="w-8"/>
			<p class="underline text-2xl">Retour</p>
		</a>
		{:else}
		<a href="/">
			<img src={logo} alt="logo" class="w-32"/>
		</a>
	{/if}
	{#if $page.url.pathname !== '/help'}
		<a href="help">
			<div class="flex flex-row gap-2 text-[18px] items-center">
				<p class="font-century text-xl text-center">À propos</p>
				<div class="border-2 border-lightBlue rounded-full w-8 flex justify-center">
					<p class="text-lightBlue">?</p>
				</div>
			</div>
		</a>
	{/if}
</div>
<div class="px-5">
	<slot />
</div>

<style>

</style>
