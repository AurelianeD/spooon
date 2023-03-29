<script lang="ts">
    export let activityName:string;
    export let getValue:()=>void;
</script>

<div>
    <input type="text" id="activity" bind:value={activityName}>
    <button on:click={() => getValue()}>Ajouter une activité</button>
</div>