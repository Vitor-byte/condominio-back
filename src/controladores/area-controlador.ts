import { Request, Response } from 'express' 
import { incluirAreaCaso } from '../casos-uso/area/incluir-area-caso';

export class areaControlador{
    async incluir(request: Request, response: Response){
        const resultado = await new incluirAreaCaso().handle(request.body);
        return response.status(200).json(resultado);
    }
}