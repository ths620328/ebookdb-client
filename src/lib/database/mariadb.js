import mariadb from 'mariadb';

const pool = mariadb.createPool({
	host: 'raspi4',
	user: 'thomas',
	password: 'HugoHugo12!',
	database: 'mediadb',
	connectionLimit: 5
});

// connect and check for errors

await pool.getConnection();

export default pool;
