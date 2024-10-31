import { get } from 'svelte/store';

export const load = async ({ params, fetch }) => {
	const getBooks = async () => {
		const url = '/api/categories/' + params.name;
		const res = await fetch(url);
		const data = await res.json();
		return data;
	};

	return {
		books: await getBooks()
	};
};
