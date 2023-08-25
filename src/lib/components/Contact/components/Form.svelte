<script lang="ts">
	import PrivacyPolicy from '../../PrivacyPolicy.svelte';
	// Importez le composant PrivacyPolicy

	let formData = {
		name: '',
		surname: '',
		email: '',
		telephone: '',
		society: '',
		message: '',
		subjet: '',
		acceptPolicy: false
	};

	let isPrivacyModalOpen = false; // Variable pour gérer l'état d'ouverture de la modal
	async function handleSubmit() {
		if (formData.acceptPolicy) {
			try {
				const response = await fetch('/api', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
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
		console.log('Sending:', formData);
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
		<div class="flex flex-wrap items-center justify-between pb-6 -mx-3 md:pb-2">
			<div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
				<label
					class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
					for="name"
				>
					Nom
				</label>
				<input
					class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
					id="name"
					type="text"
					placeholder="Nom"
					bind:value={formData.name}
				/>
			</div>

			<div class="w-full px-3 md:w-1/2">
				<label
					class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
					for="surname"
				>
					Prénom
				</label>
				<input
					class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
					id="surname"
					type="text"
					placeholder="Prénom"
					bind:value={formData.surname}
				/>
			</div>

			<div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
				<label
					class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
					for="email"
				>
					Email
				</label>
				<input
					class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
					id="email"
					type="email"
					placeholder="Email"
					bind:value={formData.email}
				/>
			</div>

			<div class="w-full px-3 md:w-1/2">
				<label
					class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
					for="telephone"
				>
					Téléphone
				</label>
				<input
					class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
					id="telephone"
					type="tel"
					placeholder="Téléphone"
					bind:value={formData.telephone}
				/>
			</div>

			<div class="w-full px-3 mb-6 md:w-full">
				<label
					class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
					for="society"
				>
					Société
				</label>
				<input
					class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
					id="society"
					type="text"
					placeholder="Société"
					bind:value={formData.society}
				/>
			</div>

			<div class="w-full px-3 mb-6 md:w-full">
				<label
					class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
					for="subject"
				>
					Sujet
				</label>
				<input
					class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
					id="sujet"
					type="text"
					placeholder="Sujet"
					bind:value={formData.subjet}
				/>
			</div>

			<div class="w-full px-3 mb-6 md:w-full">
				<label
					class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
					for="message"
				>
					Message
				</label>
				<textarea
					class="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
					id="message"
					placeholder="Message"
					bind:value={formData.message}
				/>

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
			</div>
		</div>
	</form>

	<PrivacyPolicy
		bind:isOpen={isPrivacyModalOpen}
		title="Politique de confidentialité"
		content="Contenu de la politique de confidentialité ici"
		on:close={handleCloseModal}
	/>
</main>
