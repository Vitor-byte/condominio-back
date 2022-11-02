import { Request, Response } from 'express' 
import { incluirCondominoCaso} from '../casos-uso/condomino/incluir-condomino-caso';
import { excluirCondominoCaso} from '../casos-uso/condomino/excluir-condomino-caso';
import { alterarCondominoCaso} from '../casos-uso/condomino/alterar-condomino-caso';
import { consultarCondominoCaso} from '../casos-uso/condomino/consultar-condomino-caso';

export class condominoControlador{
    async incluir(request: Request, response: Response){
        const resultado = await new incluirCondominoCaso().handle(request.body);
        return response.status(200).json(resultado);
    }
    async excluir(request: Request, response: Response){
        const resultado = await new excluirCondominoCaso().handle(request.params);
        return response.status(201).json(resultado);
    }
    async alterar(request: Request, response: Response){
        const resultado = await new alterarCondominoCaso().handle(request.params, request.body);
        return response.status(201).json(resultado);
    }
    async consultar(request: Request, response: Response){
        const resultado = await new consultarCondominoCaso().handle();
         return response.status(201).json(resultado);
    }
}