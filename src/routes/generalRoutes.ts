import { Router } from "express";
import { generalController } from '../controllers/generalController';

class GeneralRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/anios', generalController.anios);
    }

}

const generalRoutes = new GeneralRoutes();
export default generalRoutes.router;