<script>
	import Card from './Card.svelte';

	export let bookData;
	// $: separator = bookData.series != '' && bookData.seriesnr != '' ? '#' : ' ';
	//$: base64Image = 'data:image/jpeg;base64, ' + btoa(bookData.cover.data);
</script>

<div class="card" class:read={bookData.completed}>
	<h5>{bookData.author} / {bookData.title}</h5>
	<p>{bookData.titlesort}</p>
	<p>#{bookData.id} / {bookData.category} / {bookData.publisher}</p>
	<!-- <img src={base64Image} alt="book cover" /> -->
	<!-- <pre>
      {base64Image}
    </pre> -->
</div>

<style>
	h5 {
		margin-bottom: 5px;
		font-weight: bold;
		color: #ddd;
	}

	p {
		text-wrap: none;
		text-overflow: ellipsis;
		overflow: hidden;
		margin: 0;
		color: #bbb;
		font-size: 0.9em;
	}

	div.card {
		background-color: #555;
		border: none;
		border-radius: 8px;
		padding: 10px 20px;
		margin-bottom: 15px;
	}

	div.read {
		background-color: darkolivegreen;
	}
</style>
