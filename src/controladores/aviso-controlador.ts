import { Request, Response } from 'express' 
import { alterarAvisoCaso } from '../casos-uso/aviso/alterar-aviso-caso';
import { consultaIdAvisoCaso } from '../casos-uso/aviso/consultaId-aviso-caso';
import { consultarAvisoCaso } from '../casos-uso/aviso/consultar-aviso-caso';
import { excluirAvisoCaso } from '../casos-uso/aviso/excluir-aviso-caso';
import { incluirAvisoCaso } from '../casos-uso/aviso/incluir-aviso-caso';

export class avisoControlador{
    async incluir(request: Request, response: Response){
        const resultado = await new incluirAvisoCaso().handle(request.body);
        return response.status(200).json(resultado);
       

    }
    async excluir(request: Request, response: Response){
        const resultado = await new excluirAvisoCaso().handle(request.params);
        return response.status(201).json(resultado);
    }
    async alterar(request: Request, response: Response){
        const resultado = await new alterarAvisoCaso().handle(request.params, request.body);
        return response.status(201).json(resultado);
    }
    async consultar(request: Request, response: Response){
        const resultado = await new consultarAvisoCaso().handle();
        return response.status(201).json(resultado);
    }
    async consultaId(request: Request, response: Response){
        const resultado = await new consultaIdAvisoCaso().handle(request.params);
        return response.status(201).json(resultado);
    }               
}