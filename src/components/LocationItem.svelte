<script lang="ts">
	import type { LocationType } from '../interfaces/interfaces';
	export let location: LocationType;
</script>

<a
	href="#none"
	class="rounded d-flex flex-column bg-primary text-white text-decoration-none"
	style="width: 15rem; height: 15rem;"
>
	<p class="text-center my-auto p-2"><b>Nombre:</b><br />{location.name}</p>
	<p class="text-center my-auto p-2"><b>Dimension:</b><br />{location.dimension}</p>
	<p class="text-center my-auto p-2"><b>Lugar:</b><br />{location.type}</p>
</a>
