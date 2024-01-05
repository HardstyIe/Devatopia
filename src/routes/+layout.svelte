<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
</script>

<div class="scroll-smooth">
	<Navbar />
	<div class="container h-full mx-auto">
		<slot />
	</div>
	<Footer />
</div>
