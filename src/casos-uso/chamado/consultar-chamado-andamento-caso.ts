import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class consultarChamadoEmAndamentoCaso{
    async handle(){
        const chamados = await client.query('SELECT * FROM chamado WHERE situacao=$1 ORDER BY id_usuario ASC',["Em andamento"]);
        return chamados.rows;
    }
}

