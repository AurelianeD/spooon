<script>
	import "../app.css";
	import logo from '$lib/assets/logo.png';
	import externalLink from '$lib/assets/external_link.svg';
	import help from '$lib/assets/help.png';
	import favicon from '$lib/assets/favicon.png';
	import { page } from '$app/stores';

</script>

<main>
	<div class="flex flex-row p-5 gap-6 justify-between items-center mb-3">
			<a href="/" class="w-[40%] max-w-[200px]">
				<img src={logo} alt="logo spooon"/>
			</a>
			<a class="flex gap-2 items-center" href="/help">
					<p class="text-darkBlue">En savoir plus</p>
					<img class="h-6 md:h-10" src={help} alt="redirection site">
			</a>
	</div>
	<div class="px-5 flex-1">
		<slot />
	</div>
</main>

<style>
	main{
		height: 100vh;
		display: flex;
		flex-direction: column;
		padding-bottom: 20px;
	}
</style>
