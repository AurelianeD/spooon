<script>
	import "../app.css";
	import logo from '$lib/assets/logo.png';
	import externalLink from '$lib/assets/external_link.svg';
	import help from '$lib/assets/help.png';
	import favicon from '$lib/assets/favicon.png';
	import { page } from '$app/stores';

</script>

<main>
	<div class="flex flex-row p-5 justify-between items-center mb-3 md:mb-10">
			<a href="/" class="w-[50%] max-w-[200px]">
				<img src={logo} alt="logo spooon"/>
			</a>
			<div class="flex flex-row gap-6">
				<a href="https://www.spooon.org">
						<img class="h-6 md:h-10" src={externalLink} alt="redirection site">
				</a>
				<img src={help} alt="aide" class="h-6 md:h-10" />
			</div>
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
