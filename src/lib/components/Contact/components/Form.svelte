<script lang="ts">
	import { enhance } from '$app/forms';
	import { Toaster, toast } from 'svelte-sonner';
	import PrivacyPolicy from '../../PrivacyPolicy.svelte';

	let isPrivacyModalOpen = false;

	function openPrivacyModal() {
		isPrivacyModalOpen = true;
	}

	function handleCloseModal() {
		isPrivacyModalOpen = false;
	}
</script>

<Toaster expand={true} position="top-right" richColors />

<main class="w-full lg:w-1/3">
	<form
		class="w-full max-w-lg mx-auto mt-10 space-y-6"
		method="post"
		use:enhance={() => {
			// Est exécuté avant l'envoie du formulaire, c'est ici qu'il faut faire les verifs

			return async ({ result, update }) => {
				// Est exécuté après la réponse du serveur

				if (result.type === 'success') {
					toast.success('Email envoyé avec succès.');

					// Gère le succès ici
				} else {
					if (result.status === 400) toast.error(result.data.error);
					if (result.status === 500) toast.error("Erreur interne lors de l'envoi de l'email.");
					// Gère l'erreur ici
				}
			};
		}}
	>
		<div class="flex flex-wrap items-center justify-between pb-6 -mx-3 gap-y-4 md:pb-2">
			<!-- Champs de formulaire ici -->
			<div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
				<label class="block mb-2 text-xs font-semibold text-gray-700 uppercase" for="name">
					Nom
				</label>
				<input
					class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-white border border-gray-200 rounded focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
					id="name"
					name="name"
					type="text"
					placeholder="Nom"
					required
					autocomplete="family-name"
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
					class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-white border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
					id="surname"
					name="surname"
					type="text"
					placeholder="Prénom"
					required
					autocomplete="given-name"
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
					class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-white border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
					id="email"
					name="email"
					type="email"
					placeholder="Email"
					required
					autocomplete="email"
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
					class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-white border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
					id="telephone"
					name="telephone"
					type="tel"
					placeholder="Téléphone"
					autocapitalize="tel"
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
					class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-white border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
					id="society"
					name="society"
					type="text"
					placeholder="Société"
					autocomplete="organization"
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
					class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-white border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
					id="subject"
					name="subject"
					type="text"
					placeholder="Sujet"
					required
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
					class="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-white border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
					id="message"
					name="message"
					placeholder="Message"
					required
				/>

				<div class="mb-4">
					<input
						type="checkbox"
						name="acceptPolicy"
						aria-label="Accept Policy"
						id="acceptPolicy"
						checked={false}
					/>
					<label for="acceptPolicy" class="ml-2 text-sm text-gray-600" />
					J'accepte les
					<a href="#PrivacyPolicy" class="underline cursor-pointer" on:click={openPrivacyModal}>
						politiques de confidentialité
					</a>
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
