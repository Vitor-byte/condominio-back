import { Request, Response } from 'express' 
import { verificaLoginCaso } from '../casos-uso/login/verifica-login-caso';

export class loginControlador{
    async verificaLogin(request: Request, response: Response){
        const resultado = await new  verificaLoginCaso().handle(request.body);
        return response.status(200).json(resultado);
       

    }
}