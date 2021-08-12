import { Router } from 'express';
import { peliculaController } from "../controllers/peliculasController";
import { checkJwt } from '../middlewares/jwt';

class PeliculasRoutes {

    public router: Router = Router();

    constructor() { 
        this.config();
    }

    config(): void {
        this.router.get('/', peliculaController.lista);
        this.router.get('/listaByUsuario/:username', peliculaController.listaByUsuario);
        this.router.put('/', peliculaController.insert);
        this.router.post('/', peliculaController.update);
        this.router.delete('/:cvePelicula', peliculaController.delete)  
    }
}

const peliculaRoutes = new PeliculasRoutes();
export default peliculaRoutes.router;