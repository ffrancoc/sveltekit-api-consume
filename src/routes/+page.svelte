<script lang="ts">
	import Image1 from '$lib/images/image1.png';
	import { page } from '$app/stores';
</script>

<div class="card border-0 d-flex justify-content-center p-4 text-center bg-dark text-white">
	<img src={Image1} alt="image1" width="290px;" height="300px;" />
	<h1>Rick and Morty</h1>
	<h2>Menu</h2>

	<div class="btn-group">
		<a class="btn btn-primary border" href="/characters">Personajes</a>
		<a class="btn btn-primary border" href="/locations">Lugares</a>
		<a class="btn btn-primary border" href="/episodes">Episodios</a>
	</div>
</div>
