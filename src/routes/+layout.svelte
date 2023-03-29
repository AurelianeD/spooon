<script>
	import "../app.css";
</script>

<div class="flex flex-row p-5 justify-between">
	<a href="/">
		<img src="src/lib/assets/logo.png" alt="logo" class="w-32" />
	</a>
	<a href="help">
		<div>
			<p class="underline">A propos</p>
		</div>
	</a>
</div>
<div class="px-5">
	<slot />
</div>

<style>

</style>
