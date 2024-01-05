<script lang="ts">
	import { myData } from '$lib/store';
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	const dispatch = createEventDispatcher();

	export let isOpen = false;
	let modalElement: HTMLElement;

	function closeModal() {
		dispatch('close');
	}

	onMount(() => {
		// Ajout d'un écouteur d'événements au démarrage du composant
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isOpen) {
				if (e.key === 'Enter' || e.key === 'Escape') {
					closeModal();
				}
			}
		};
		window.addEventListener('keydown', handleKeyDown);

		// Suppression de l'écouteur d'événements lors de la destruction du composant
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	});

	$: if (isOpen && modalElement) {
		modalElement.focus();
	}
</script>

{#if isOpen}
	<div
		bind:this={modalElement}
		tabindex="-1"
		transition:fade={{ duration: 100 }}
		class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
		on:click={closeModal}
		role="button"
		aria-label="Fermer la modale"
	>
		<div
			class="relative flex flex-col items-center justify-between w-4/5 bg-white shadow-lg h-5/6 md:w-3/5 lg:w-2/5 rounded-xl"
			on:click|stopPropagation={() => {}}
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
			aria-describedby="modal-description"
		>
			<div class="flex-1 w-full p-6 overflow-y-auto modal-content-scrollable">
				{#each $myData.fr.footer.mentions as mention}
					<h3 class="mt-4 mb-4 text-xl font-bold">{mention.title}</h3>
					{#if mention.revisionDate}
						<p class="mt-4 mb-4 text-xl font-bold">{mention.revisionDate}</p>
					{/if}
					{#if mention.identification}
						<p class="mt-4 mb-4 text-xl font-bold">{mention.identification}</p>
					{/if}
					{#if mention.sections}
						{#each mention.sections as section}
							<h4 class="mt-4 mb-4 text-xl font-bold">{section.title}</h4>
							{#each section.details as detail}
								<p class="text-sm">{detail}</p>
							{/each}
						{/each}
					{/if}
					{#if mention.photoCredits}
						<p class="mt-4 mb-4 text-sm leading-relaxed">{mention.photoCredits}</p>
					{/if}
					{#if mention.copyright}
						<p class="mt-4 mb-4 text-sm leading-relaxed">{mention.copyright}</p>
					{/if}
				{/each}
			</div>
			<button
				class="self-center px-6 py-2 my-4 text-white rounded-md bg-devatopia-footer hover:bg-devatopia-footer"
				on:click={closeModal}
				aria-label="fermer la modale"
			>
				Je comprends
			</button>
		</div>
	</div>
{/if}

<style>
	.modal-content-scrollable::-webkit-scrollbar {
		width: 10px; /* Largeur de la barre de défilement */
	}

	.modal-content-scrollable::-webkit-scrollbar-track {
		background: #f1f1f1; /* Couleur de fond de la piste */
	}

	.modal-content-scrollable::-webkit-scrollbar-thumb {
		background: #888; /* Couleur de la poignée de défilement */
		border-radius: 4px; /* Arrondit les bords de la poignée */
	}

	.modal-content-scrollable::-webkit-scrollbar-thumb:hover {
		background: #555; /* Couleur de la poignée de défilement au survol */
	}
</style>
