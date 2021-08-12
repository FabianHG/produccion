import { request, Request, Response } from 'express';
import { daoPeliculas } from '../dao/peliculasDao';

class PeliculasController {
    public async lista(req: Request, res: Response) {
        try {
            const result = await daoPeliculas.lista();
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async listaByUsuario(req: Request, res: Response) {
        try {
            const { username } = req.params;

            if(username == null){
                return res.status(400).json({ message : "No se puede eliminar" });
            }

            const result = await daoPeliculas.listaByUsuario(username);
            res.json(result);

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    public async insert (req: Request, res: Response) {
        try {
            const {titulo, anio, critica, cveAutor} = req.body;

            if(titulo == null || anio == null || critica == null || cveAutor  == null){
                return res.status(400).json({ meesage : "Los datos son requeridos" });
            }

            const pelicula = {
                titulo,
                anio,
                critica,
                cveAutor,
            }

            const result = await daoPeliculas.insert(pelicula);

            if(result.affectedRows > 0){
                return res.json({ message : "El registro se ha realizado con éxito" });
            } else  {
                return res.status(400).json({ message : result.message });
            }

        } catch (ex) {
            res.status(500).json({ message: ex.message });
        }
    }

    public async update (req:  Request, res: Response){
        try {
            const pelicula = req.body;

            if(pelicula.cvePelicula == null){
                return res.status(400).json({ message : "No se puede actualizar" });
            }

            const result = await daoPeliculas.update(pelicula);

            if(result.affectedRows > 0){
                return res.json({ message : "Los datos han sido actualizados" });
            } else  {
                return res.status(400).json({ message : result.message });
            }

        } catch (ex) {
            res.status(500).json({ message: ex.message });
        }
    }

    public async delete(req: Request, res: Response){
        try {
            const { cvePelicula } = req.params;

            if(cvePelicula == null){
                return res.status(400).json({ message : "No se puede eliminar" });
            }

            const result = await daoPeliculas.delete(parseInt(cvePelicula));

            if(result.affectedRows > 0){
                res.json({ message : "Borrado exitoso" })
            } else  {
                res.status(400).json({ message : result.message });
            }
        } catch (error) {
            res.status(400).json({ message : error.message });
        }
    }
}

export const peliculaController = new PeliculasController();