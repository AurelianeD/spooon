<script lang="ts">
	import spoonNumber from "../stores";
	import { handleImageSpoon } from "../helpers/helpers";
</script>

<div class="mx-auto flex items-center justify-center">
	<img
			id="spoon"
			src={handleImageSpoon($spoonNumber)}
			alt="roue de cuillière"
			class="max-w-[70%] w-96 md:w-[550px]"
	>
	<p class="absolute md:text-2xl">{$spoonNumber}</p>
</div>
