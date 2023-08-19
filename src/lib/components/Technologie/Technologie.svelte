<script lang="ts">
	import { myData } from '$lib/store';
	console.log($myData);
</script>

<main class="flex justify-center w-full mt-20 lg:justify-between" id="technologies">
	<article class="hidden w-1/3 lg:flex">
		<img
			src={$myData.fr.techno.assets.background}
			alt="Image Developpement Mobile"
			class="responsive-image"
			width="300"
			height="300"
		/>
	</article>
	<article class="flex flex-col justify-center w-2/3 gap-3">
		<h2 class="text-2xl font-bold text-black lg:text-3xl">{$myData.fr.techno.title}</h2>
		<p class="mt-2 text-base text-black lg:text-lg">{$myData.fr.techno.subtitle}</p>
		{#each $myData.fr.techno.infos as info}
			<p class="mt-2 text-base text-black lg:text-lg">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="inline-block mr-2"
				>
					<path d="M9 20L4 15L5.41 13.59L9 17.17L18.59 7.58L20 9L9 20Z" fill="#4CAF50" />
				</svg>
				{info}
			</p>
		{/each}
		<div class="flex gap-6 mt-4">
			{#each $myData.fr.techno.assets.urls_logo as url_logo, i}
				<a
					href={url_logo}
					class="flex justify-center w-20 h-20 p-2 transition-shadow duration-300 rounded shadow-lg hover:shadow-xl bg-slate-100"
				>
					<img
						src={$myData.fr.techno.assets.logos[i]}
						alt="Image Developpement Mobile"
						width="50"
						height="50"
					/>
				</a>
			{/each}
		</div>
	</article>
</main>

<style>
	@media (min-width: 1024px) and (max-width: 1100px) {
		.responsive-image {
			width: 80%; /* Ajustez selon vos besoins */
			height: auto;
		}
	}
	@media (max-width: 628px) {
		.responsive-image {
			width: 90%;
			height: auto;
		}
	}
</style>
