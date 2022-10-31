import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres';


export class consultarCondominoCaso{
    async handle(){
        
        const condominos = await client.query('SELECT * FROM condomino LIMIT 10');
        return condominos;
    }
}
