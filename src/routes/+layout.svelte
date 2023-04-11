<script>
	import "../app.css";
	import logo from '$lib/assets/logo.png';
	import externalLink from '$lib/assets/external_link.svg';
	import favicon from '$lib/assets/favicon.png';
	import { page } from '$app/stores';

</script>
<!--//TODO: align bottom-->
<div class="flex flex-row p-5 justify-between items-center mb-10">
		<a href="/">
			<img src={logo} alt="logo" class="w-32"/>
		</a>
		<a href="https://www.spooon.org">
			<div class="flex flex-row gap-2 text-[18px] items-center">
				<p class="font-century text-xl text-center">Notre site</p>
				<img class="h-6" src={externalLink} alt="Logo redirection site">
			</div>
		</a>
</div>
<div class="px-5">
	<slot />
</div>

<style>

</style>
