import { Request, Response } from 'express' 
import { alterarChamadoCaso } from '../casos-uso/chamado/alterar-chamado-caso';
import { consultaIdChamadoCaso } from '../casos-uso/chamado/consultaId-chamado-caso';
import { excluirChamadoCaso } from '../casos-uso/chamado/excluir-chamado-caso';
import { incluirChamadoCaso } from '../casos-uso/chamado/incluir-chamado-caso';

export class chamadoControlador{
    async incluir(request: Request, response: Response){
        const resultado = await new incluirChamadoCaso().handle(request.params, request.body);
        return response.status(200).json(resultado);
       

    }
    async excluir(request: Request, response: Response){
        const resultado = await new excluirChamadoCaso().handle(request.params);
        return response.status(201).json(resultado);
    }
    async alterar(request: Request, response: Response){
        const resultado = await new alterarChamadoCaso().handle(request.params, request.body);
        return response.status(201).json(resultado);
    }
    async consultaId(request: Request, response: Response){
        const resultado = await new consultaIdChamadoCaso().handle(request.params);
        return response.status(201).json(resultado);
    }
}