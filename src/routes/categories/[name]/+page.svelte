<script>
	import { page } from '$app/stores';
	import BookDetail from '$lib/components/BookDetail.svelte';

	let { data } = $props();
	let filter = $state('');

	const applyFilter = (filter) => {
		if (filter === '') {
			return data.books;
		} else {
			return data.books.filter((item) => item.author.toUpperCase().includes(filter.toUpperCase()));
		}
	};

	const resetFilter = () => {
		filter = '';
	};

	let filteredList = $derived(applyFilter(filter));
</script>

<form>
	<fieldset>
		<input type="text" bind:value={filter} placeholder="Enter filter text" />
		<button onclick={resetFilter}>X</button>
	</fieldset>
</form>

<h2><span class="name">{$page.params.name}</span></h2>
<div class="liste">
	{#each filteredList as book}
		<BookDetail bookData={book} />
	{/each}
</div>

<style>
	.liste {
		display: grid;
		grid-template-columns: 1fr;
		gap: 10px;
	}

	fieldset {
		display: flex;
		font-size: 1em;
		border-radius: 1em;
		font-family: sans-serif;
	}

	input,
	button {
		padding: 0px 20px;
		font-size: inherit;
		margin: 0.1em 0.2em;
		/* the following ensures they're all using the same box-model for rendering */
		-moz-box-sizing: content-box; /* or `border-box` */
		-webkit-box-sizing: content-box;
		box-sizing: content-box;
	}
</style>
