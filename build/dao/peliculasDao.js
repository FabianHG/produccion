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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.daoPeliculas = void 0;
const database_1 = __importDefault(require("../database/database"));
class PeliculaDao {
    listaByUsuario(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("SELECT cveUsuario, nombre, apellidos, username, cvePelicula, titulo, anio, critica, cveAutor, idAnio, anioName FROM usuario JOIN pelicula ON usuario.cveUsuario = pelicula.cveAutor JOIN anios ON pelicula.anio = anios.idAnio WHERE usuario.username = ?", [username]);
            }));
            return result;
        });
    }
    lista() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("SELECT cveUsuario, nombre, apellidos, username, cvePelicula, titulo, anio, critica, cveAutor, idAnio, anioName FROM usuario JOIN pelicula ON usuario.cveUsuario = pelicula.cveAutor JOIN anios ON pelicula.anio = anios.idAnio");
            }));
            return result;
        });
    }
    insert(pelicula) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("INSERT INTO pelicula SET ?", [pelicula]);
            }));
            return result;
        });
    }
    update(pelicula) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("UPDATE pelicula SET ? WHERE cvePelicula = ?", [pelicula, pelicula.cvePelicula]);
            }));
            return result;
        });
    }
    delete(cvePelicula) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("DELETE FROM pelicula WHERE cvePelicula = ?", [cvePelicula]);
            }));
            return result;
        });
    }
}
exports.daoPeliculas = new PeliculaDao();
