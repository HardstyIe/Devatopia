<script lang="ts">
	import { myData } from '$lib/store';
	import PrivacyPolicy from '../../PrivacyPolicy.svelte';
	// Importez le composant PrivacyPolicy

	let formData = {
		nom: '',
		prenom: '',
		email: '',
		telephone: '',
		societe: '',
		sujet: '',
		message: '',
		acceptPolicy: false
	};

	let isPrivacyModalOpen = false; // Variable pour gérer l'état d'ouverture de la modal

	async function handleSubmit() {
		if (formData.acceptPolicy) {
			try {
				const response = await fetch('/api/contact', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(formData)
				});

				if (response.ok) {
					console.log('Email envoyé avec succès.');
					// Gère le succès ici
				} else {
					console.error("Erreur lors de l'envoi de l'email.");
					// Gère l'erreur ici
				}
			} catch (error) {
				console.error('Erreur:', error);
				// Gère l'erreur ici
			}
		} else {
			alert('Veuillez accepter les politiques de confidentialité.');
		}
	}

	function openPrivacyModal() {
		isPrivacyModalOpen = true;
	}

	function handleCloseModal() {
		isPrivacyModalOpen = false;
	}
</script>

<main>
	<form on:submit|preventDefault={handleSubmit} class="w-full max-w-lg mx-auto mt-10">
		{#each $myData.fr.contact.inputs as input, i}
			<div class="mb-6">
				<label for={input} class="block mb-2 text-sm font-bold text-gray-700">{input}</label>
				{#if input === 'Votre Email'}
					<input
						type="email"
						id={input}
						bind:value={formData[input]}
						class="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none"
						required
					/>
				{:else if input === 'Votre téléphone (Facultatif)'}
					<input
						type="tel"
						id={input}
						bind:value={formData[input]}
						class="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none"
					/>
				{:else}
					<input
						type="text"
						id={input}
						bind:value={formData[input]}
						class="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none"
						{...input !== 'Votre téléphone (Facultatif)' && input !== 'Votre société (Facultatif)'
							? { required: true }
							: {}}
					/>
				{/if}
			</div>
		{/each}

		<div class="mb-4">
			<input type="checkbox" id="acceptPolicy" bind:checked={formData.acceptPolicy} />
			<label for="acceptPolicy" class="ml-2 text-sm text-gray-600" />
			J'accepte les
			<span class="text-blue-500 underline cursor-pointer" on:click={openPrivacyModal}>
				politiques de confidentialité
			</span>
		</div>

		<button
			type="submit"
			class="px-4 py-2 text-white rounded"
			style="background-color:#3f3d56!important;">Envoyer</button
		>
	</form>

	<PrivacyPolicy
		bind:isOpen={isPrivacyModalOpen}
		title="Politique de confidentialité"
		content="Contenu de la politique de confidentialité ici"
		on:close={handleCloseModal}
	/>
</main>
