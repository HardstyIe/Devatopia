<script lang="ts">
	import { myData } from '$lib/store';
</script>

<div class="flex flex-col items-center p-8 space-y-6">
	<h1 class="text-4xl font-bold text-gray-800">{$myData.fr.card.title}</h1>
	<p class="text-xl text-gray-600">{$myData.fr.card.subTitle}</p>
	<a
		href="#contact"
		class="px-6 py-3 font-semibold text-white transition duration-300 rounded-lg shadow-lg bg-devatopia-green hover:bg-devatopia-green"
	>
		{$myData.fr.card.buttonText}
	</a>
</div>
