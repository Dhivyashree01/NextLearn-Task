import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const mysqlPool =mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.NEXT_LEARN_DATABASE,
    waitForConnections:true,
    connectionLimit:10,
});

export default mysqlPool;