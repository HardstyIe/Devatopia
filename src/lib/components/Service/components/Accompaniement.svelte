<script lang="ts">
	import { myData } from '$lib/store';
	const highlightRegex = /\*(\w+)/g; // Expression régulière pour détecter les mots commençant par "*"
	function convertColor(color) {
		const rgb = color.substring(4);
		return '#' + rgb;
	}
</script>

<main id="services">
	<article>
		<h2 class="text-2xl font-bold text-black">
			{#each $myData?.fr?.carrousel?.[0]?.title.split(highlightRegex) as part, i}
				{#if i % 2 === 0}
					{part}
				{:else}
					<span class="text-devatopia-green">{part}</span>
				{/if}
			{/each}
		</h2>
	</article>
	<article class="flex justify-center mt-24 gap-14">
		<div class="grid w-4/5 grid-cols-1 md:grid-cols-2">
			{#each $myData.fr.carrousel[0].cards as card}
				<div
					class="relative p-8 mx-auto mb-24 rounded-lg shadow-2xl w-60 h-80 sm:w-60 md:w-64 lg:w-72 bg-devatopia-green"
				>
					<div
						class="absolute flex items-center justify-center transform -translate-x-1/2 left-1/2 -top-16 bg-devatopia-footer"
						style="width: 128px; height: 128px;  border-radius: 50%;"
					>
						<img
							src={card.asset}
							alt={card.title}
							class="rounded-full shadow-md"
							width="110"
							loading="lazy"
							height="110"
						/>
					</div>
					<!-- Contenu de la carte -->
					<div class="mt-10">
						<h2 class="text-xl font-bold text-white md:text-lg">{card.title}</h2>
						<p class="mt-2 text-sm text-white md:text-base">{card.text}</p>
					</div>
				</div>
			{/each}
		</div>
	</article>
</main>

<style>
</style>
