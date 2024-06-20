<script lang="ts">
	import type { EpisodeType } from '../interfaces/interfaces';
	export let episode: EpisodeType;
</script>

<a
	href="#none"
	class="rounded d-flex flex-column bg-primary text-white text-decoration-none"
	style="width: 15rem; height: 15rem;"
>
	<p class="text-center my-auto p-2"><b>Nombre:</b><br />{episode.name}</p>
	<p class="text-center my-auto p-2"><b>Emisión:</b><br />{episode.air_date}</p>
	<p class="text-center my-auto p-2"><b>Código:</b><br />{episode.episode}</p>
</a>
