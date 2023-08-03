<script lang="ts">
    export let param : string;

    import { onMount, onDestroy, afterUpdate } from 'svelte';
    import { browser } from '$app/environment';
    import type { LatLngExpression, Map, Marker } from 'leaflet';
    import vehicleData from '../data/db.json';
    import type { VehicleData } from '../types';
    import { TILE_LAYER, TILE_LAYER_ATTRIBUTION } from '../const';

    let mapElement: string | HTMLDivElement;

    let map: Map;

    let marker : Marker;

    let updateCount = 1;

    const requiredVehicle : VehicleData[] = vehicleData.filter((vehicle)=> vehicle.id === param);

    const coordinates = requiredVehicle[0].coordinates;

    const { id, name, plateNum, driverName, driverPhoneNum } = requiredVehicle[0];

    let position : LatLngExpression = [coordinates[0].lat, coordinates[0].long];

    onMount(async () => {
        if(browser) {
            const leaflet = await import('leaflet');

            map = leaflet.map(mapElement).setView(position, 13);

            leaflet.tileLayer(TILE_LAYER, {
                 attribution: TILE_LAYER_ATTRIBUTION}).addTo(map);
            
            marker = leaflet.marker(position).addTo(map);
        }
    });

    // Update the marker's position
    function updateMarkerPosition() {
    if (updateCount === coordinates.length) {
        clearInterval(interval); // Stop the interval when the marker reaches the limit
        return;
    }
    position = [coordinates[updateCount].lat, coordinates[updateCount].long];
    marker.setLatLng(position).bindPopup(`Id : ${id}<br>Name : ${name}<br>
    Plate Num : ${plateNum}<br>Driver Name : ${driverName}<br>
    Driver Phone Num : ${driverPhoneNum}`).openPopup();

    updateCount += 1;
}

    let interval : any;

     afterUpdate(() => {
        // Start updating the marker position when the component is mounted or updated
        interval = setInterval(updateMarkerPosition, 1000); // Update every 1 second (adjust as needed)
    });

    onDestroy(async () => {
        clearInterval(interval);
        if(map) {
            map.remove();
        }
    });
</script>

<main>
    <div bind:this={mapElement}></div>
</main>

<style>
    @import 'leaflet/dist/leaflet.css';
    main div {
        height: 800px;
    }
</style>