import pool from '$lib/database/mariadb';

export const GET = async (data) => {
	try {
		//console.log(data.url.searchParams['field']);

		const field = data.url.searchParams.get('field');
		const text = data.url.searchParams.get('text');
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
      WHERE ${field} LIKE '%${text}%'
      ORDER BY author, titlesort`;
		const result = await pool.query(sqlQuery);
		return new Response(JSON.stringify(result), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}
};
