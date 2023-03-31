<script>
	import "../app.css";
	import logo from '$lib/assets/logo.png';
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
				<p class="font-century text-xl text-center">À propos</p>
				<div class="border-2 border-lightBlue rounded-full w-8 flex justify-center">
					<p class="text-lightBlue">?</p>
				</div>
			</div>
		</a>
</div>
<div class="px-5">
	<slot />
</div>

<style>

</style>
