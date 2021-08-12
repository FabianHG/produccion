import { Request, Response } from "express";
import { dao } from '../dao/generalDao';

class GeneralController {

    public async anios(req: Request, res: Response) {

        try {
            const result = await dao.anios();
            res.json(result);
        } catch (error) {
            res.status(500).json({message : error.message});
        }

    }

}

export const generalController = new GeneralController();