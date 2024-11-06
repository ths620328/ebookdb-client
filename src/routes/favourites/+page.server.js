import { get } from 'svelte/store';

export const load = async ({ params, fetch }) => {
	const getFavourites = async () => {
		const url = '/api/favourites';
		const res = await fetch(url);
		const data = await res.json();
		return data;
	};

	return {
		books: await getFavourites()
	};
};
