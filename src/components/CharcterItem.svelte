<script lang="ts">
	import type { CharacterType } from '../interfaces/interfaces';
	import CharacterDialog from './CharacterDialog.svelte';
	export let character: CharacterType;
	let dialog: HTMLDialogElement;

	const showDialog = () => {
		dialog.showModal();
	};
</script>

<a href="#none" class="rounded bg-primary text-white text-decoration-none" on:click={showDialog}>
	<img src={character.image} alt="imagen" />
	<p class="text-center my-auto p-2"><b>{character.name}</b></p>
</a>

<CharacterDialog bind:dialog {character}></CharacterDialog>
