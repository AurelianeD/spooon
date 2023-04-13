<script lang="ts">
	import spoonNumber from "../stores";
	import { handleImageSpoon } from "../helpers/helpers";
</script>

<div class="mx-auto flex items-center justify-center">
	<img
			id="spoon"
			src={handleImageSpoon($spoonNumber)}
			alt="roue de cuillière"
			class="min-w-[50px] w-[60%]"
	>
	<p class="absolute md:text-2xl">{$spoonNumber}</p>
</div>
