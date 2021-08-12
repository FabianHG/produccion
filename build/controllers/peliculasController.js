"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.peliculaController = void 0;
const peliculasDao_1 = require("../dao/peliculasDao");
class PeliculasController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield peliculasDao_1.daoPeliculas.lista();
                res.json(result);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    listaByUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username } = req.params;
                if (username == null) {
                    return res.status(400).json({ message: "No se puede eliminar" });
                }
                const result = yield peliculasDao_1.daoPeliculas.listaByUsuario(username);
                res.json(result);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { titulo, anio, critica, cveAutor } = req.body;
                if (titulo == null || anio == null || critica == null || cveAutor == null) {
                    return res.status(400).json({ meesage: "Los datos son requeridos" });
                }
                const pelicula = {
                    titulo,
                    anio,
                    critica,
                    cveAutor,
                };
                const result = yield peliculasDao_1.daoPeliculas.insert(pelicula);
                if (result.affectedRows > 0) {
                    return res.json({ message: "El registro se ha realizado con éxito" });
                }
                else {
                    return res.status(400).json({ message: result.message });
                }
            }
            catch (ex) {
                res.status(500).json({ message: ex.message });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pelicula = req.body;
                if (pelicula.cvePelicula == null) {
                    return res.status(400).json({ message: "No se puede actualizar" });
                }
                const result = yield peliculasDao_1.daoPeliculas.update(pelicula);
                if (result.affectedRows > 0) {
                    return res.json({ message: "Los datos han sido actualizados" });
                }
                else {
                    return res.status(400).json({ message: result.message });
                }
            }
            catch (ex) {
                res.status(500).json({ message: ex.message });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { cvePelicula } = req.params;
                if (cvePelicula == null) {
                    return res.status(400).json({ message: "No se puede eliminar" });
                }
                const result = yield peliculasDao_1.daoPeliculas.delete(parseInt(cvePelicula));
                if (result.affectedRows > 0) {
                    res.json({ message: "Borrado exitoso" });
                }
                else {
                    res.status(400).json({ message: result.message });
                }
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
}
exports.peliculaController = new PeliculasController();
