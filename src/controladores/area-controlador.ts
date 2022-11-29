import { Request, Response } from 'express' 
import { alterarAreaCaso } from '../casos-uso/area/alterar-area-caso';
import { cancelarReservaCaso } from '../casos-uso/area/cancelar-reserva-caso';
import { consultaIdAreaCaso } from '../casos-uso/area/consultaId-area-caso';
import { consultaIdReservaCaso } from '../casos-uso/area/consultaId-reserva-caso';
import { consultarAreaCaso } from '../casos-uso/area/consultar-area-caso';
import { consultarHorarioCaso } from '../casos-uso/area/consultar-horario-caso';
import { incluirAreaCaso } from '../casos-uso/area/incluir-area-caso';
import { reservarAreaCaso } from '../casos-uso/area/reservar-area-caso';

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
        const resultado = await new reservarAreaCaso().handle(request.body);
        return response.status(200).json(resultado);
    }
    async consultarHorario(request: Request, response: Response){
        const resultado = await new consultarHorarioCaso().handle(request.params);
        return response.status(200).json(resultado);
    }
    async consultaIdReserva(request: Request, response: Response){
        const resultado = await new consultaIdReservaCaso().handle(request.params);
        return response.status(200).json(resultado);
    }
    async cancelarReserva(request: Request, response: Response){
        const resultado = await new cancelarReservaCaso().handle(request.params);
        return response.status(200).json(resultado);
    }
}