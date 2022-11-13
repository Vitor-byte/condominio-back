import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class consultarChamadoCaso{
    async handle(){
        const chamados = await client.query('SELECT * FROM chamado');

        return chamados.rows;
    }
}

