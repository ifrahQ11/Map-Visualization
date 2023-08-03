<script>
	import Leaflet from "$lib/Leaflet.svelte";
    import { page } from "$app/stores";
    const vehicleId = $page.params.vehicleId;
</script>

<svelte:head>
	<title>Dynamic Map Visualization</title>
	<meta name="description" content="Basic Map Visualization using Leaflet" />
</svelte:head>

<section>
    <h1> Dynamic Map Visualization using Leaflet</h1>
	<Leaflet param={vehicleId} /> 
</section>