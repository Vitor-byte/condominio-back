import { Request, Response } from 'express' 
import { cancelarEnqueteCaso } from '../casos-uso/enquete/cancelar-enquete-caso';
import { consultaIdEnqueteCaso } from '../casos-uso/enquete/consultaId-enquete-caso';
import { consultarEnqueteCaso } from '../casos-uso/enquete/consultar-enquete-caso';
import { finalizarEnqueteCaso } from '../casos-uso/enquete/finalizar-enquete-caso';
import { incluirEnqueteCaso } from '../casos-uso/enquete/incluir-enquete-caso';
import { votarEnqueteCaso } from '../casos-uso/enquete/votar-enquete-caso';

export class enqueteControlador{
    async incluir(request: Request, response: Response){
        const resultado = await new incluirEnqueteCaso().handle(request.body);
        return response.status(200).json(resultado);
       

    }
    async consultar(request: Request, response: Response){
        const resultado = await new consultarEnqueteCaso().handle();
        return response.status(200).json(resultado);
       

    }
    async consultaId(request: Request, response: Response){
        const resultado = await new consultaIdEnqueteCaso().handle(request.params);
        return response.status(200).json(resultado);
       

    }
    async votar(request: Request, response: Response){
        const resultado = await new votarEnqueteCaso().handle(request.body);
        return response.status(200).json(resultado);
       

    }
    async cancelar(request: Request, response: Response){
        const resultado = await new cancelarEnqueteCaso().handle(request.params);
        return response.status(200).json(resultado);
       

    }
    async finalizar(request: Request, response: Response){
        const resultado = await new finalizarEnqueteCaso().handle(request.params);
        return response.status(200).json(resultado);
       

    }
}