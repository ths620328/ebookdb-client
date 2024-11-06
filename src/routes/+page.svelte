<script>
	let { data } = $props();
	let filter = $state('');

	const createLink = (author) => {
		return `/author/${author}`;
	};

	const applyFilter = (filter) => {
		if (filter === '') {
			return data.authors;
		} else {
			return data.authors.filter((item) =>
				item.author.toUpperCase().includes(filter.toUpperCase())
			);
		}
	};

	let filteredList = $derived(applyFilter(filter));

	const resetFilter = () => {
		filter = '';
	};
</script>

<h1>List of Authors</h1>

<form>
	<fieldset>
		<input type="text" bind:value={filter} placeholder="Enter filter text" />
		<button onclick={resetFilter}>X</button>
	</fieldset>
</form>

<ul>
	{#each filteredList as author (author.author)}
		<li><a href={createLink(author.author)}>{author.author} ({author.count})</a></li>
	{/each}
</ul>

<style>
	fieldset {
		display: flex;
		font-size: 1em;
		padding: 0.5em;
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
