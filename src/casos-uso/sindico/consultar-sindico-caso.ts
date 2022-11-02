import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres';


export class consultarSindicoCaso{
    async handle(){
        const sindico = await client.query('SELECT * FROM sindico');

        return sindico.rows;
    }
}
