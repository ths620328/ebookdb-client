import { get } from 'svelte/store';

export const load = async ({ fetch }) => {
	const getRecent = async () => {
		const res = await fetch('/api/recent');
		const data = await res.json();
		return data;
	};

	return {
		books: await getRecent()
	};
};
