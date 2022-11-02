import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres';


export class consultarCondominoCaso{
    async handle(){
        const condominos = await client.query('SELECT * FROM condomino');

        return condominos.rows;
    }
}
