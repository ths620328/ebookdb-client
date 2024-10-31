import { get } from 'svelte/store';

export const load = async ({ fetch }) => {
	const getBooks = async () => {
		const url = '/api/categories';
		const res = await fetch(url);
		const data = await res.json();
		return data;
	};

	return {
		categories: await getBooks()
	};
};
