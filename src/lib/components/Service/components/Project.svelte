<script lang="ts">
	import { myData } from '$lib/store';
	function convertColor(color) {
		const rgb = color.substring(4);
		return '#' + rgb;
	}
</script>

<main>
	<article>
		<h2 class="text-2xl font-bold text-black">{$myData.fr.carrousel[0].title}</h2>
	</article>
	<article class="flex justify-center mt-24 gap-14">
		{#each $myData.fr.carrousel[1].assets as asset}
			<div class="flex items-center justify-center bg">
				<img src={asset} alt="" class="shadow-md bg" width="110" height="110" />
			</div>
		{/each}
	</article>
</main>

<style>
</style>
