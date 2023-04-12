<script lang="ts">
	import spoonNumber from '../../stores';
	import iconSpoon from '$lib/assets/spoon.png'
	import Button from "../../components/Button.svelte";
	let spoons = [
		{
			number: 1,
			text: 'Peu reposante'
		},
		{
			number: 2,
			text: 'Reposante'
		},
		{
			number: 3,
			text: 'Très reposantee'
		},
		{
			number: 4,
			text: 'Requinquante'
		}
	];
	let spoonSelected: number;
	let activityStyle = "rounded-md p-5 flex flex-row justify-between";
	let href: string;

	function onSelectSpoon(spoon: number){
		spoonSelected = spoon;
	}

	function onValidate(spoon: number){
		if(spoon){
			if($spoonNumber + spoon > 12){
				console.log('is	positive');
				spoonNumber.update(n => 12);
			}else{
				spoonNumber.update(n => n + spoon);
			}
			return href	= '/';
		}else{
			alert('Veuillez sélectionner une activité');
			return href = '/activities';
		}
	}

</script>

<div>
	<h1 class="text-2xl font-semibold">J'ai effectué une activité...</h1>
	<div class="flex flex-col gap-6">
		{#each spoons as spoon}
			<button class={spoonSelected === spoon.number ? activityStyle + ' bg-gradient-to-b from-darkBlue to-lightBlue' : activityStyle + ' border-2 border-lightBlue'} on:click={() => onSelectSpoon(spoon.number)}>
				{spoon.text}
				<div class="flex flex-row">
					{#each Array(spoon.number) as spoonNumber}
						<img src={iconSpoon} alt="spoon" class="w-10 h-10" />
					{/each}
				</div>
			</button>
		{/each}
	</div>
	<Button
		title="Valider"
		onPress={() => onValidate(spoonSelected)}
		{href}
	/>
	<!-- <button on:click={() => onPressSpoon(spoonSelected)} class="border-lightBlue border-2 p-2 mt-10 mx-auto w-full">
		<a href="/">Valider</a>
	</button> -->
</div>
