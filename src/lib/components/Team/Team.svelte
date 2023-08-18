<script lang="ts">
	import { myData } from '$lib/store';
	import PersonaCard from './components/PersonaCard.svelte';
	import TextDesc from './components/TextDesc.svelte';
</script>

<main class="flex flex-col justify-between w-full gap-8 xl:flex-row">
	<!-- Pour les écrans larges -->
	<div class="hidden w-full gap-8 xl:flex xl:flex-row">
		<PersonaCard person={$myData.fr.card.personna[0]} />
		<TextDesc />
		<PersonaCard person={$myData.fr.card.personna[1]} />
	</div>

	<!-- Pour les écrans plus petits -->
	<div class="flex flex-col w-full gap-8 xl:hidden">
		<TextDesc />
		<h2 class="mt-10 mb-4 ml-4 text-2xl font-bold text-black">Notre Équipe</h2>
		<div class="flex flex-col justify-between w-full gap-8 mt-8 sm:flex-row">
			<div class="flex flex-col flex-grow">
				<div class="flex-grow">
					<PersonaCard person={$myData.fr.card.personna[0]} />
				</div>
			</div>
			<div class="flex flex-col flex-grow">
				<div class="flex-grow">
					<PersonaCard person={$myData.fr.card.personna[1]} />
				</div>
			</div>
		</div>
	</div>
</main>
