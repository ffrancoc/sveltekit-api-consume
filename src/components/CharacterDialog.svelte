<script lang="ts">
	import { onMount } from 'svelte';
	import type { CharacterType, EpisodeType } from '../interfaces/interfaces';
	import CharcterItem from './CharcterItem.svelte';
	export let dialog: HTMLDialogElement;
	export let character: CharacterType;

	let episodes: Array<EpisodeType> = [];

	const onCloseDialog = () => {
		dialog.close();
	};

	onMount(() => {
		character.episode.map((episode) => {
			fetch(episode).then((resp) => {
				resp.json().then((data) => {
					let ep: EpisodeType = { name: data.name, air_date: data.air_date, episode: data.episode };
					episodes = [...episodes, ep];
				});
			});
		});
	});
</script>

<dialog bind:this={dialog} class="rounded rounded-lg" style="width: 400px;">
	<div class="d-flex justify-content-end">
		<button class="btn" on:click={onCloseDialog}><i class="bi bi-x-lg"></i></button>
	</div>
	<div class="list-group list-group-flush">
		<div class="list-group-item text-center">
			<img
				class="rounded-circle mb-4"
				src={character.image}
				alt="imagen"
				width="80px"
				height="80px"
			/>
		</div>
		<div class="list-group-item"><b>Nombre: </b>{character.name}</div>
		<div class="list-group-item"><b>Especie: </b>{character.species}</div>
		<div class="list-group-item"><b>Genero: </b>{character.gender}</div>
		<div class="list-group-item"><b>Origen: </b>{character.origin.name}</div>
		<div class="list-group-item"><b>Actualidad: </b>{character.location.name}</div>
		<div class="list-group-item"><b>Episodios: </b>{episodes.length}</div>
		<div class="list-group-item overflow-scroll" style="height: 200px;">
			{#each episodes as ep}
				<div class="list-group-item d-flex flex-column">
					<p class="my-auto py-auto fw-bold">{ep.name}</p>
					<small>{ep.air_date}</small>
					<small>{ep.episode}</small>
				</div>
			{/each}
		</div>
	</div>
</dialog>
