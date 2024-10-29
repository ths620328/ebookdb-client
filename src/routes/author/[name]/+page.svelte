<script>
	import { page } from '$app/stores';
	import BookDetail from '$lib/components/BookDetail.svelte';

	const { data } = $props();
	const books = data.books;
</script>

<h2>Books of <span class="name">{$page.params.name}</span></h2>
<div class="liste">
	<div>
		{#each books as book}
			<BookDetail bookData={book} />
		{/each}
	</div>
</div>

<style>
	ul {
		padding: 50;
		list-style: none;
	}

	.liste {
		display: grid;
		grid-template-columns: 1fr;
		gap: 20px;
	}
</style>
