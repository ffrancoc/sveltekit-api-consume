<script lang="ts">
	import { page } from '$app/stores';
	import CharcterItem from '../../components/CharcterItem.svelte';
	import type { CharacterType, InfoType } from '../../interfaces/interfaces';

	let info: InfoType;
	info = $page.data['info'];

	let results: Array<CharacterType>;
	results = $page.data['results'];

	let totalCharacters: number;
	let totalPages: number;
	let nPage: number = 1;
	let nexPage: boolean;
	let prevPage: boolean;

	totalCharacters = info.count;
	totalPages = info.pages;
	nexPage = info.next ? true : false;
	prevPage = info.prev ? true : false;

	const onPrevCharacters = async () => {
		if (nPage > 1 && nPage <= totalPages) {
			nPage = nPage - 1;
			const resp = await fetch(`api/characters?page=${nPage}`);
			const data = await resp.json();

			info = data['info'];
			results = data['results'];
		}

		if (nPage === 1) {
			prevPage = false;
		}

		if (nPage < totalPages) {
			nexPage = true;
		}
	};

	const onNextCharacters = async () => {
		if (nPage < totalPages) {
			nPage = nPage + 1;
			const resp = await fetch(`api/characters?page=${nPage}`);
			const data = await resp.json();

			info = data['info'];
			results = data['results'];
		}

		if (nPage > 1) {
			prevPage = true;
		}

		if (nPage == totalPages) {
			nexPage = false;
		}
	};
</script>

<div class="container p-4 bg-dark text-white">
	<div class="d-flex gap-2 mb-2">
		<a class="btn btn-primary m-auto" href="/"><i class="bi bi-chevron-double-left"></i></a>
		<h3 class="flex-grow-1 text-center text-uppercase">Personajes</h3>
	</div>
	<div
		class="d-flex justify-content-center rounded gap-2 flex-wrap overflow-scroll"
		style="height: 600px;"
	>
		{#each results as character, i}
			<CharcterItem {character}></CharcterItem>
		{/each}
	</div>

	<div class="d-flex justify-content-center alig-items-center gap-2 mt-4">
		<button class="btn btn-primary" disabled={!prevPage} on:click={onPrevCharacters}
			><i class="bi bi-chevron-left"></i></button
		>
		<p class="my-auto"><b>Total: </b>{totalCharacters}</p>
		<p class="my-auto"><b>Páginas: </b>{nPage}/{totalPages}</p>
		<button class="btn btn-primary" disabled={!nexPage} on:click={onNextCharacters}
			><i class="bi bi-chevron-right"></i></button
		>
	</div>
</div>
