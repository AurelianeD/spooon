<script>
	import "../app.css";
	import logo from '$lib/assets/logo.png';
	import externalLink from '$lib/assets/external_link.svg';
	import help from '$lib/assets/help.png';
	import favicon from '$lib/assets/favicon.png';
	import { page } from '$app/stores';

</script>

<main>
	<div class="flex flex-row p-5 justify-between items-center mb-3">
			<a href="/">
				<img src={logo} alt="logo" class="w-32"/>
			</a>
			<div class="flex flex-row gap-6">
				<a href="https://www.spooon.org">
						<img class="h-6" src={externalLink} alt="Logo redirection site">
				</a>
				<a href="/help">
					<img src={help} alt="aide" class="h-6" />
				</a>
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
