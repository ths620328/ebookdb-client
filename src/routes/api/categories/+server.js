// @ts-nocheck
import pool from '$lib/database/mariadb';

export const GET = async () => {
	try {
		const sqlQuery = `
      SELECT 
        category,
        CAST(COUNT(*) AS CHAR(8)) as count 
      FROM ebooks 
      GROUP BY category 
      ORDER BY COUNT(*) DESC`;
		const result = await pool.query(sqlQuery);
		return new Response(JSON.stringify(result), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}
};
