import pool from '$lib/database/mariadb';

export const GET = async () => {
	try {
		let sqlQuery = 'SELECT * FROM wishlist';
		let result = await pool.query(sqlQuery);
		const favIds = result.map((item) => item.ebook_id);
		const idString = favIds.join(',');
		sqlQuery = `
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
      WHERE id IN (${idString})
      ORDER BY titlesort`;
		result = await pool.query(sqlQuery);
		return new Response(JSON.stringify(result), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}
};
