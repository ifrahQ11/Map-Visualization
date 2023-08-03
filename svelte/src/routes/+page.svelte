<script>
	import Leaflet from "$lib/Leaflet.svelte";
</script>

<svelte:head>
	<title>Dynamic Map Visualization</title>
	<meta name="description" content="Basic Map Visualization using Leaflet" />
</svelte:head>

<section>
    <h1> Dynamic Map Visualization using Leaflet</h1>
	<Leaflet param='vehicle1' /> 
</section>

<style>
	h1 {
		text-align: center;
	}
</style>