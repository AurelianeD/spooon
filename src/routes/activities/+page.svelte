<script lang="ts">
	import {spoonNumberSelected} from '../../stores';
	import activities from '$lib/activities';

	let newActivities = activities;

	let activityFiltered = activities.filter(activity => activity.spoon_number === 2);
	console.log(activityFiltered);
</script>

<div>
	<h1>Activité</h1>
	{$spoonNumberSelected}
	{#each activityFiltered as activity}
		<p>{activity.name}</p>
	{/each}
</div>
