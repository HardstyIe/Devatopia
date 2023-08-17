<script lang="ts">
	import { myData } from '$lib/store';
	import PersonaCard from './components/PersonaCard.svelte';
	import TextDesc from './components/TextDesc.svelte';
</script>

<div class="flex justify-between w-full gap-8">
	<PersonaCard person={$myData.fr.card.personna[0]} />
	<TextDesc />
	<PersonaCard person={$myData.fr.card.personna[1]} />
</div>
