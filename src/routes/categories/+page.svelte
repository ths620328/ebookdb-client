<script>
	let { data } = $props();
	console.log(data);

	const createLabel = (item) => {
		const name = item.category !== '' ? item.category : '<empty>';
		return name + ': ' + item.count;
	};

	const createLink = (category) => {
		return `/categories/${category}`;
	};
</script>

<h1>Statistic</h1>

<ul>
	{#each data.categories as item}
		<li><a href={createLink(item.category)}>{createLabel(item)}</a></li>
	{/each}
</ul>

<style>
</style>
