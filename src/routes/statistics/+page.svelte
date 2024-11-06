<script>
	import BookDetail from '$lib/components/BookDetail.svelte';

	let { data } = $props();
	const { total, completed } = data.stats;
</script>

<h2>Statistics</h2>

<p>Total number of books: <span class="value">{total}</span></p>
<p>Number of completed books: <span class="value">{completed}</span></p>
<p>Number of unread books: <span class="value">{total - completed}</span></p>

<style>
	.value {
		color: white;
	}
</style>
