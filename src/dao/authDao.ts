import pool from '../database/database'

class AuthDAO {

    public async getUser(usuario: string) {
        const result = await pool.then(async (connection) => {
            return await connection.query("SELECT cveUsuario, nombre, apellidos, username, password, cvePelicula, titulo, anio, critica, cveAutor, idAnio, anioName FROM usuario LEFT JOIN pelicula ON usuario.cveUsuario = pelicula.cveAutor LEFT JOIN anios ON pelicula.anio = anios.idAnio WHERE usuario.username = ?", [usuario]);
        });

        return result;
    }

    public async getUserById(cveUsuario: number) {
        const result = await pool.then(async (connection) => {
            return await connection.query('SELECT * FROM usuario WHERE cveUsuario = ?', [cveUsuario]);
        });

        return result;
    }

}

export const dao = new AuthDAO();