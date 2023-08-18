<script>
	import { dev } from '$app/environment';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { inject } from '@vercel/analytics';
	import '../app.css';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<Navbar />
<div class="container mx-auto mt-20">
	<slot />
</div>
<Footer />
