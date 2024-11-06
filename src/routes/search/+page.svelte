<script>
	import { fetch } from 'svelte';

	let searchText = 'text';
	let searchField = 'author';

	const startSearch = () => {
		console.log('Searchtext: ' + searchText);
		console.log('Searchfield: ' + searchField);
	};
</script>

<h3>Search for</h3>

<input type="text" bind:value={searchText} />

<h3>in field</h3>

<select name="" id="" bind:value={searchField}>
	<option value="author">Author</option>
	<option value="title">Title</option>
	<option value="series">Title</option>
</select>

<button id="startSearch" onclick={startSearch}>Search</button>

<style>
	#startSearch {
		margin-top: 20px;
		width: 100%;
	}
</style>
