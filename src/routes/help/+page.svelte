<script lang="ts">
	import externalLink from '$lib/assets/external_link.svg';
</script>

<svelte:head>
	<title>Spooon</title>
	<meta name="description" content="Spooon App" />
</svelte:head>


	<div class="flex flex-col h-full gap-6">
		<h2 class="pb-3 md:pb-10 mt-6">Mieux gérer votre fatigue</h2>
        <p>Spooon, c’est l’application qui vous permet de mieux gérer votre <span class="font-bold">réservoir d’énergie.</span></p>
        <p>Basée sur <a class="text-darkBlue underline" href="https://butyoudontlooksick.com/articles/written-by-christine/the-spoon-theory/">la théorie des cuillères de Christine Miserandino</a>, Spooon vous accompagne <span class="font-bold">tout au long de vos journées.</span></p>
        <p>Le principe est simple, à chaque activité effectuée dans votre journée, dites à Spooon <span class="font-bold">combien d’énergie</span> vous avez dépensé en sélectionnant 1, 2, 3, ou 4 cuillères. 1 cuillère correspond à une <span class="font-bold">unité d’énergie.</span></p>
        <div class="flex flex-col gap-1">
            <p>Savoir si nous sommes fatigués, c’est parfois difficile. Il existe plusieurs <span class="font-bold">signes de fatigue</span>, en voici quelques exemples :</p>
            <ul class="ml-6 list-disc">
                <li><p>Tu as les yeux qui piquent ?</p></li>
                <li><p>Tes jambes te paraissent lourdes ?</p></li>
                <li><p>Tu n’as pas d’appétit ?</p></li>
                <li><p>Tu souffres de maux de tête ?</p></li>
                <li><p>Tu t’endors contre ta volonté ?</p></li>
                <li><p>Tu te sens plus irritable ?</p></li>
            </ul>
        </div>
        <p>Suivez-donc au quotidien votre taux de fatigue, afin de pouvoir anticiper <span class="font-bold">l’organisation de vos activités quotidiennes.</span></p>
        <p class="cta text-center mt-10">Envie d’en savoir plus sur le sujet ?</p>
        <a href="https://www.spooon.org/" class="flex justify-center gap-3 items-center mb-10">
            <img src={externalLink} alt="Logo lien site Internet">
            <p class="cta text-darkBlue leading-none">Notre site internet</p>
        </a>
	</div>