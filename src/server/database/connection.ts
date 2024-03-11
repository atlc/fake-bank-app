import mysql, { ResultSetHeader } from "mysql2/promise";
import config from "../config";

const pool = mysql.createPool({
    user: "root",
    password: "root",
    host: "localhost",
    database: "TotallyRealBank",
});

export const Query = async <T = ResultSetHeader>(sql: string, vals?: unknown[]) => {
    const [rows] = await pool.query(sql, vals);
    return rows as T;
};
