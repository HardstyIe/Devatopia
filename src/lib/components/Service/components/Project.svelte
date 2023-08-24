<script lang="ts">
	import { myData } from '$lib/store';
	const highlightRegex = /\*(\w+)/g; // Expression régulière pour détecter les mots commençant par "*"
	function convertColor(color) {
		const rgb = color.substring(4);
		return '#' + rgb;
	}
</script>

<main>
	<article>
		<h2 class="text-2xl font-bold text-black">
			{#each $myData?.fr?.carrousel?.[1]?.title.split(highlightRegex) as part, i}
				{#if i % 2 === 0}
					{part}
				{:else}
					<span class="text-devatopia-green">{part}</span>
				{/if}
			{/each}
		</h2>
	</article>
	<article class="mt-24">
		<div class="grid grid-cols-2 gap-14">
			<!-- Première ligne -->
			<div class="flex items-center justify-center">
				<img
					src={$myData.fr.carrousel[1].assets[0]}
					alt=""
					class="shadow-md"
					width="700"
					height="500"
				/>
			</div>
			{#if $myData.fr.carrousel[1].assets.length > 1}
				<div class="flex items-center justify-center">
					<img
						src={$myData.fr.carrousel[1].assets[1]}
						alt=""
						class="shadow-md"
						width="350"
						height="300"
					/>
				</div>
			{/if}
			<!-- Deuxième ligne -->
			{#each $myData.fr.carrousel[1].assets.slice(2) as asset, i}
				<div class="flex items-center justify-center">
					<img src={asset} alt="" class="shadow-md" width="350" height="300" />
				</div>
			{/each}
		</div>
	</article>
</main>

<style>
</style>
