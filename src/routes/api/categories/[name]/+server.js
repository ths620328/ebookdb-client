// @ts-nocheck
import pool from '$lib/database/mariadb';

export const GET = async ({ params }) => {
	try {
		const category = params.name;
		const sqlQuery = `
      SELECT 
        author, 
        authorSort, 
        title, 
        series, 
        seriesnr, 
        titlesort, 
        category, 
        completed,
        publisher
      FROM ebooks 
      WHERE category=?
      ORDER BY author, titlesort`;
		const result = await pool.query(sqlQuery, category);
		return new Response(JSON.stringify(result), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}
};
