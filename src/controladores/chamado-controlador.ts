import { Request, Response } from 'express' 
import { atenderChamadoCaso } from '../casos-uso/chamado/atender-chamado-caso';
import { cancelarChamadoCaso } from '../casos-uso/chamado/cancelar-chamado-caso';
import { consultaIdChamadoCaso } from '../casos-uso/chamado/consultaId-chamado-caso';
import { consultarChamadoCaso } from '../casos-uso/chamado/consultar-chamado-caso';
import { excluirChamadoCaso } from '../casos-uso/chamado/excluir-chamado-caso';
import { finalizarChamadoCaso } from '../casos-uso/chamado/finalizar-chamado-caso';
import { incluirChamadoCaso } from '../casos-uso/chamado/incluir-chamado-caso';

export class chamadoControlador{
    async incluir(request: Request, response: Response){
        const resultado = await new incluirChamadoCaso().handle(request.body);
        return response.status(200).json(resultado);
    }
    async excluir(request: Request, response: Response){
        const resultado = await new excluirChamadoCaso().handle(request.params);
        return response.status(201).json(resultado);
    }
    async consultaId(request: Request, response: Response){
        const resultado = await new consultaIdChamadoCaso().handle(request.params);
        return response.status(201).json(resultado);
    }
    async consultar(request: Request, response: Response){
        const resultado = await new consultarChamadoCaso().handle();
        return response.status(201).json(resultado);
    }
    async cancelar(request: Request, response: Response){
        const resultado = await new  cancelarChamadoCaso().handle(request.params);
        return response.status(201).json(resultado);
    }
    async finalizar(request: Request, response: Response){
        const resultado = await new  finalizarChamadoCaso().handle(request.params, request.body);
        return response.status(201).json(resultado);
    }
    async atender(request: Request, response: Response){
        const resultado = await new  atenderChamadoCaso().handle(request.params, request.body);
        return response.status(201).json(resultado);
    }
}