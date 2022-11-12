import { Request, Response } from 'express' 
import { alterarAreaCaso } from '../casos-uso/area/alterar-area-caso';
import { consultarAreaCaso } from '../casos-uso/area/consultar-area-caso';
import { incluirAreaCaso } from '../casos-uso/area/incluir-area-caso';

export class areaControlador{
    async incluir(request: Request, response: Response){
        const resultado = await new incluirAreaCaso().handle(request.body);
        return response.status(200).json(resultado);
    }
    async alterar(request: Request, response: Response){
        const resultado = await new alterarAreaCaso().handle(request.params, request.body);
        return response.status(201).json(resultado);
    }
    async consultar(request: Request, response: Response){
        const resultado = await new consultarAreaCaso().handle();
        return response.status(201).json(resultado);
    }
}