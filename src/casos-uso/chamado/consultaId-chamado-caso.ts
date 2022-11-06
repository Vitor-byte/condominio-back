import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class consultaIdChamadoCaso{
    async handle(reqParams: any){
        const {id} = reqParams;
        
        const chamados = await client.query('SELECT * FROM chamado WHERE id_usuario=$1',
        [id]);

        return chamados.rows;
    }
}

