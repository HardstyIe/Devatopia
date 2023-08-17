<script lang="ts">
	import { myData } from '$lib/store';
	console.log($myData);
</script>

<div class="relative flex justify-between w-full h-56 bg-transparent item-center">
	<div class="w-1/4 p-4 ml-5 bg-transparent">
		<img src={$myData.fr.appbar.assets.logo} alt="" class="h-full" />
	</div>

	<div
		class="relative z-10 flex items-center justify-center w-full h-56 bg-center bg-no-repeat bg-cover"
		style="background-image: url({$myData.fr.appbar.assets.background});"
	>
		<ul class="z-10 flex items-center justify-end w-2/3 h-full gap-20 text-white">
			{#each $myData.fr.appbar.text as text}
				<a href={`#${text.toLowerCase()}`} class="text-lg">
					<li>{text}</li>
				</a>
			{/each}
		</ul>
	</div>
</div>
