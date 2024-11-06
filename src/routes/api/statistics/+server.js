import pool from '$lib/database/mariadb';

export const GET = async () => {
	try {
		let sqlQuery = 'SELECT CAST(COUNT(*) AS CHAR(8)) as total FROM ebooks';
		let result = await pool.query(sqlQuery);
		const total = result[0].total;
		sqlQuery = 'SELECT  CAST(COUNT(*) AS CHAR(8)) as completed FROM ebooks WHERE completed=1';
		result = await pool.query(sqlQuery);
		const completed = result[0].completed;
		const stats = {
			total,
			completed
		};
		return new Response(JSON.stringify(stats), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}
};
