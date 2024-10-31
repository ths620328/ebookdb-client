<script>
	import Card from './Card.svelte';

	export let bookData;
	// $: separator = bookData.series != '' && bookData.seriesnr != '' ? '#' : ' ';
	//$: base64Image = 'data:image/jpeg;base64, ' + btoa(bookData.cover.data);
</script>

<div>
	<Card>
		<h5>{bookData.author} / {bookData.title}</h5>
		<p>{bookData.titlesort}</p>
		<!-- <p>{bookData.series} {separator} {bookData.seriesnr}</p> -->
		<p>{bookData.category} / {bookData.publisher}</p>
		<!-- <img src={base64Image} alt="book cover" /> -->
		<!-- <pre>
      {base64Image}
    </pre> -->
	</Card>
</div>

<style>
	h5 {
		margin-bottom: 5px;
		font-weight: bold;
		color: #222;
	}

	p {
		text-wrap: none;
		text-overflow: ellipsis;
		overflow: hidden;
		margin: 0;
		color: #444;
		font-size: 0.9em;
	}
</style>
