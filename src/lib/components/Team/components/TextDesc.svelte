<script lang="ts">
	import { myData } from '$lib/store';
</script>

<section class="flex flex-col items-center p-8 space-y-6 text-center xl:w-2/5 xl:text-left">
	<h1 class="text-2xl font-bold text-black">{$myData.fr.card.title}</h1>
	<p class="text-lg text-gray-600 xl:text-base">{$myData.fr.card.subTitle}</p>
	<a
		href="#contact"
		class="px-6 py-3 font-semibold text-white transition duration-300 rounded-lg shadow-lg bg-devatopia-footer hover:bg-devatopia-footer"
	>
		{$myData.fr.card.buttonText}
	</a>
</section>
