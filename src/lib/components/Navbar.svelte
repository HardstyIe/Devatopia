<script lang="ts">
	import { myData } from '$lib/store';
	console.log($myData.fr.appbar.assets);
</script>

<div class="relative flex justify-between w-full h-56 item-center">
	<div class="w-1/4 p-4 ml-5">
		<img src={$myData.fr.appbar.assets.logo} alt="" class="h-full" />
	</div>

	<div class="relative flex items-center justify-around w-2/3 h-full overflow-hidden">
		<div
			class="absolute inset-0 z-0"
			style="background-image: url({$myData.fr.appbar.assets
				.background}); background-size: 110%; background-position: center;"
		/>
		<ul class="z-10 flex items-center justify-end w-2/3 h-full gap-20 text-white">
			{#each $myData.fr.appbar.text as text}
				<a href={`#${text.toLowerCase()}`} class="text-lg">
					<li>{text}</li>
				</a>
			{/each}
		</ul>
	</div>
</div>
