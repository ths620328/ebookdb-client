import { get } from 'svelte/store';

export const load = async ({ fetch }) => {
	const getAuthors = async () => {
		const res = await fetch('/api/authors');
		const data = await res.json();
		return data;
	};

	return {
		authors: await getAuthors()
	};
};
