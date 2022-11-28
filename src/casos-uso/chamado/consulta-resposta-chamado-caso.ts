import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class consultaRespostaChamadoCaso{
    async handle(reqParams: any){
        const {id} = reqParams;
        
        const chamados = await client.query('SELECT  * FROM resposta WHERE id_chamado=$1',[id]);

        return chamados.rows;
    }
}

