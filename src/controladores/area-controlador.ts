import { Request, Response } from 'express' 
import { alterarAreaCaso } from '../casos-uso/area/alterar-area-caso';
import { consultaIdAreaCaso } from '../casos-uso/area/consultaId-area-caso';
import { consultarAreaCaso } from '../casos-uso/area/consultar-area-caso';
import { consultarHorarioCaso } from '../casos-uso/area/consultar-horario-caso';
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
    async consultaId(request: Request, response: Response){
        const resultado = await new consultaIdAreaCaso().handle(request.params);
        return response.status(201).json(resultado);
    }
    async reservar(request: Request, response: Response){
        const resultado = await new consultarHorarioCaso().handle(request.body);
        return response.status(200).json(resultado);
    }
    async consultarHorario(request: Request, response: Response){
        const resultado = await new consultarHorarioCaso().handle(request.body);
        return response.status(200).json(resultado);
    }
}