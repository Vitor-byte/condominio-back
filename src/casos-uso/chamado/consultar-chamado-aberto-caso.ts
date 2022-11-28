import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class consultarChamadoAbertoCaso{
    async handle(){
        const chamados = await client.query('SELECT * FROM chamado WHERE situacao=$1',["Aberto"]);
        return chamados.rows;
    }
}

