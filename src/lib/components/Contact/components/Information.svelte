<script lang="ts">
	import { myData } from '$lib/store';
	const highlightRegex = /\*([^\s]+)/g; // Expression régulière pour détecter les groupes de mots commençant par "*"
</script>

<main>
	<article>
		{#each $myData?.fr?.contact?.texts as contactText}
			<h2 class="text-2xl font-bold text-black">
				{#each contactText.split(highlightRegex) as part, i}
					{#if i % 2 === 0}
						{part}
					{:else}
						<span class="text-devatopia-green">{part}</span>
					{/if}
				{/each}
			</h2>
		{/each}
	</article>
</main>
