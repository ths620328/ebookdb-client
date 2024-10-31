import mariadb from 'mariadb';

import { MARIADB_HOST, MARIADB_USER, MARIADB_PWD, MARIADB_DATABASE } from '$env/static/private';

const pool = mariadb.createPool({
	host: MARIADB_HOST,
	user: MARIADB_USER,
	password: MARIADB_PWD,
	database: MARIADB_DATABASE,
	connectionLimit: 5
});

// connect and check for errors

await pool.getConnection();

export default pool;
