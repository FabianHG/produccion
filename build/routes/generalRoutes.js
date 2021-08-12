"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generalController_1 = require("../controllers/generalController");
class GeneralRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/anios', generalController_1.generalController.anios);
    }
}
const generalRoutes = new GeneralRoutes();
exports.default = generalRoutes.router;
