import { get } from 'svelte/store';

export const load = async ({ fetch }) => {
	const getStats = async () => {
		const res = await fetch('/api/statistics');
		const data = await res.json();
		return data;
	};

	return {
		stats: await getStats()
	};
};
