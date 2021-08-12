import pool from "../database/database";

class GeneralDao {

    public async anios() {
        const result = await pool.then(async (connection) => {
            return await connection.query("SELECT idAnio, anioName FROM anios ORDER BY anioName DESC")
        });

        return result;
    }

}
 export const dao = new GeneralDao();