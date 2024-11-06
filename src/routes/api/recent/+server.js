import pool from '$lib/database/mariadb';

export const GET = async () => {
	try {
		const sqlQuery = 'SELECT * FROM ebooks ORDER BY id DESC LIMIT 20';
		const result = await pool.query(sqlQuery);
		return new Response(JSON.stringify(result), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}
};
