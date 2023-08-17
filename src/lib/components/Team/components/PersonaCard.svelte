<script lang="ts">
	export let person: {
		title: string;
		subtitle: string;
		text: string;
		asset: string;
	};
</script>

<div class="relative p-8 mx-auto mb-12 bg-white rounded-lg shadow-2xl">
	<!-- Image centrée qui déborde en haut -->
	<div class="flex flex-col justify-center mt-16 text-center card-shadow">
		<img
			src={person.asset}
			alt={person.title}
			class="absolute w-32 h-32 transform -translate-x-1/2 rounded-full shadow-md left-1/2 -top-16 card-img"
		/>

		<!-- Contenu de la carte -->
		<h2 class="text-2xl font-bold">{person.title}</h2>
		<p class="mt-2 text-xl text-gray-600">{person.subtitle}</p>
		<p class="mt-4 text-base text-gray-500">{person.text}</p>
	</div>
</div>

<style>
	.card-img {
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
	}
</style>
