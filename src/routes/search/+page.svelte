<script>
	import BookDetail from '$lib/components/BookDetail.svelte';

	let searchText = $state('');
	let searchField = $state('title');

	let textInput;
	let fieldInput;

	let books = $state([]);

	const startSearch = async () => {
		if (searchText === '') {
			textInput.focus();
			return;
		}
		if (searchField === '') {
			fieldInput.focus();
			return;
		}
		const url = `/api/search?field=${searchField}&text=${searchText}`;
		const result = await fetch(url);
		books = await result.json();
	};
</script>

<h3>Search for</h3>

<input type="text" bind:this={textInput} bind:value={searchText} />

<h3>in field</h3>

<select name="" id="" bind:this={fieldInput} bind:value={searchField}>
	<option value="title">Title</option>
	<option value="author">Author</option>
	<option value="series">Series</option>
	<option value="publisher">Publisher</option>
</select>

<button id="startSearch" onclick={startSearch}>Search</button>

{#if books.length == 1}
	<p>Found {books.length} book</p>
{/if}

{#if books.length > 1}
	<p>Found {books.length} books</p>
{/if}

<div class="liste">
	{#each books as book}
		<BookDetail bookData={book} />
	{/each}
</div>

<style>
	#startSearch {
		margin: 20px auto;
		width: 100%;
	}

	.liste {
		margin-top: 20px;
		display: grid;
		grid-template-columns: 1fr;
		gap: 10px;
	}
</style>
