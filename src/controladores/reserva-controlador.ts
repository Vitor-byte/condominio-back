import { Request, Response } from 'express' 
import { alterarAreaCaso } from '../casos-uso/area/alterar-area-caso';
import { consultaIdAreaCaso } from '../casos-uso/area/consultaId-area-caso';
import { consultarAreaCaso } from '../casos-uso/area/consultar-area-caso';
import { incluirAreaCaso } from '../casos-uso/area/incluir-area-caso';
import { consultarHorariosCaso } from '../casos-uso/reserva/consultarHorarios-reserva-caso';

export class reservaControlador{
    async consultarHorarios(request: Request, response: Response){
        const resultado = await new consultarHorariosCaso().handle(request.body);
        return response.status(200).json(resultado);
    }
}