"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const peliculasController_1 = require("../controllers/peliculasController");
class PeliculasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', peliculasController_1.peliculaController.lista);
        this.router.get('/listaByUsuario/:username', peliculasController_1.peliculaController.listaByUsuario);
        this.router.put('/', peliculasController_1.peliculaController.insert);
        this.router.post('/', peliculasController_1.peliculaController.update);
        this.router.delete('/:cvePelicula', peliculasController_1.peliculaController.delete);
    }
}
const peliculaRoutes = new PeliculasRoutes();
exports.default = peliculaRoutes.router;
