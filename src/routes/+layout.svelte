<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
</script>

<Navbar />
<div class="container mx-auto">
	<slot />
</div>
