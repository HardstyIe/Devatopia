<script lang="ts">
	import Contact from './Contact/Contact.svelte';
	import Service from './Service/Service.svelte';
	import Team from './Team/Team.svelte';
	import Technologie from './Technologie/Technologie.svelte';
</script>

<div class="flex flex-col w-full p-5 gap-y-40 md:p-0">
	<Team />
	<Technologie />
	<Service />
	<Contact />
</div>
