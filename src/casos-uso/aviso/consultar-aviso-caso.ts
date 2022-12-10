import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres';


export class consultarAvisoCaso{
    async handle(){
        const avisos = await client.query('SELECT * FROM aviso ORDER BY id_aviso ASC');
        
        return avisos.rows;
    }
}
