<script lang="ts">
	import { myData } from '$lib/store';
	import { onMount } from 'svelte';

	let menuOpen = false;

	onMount(() => {
		const closeMenu = (e) => {
			if (!e.target.closest('.sidebar') && menuOpen) {
				menuOpen = false;
			}
		};
		document.addEventListener('click', closeMenu);
		return () => document.removeEventListener('click', closeMenu); // Nettoyage lors de la destruction du composant
	});

	function toggleMenu() {
		menuOpen = !menuOpen;
		menuOpen = menuOpen; // Forcer la mise à jour de la réactivité
	}
</script>

<nav class="relative flex items-center justify-between w-full h-56 bg-transparent">
	<div class="w-64 p-4 ml-5 bg-transparent">
		<img src={$myData.fr.appbar.assets.logo} alt="" width="290" height="85" />
	</div>

	<!-- Navigation pour grands écrans -->
	<div
		class="relative z-10 items-center justify-center hidden w-2/3 h-56 bg-center bg-no-repeat bg-cover lg:flex"
		style="background-image: url({$myData.fr.appbar.assets.background});"
	>
		<ul class="z-10 flex items-center gap-20 text-white">
			{#each $myData.fr.appbar.text as text}
				<li>
					<a href={`#${text.toLowerCase()}`} class="text-lg">{text}</a>
				</li>
			{/each}
		</ul>
	</div>

	<!-- Bouton du menu burger (visible uniquement sur les petits écrans) -->
	<button
		aria-label="Toggle navigation"
		class="p-2 mr-7 lg:hidden"
		on:click|stopPropagation={toggleMenu}
	>
		<span aria-hidden="true">
			<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
				<rect x="5" y="10" width="40" height="6" rx="3" ry="3" />
				<rect x="5" y="22" width="40" height="6" rx="3" ry="3" />
				<rect x="5" y="34" width="40" height="6" rx="3" ry="3" />
			</svg>
		</span>
	</button>
</nav>

<nav class="relative h-full lg:hidden">
	<!-- Overlay (Assombrissement de l'arrière-plan) -->
	{#if menuOpen}
		<div class="fixed inset-0 z-40 bg-black opacity-50" />
	{/if}

	<!-- Sidebar -->
	<div
		class="fixed top-0 right-0 z-50 w-64 h-full transition-transform duration-300 transform bg-devatopia-footer sidebar"
		style="transform: translateX({menuOpen ? '0%' : '100%'});"
	>
		<ul class="flex flex-col h-full py-4 pl-8 pr-4">
			{#each $myData.fr.appbar.text as text}
				<li>
					<a href={`#${text.toLowerCase()}`} class="block py-2 hover:bg-gray-200">{text}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
