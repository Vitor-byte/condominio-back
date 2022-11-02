import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres';


export class consultarAvisoCaso{
    async handle(){
        const avisos = await client.query('SELECT * FROM aviso LIMIT 10');
        
        return avisos;
    }
}
