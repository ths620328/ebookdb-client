// @ts-nocheck
import pool from '$lib/database/mariadb';

export const GET = async ({ params }) => {
	try {
		const author = params.name;
		const sqlQuery = `
      SELECT 
        author, 
        authorSort, 
        title, 
        series, 
        seriesnr, 
        titlesort, 
        category, 
        publisher,
        completed,
        cover
      FROM ebooks 
      WHERE author=?
      ORDER BY titlesort`;
		const result = await pool.query(sqlQuery, author);
		return new Response(JSON.stringify(result), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}
};
