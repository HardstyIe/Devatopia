<script lang="ts">
	import Contact from './Contact/Contact.svelte';
	import Service from './Service/Service.svelte';
	import Team from './Team/Team.svelte';
	import Technologie from './Technologie/Technologie.svelte';
</script>

<div class="flex flex-col w-full gap-y-40">
	<Team />
	<Technologie />
	<Service />
	<Contact />
</div>
