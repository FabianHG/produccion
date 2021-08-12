import pool from "../database/database";

class PeliculaDao {
    public async listaByUsuario(username: string) {
        const result  = await pool.then(async (connection) => {
            return await connection.query("SELECT cveUsuario, nombre, apellidos, username, cvePelicula, titulo, anio, critica, cveAutor, idAnio, anioName FROM usuario JOIN pelicula ON usuario.cveUsuario = pelicula.cveAutor JOIN anios ON pelicula.anio = anios.idAnio WHERE usuario.username = ?", [username]);
        });

        return result;
    }

    public async lista() {
        const result  = await pool.then(async (connection) => {
            return await connection.query("SELECT cveUsuario, nombre, apellidos, username, cvePelicula, titulo, anio, critica, cveAutor, idAnio, anioName FROM usuario JOIN pelicula ON usuario.cveUsuario = pelicula.cveAutor JOIN anios ON pelicula.anio = anios.idAnio");
        });

        return result;
    }

    public async insert(pelicula: any) {
        const result = await pool.then(async (connection) => {
            return await connection.query("INSERT INTO pelicula SET ?", [pelicula]);
        });
        return result;
        
    }

    public async update(pelicula: any) {
        const result = await pool.then(async (connection) => {
            return await connection.query("UPDATE pelicula SET ? WHERE cvePelicula = ?", [pelicula, pelicula.cvePelicula]);
        });
        return result;
        
    }

    public async delete(cvePelicula: number) {
        const result = await pool.then(async (connection) => {
            return await connection.query("DELETE FROM pelicula WHERE cvePelicula = ?", [cvePelicula]);
        });

        return result;
    }

}

export const daoPeliculas = new PeliculaDao();