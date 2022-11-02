import { Request, Response } from 'express' 
import { alterarSindicoCaso } from '../casos-uso/sindico/alterar-sindico-caso';
import { consultarSindicoCaso } from '../casos-uso/sindico/consultar-sindico-caso';
import { excluirSindicoCaso } from '../casos-uso/sindico/excluir-sindico-caso';
import { incluirSindicoCaso } from '../casos-uso/sindico/incluir-sindico-caso';

export class sindicoControlador{
    async incluir(request: Request, response: Response){
        const resultado = await new incluirSindicoCaso().handle(request.body);
        return response.status(200).json(resultado);
       

    }
    async excluir(request: Request, response: Response){
        const resultado = await new excluirSindicoCaso().handle(request.params);
        return response.status(201).json(resultado);
    }
    async alterar(request: Request, response: Response){
        const resultado = await new alterarSindicoCaso().handle(request.params, request.body);
        return response.status(201).json(resultado);
    }
    async consultar(request: Request, response: Response){
        const resultado = await new consultarSindicoCaso().handle();
        return response.status(201).json(resultado);
    }
}