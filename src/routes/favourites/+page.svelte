<script>
	import BookDetail from '$lib/components/BookDetail.svelte';

	let { data } = $props();
</script>

<h2>Favourite Books</h2>
<div class="liste">
	{#each data.books as book}
		<BookDetail bookData={book} />
	{/each}
</div>

<style>
	.liste {
		display: grid;
		grid-template-columns: 1fr;
		gap: 10px;
	}
</style>
