<script lang="ts">
	export let person: {
		title: string;
		subtitle: string;
		text: string;
		asset: string;
	};
</script>

<main
	class="relative p-8 mx-auto mb-12 rounded-lg shadow-2xl w-60 h-80 sm:w-60 md:w-64 lg:w-72 bg-devatopia-footer"
>
	<!-- Image centrée qui déborde en haut -->
	<div class="flex flex-col justify-center mt-16 text-center card-shadow">
		<img
			src={person.asset}
			alt={person.title}
			class="absolute transform -translate-x-1/2 rounded-full shadow-md left-1/2 -top-16 card-img"
			width="128"
			height="128"
		/>

		<!-- Contenu de la carte -->
		<h2 class="text-xl font-bold text-white md:text-lg">{person.title}</h2>
		<p class="mt-2 text-sm text-white md:text-base">{person.subtitle}</p>
		<p class="mt-4 text-sm text-white md:text-sm">{person.text}</p>
	</div>
</main>

<style>
	.card-img {
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
	}
</style>
