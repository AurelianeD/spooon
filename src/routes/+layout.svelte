<script>
	import "../app.css";
	import logo from '$lib/assets/logo.png';

</script>
<!--//TODO: align bottom-->
<div class="flex flex-row p-5 justify-between items-center">
	<a href="/">
		<img src={logo} alt="logo" class="w-32" />
	</a>
	<a href="help">
		<div class="flex flex-row gap-4 text-[22px] items-center">
<!--			TODO: Ajouter l'icone ? et enlever le soulignement-->
			<p class="font-century">À propos</p>
			<div class="border-2 border-lightBlue rounded-full px-2">
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
