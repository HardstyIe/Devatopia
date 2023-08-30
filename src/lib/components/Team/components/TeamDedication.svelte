<script lang="ts">
	import { myData } from '$lib/store';
</script>

<section class="flex flex-col items-center gap-10 p-4 lg:flex-row sm:p-0">
	<article class="w-full md:w-3/5">
		<h2 class="text-2xl font-bold text-black lg:text-3xl">{$myData.fr.desk.title}</h2>
		<p class="mt-2 text-base text-black lg:text-lg">{$myData.fr.desk.subtitle}</p>
	</article>
	<article class="flex justify-center w-full m-auto mt-4 md:w-2/5 md:mt-0">
		<img
			src={$myData.fr.desk.assets.background}
			alt={$myData.fr.desk.title}
			class="max-w-md px-6 mx-auto scale-75 rounded-lg lg:scale-100"
			width="448"
			height="300"
		/>
	</article>
</section>
