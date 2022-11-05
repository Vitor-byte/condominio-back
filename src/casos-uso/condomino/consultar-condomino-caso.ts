import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres';


export class consultarCondominoCaso{
    async handle(){
        const usuarios = await client.query('SELECT * FROM usuario WHERE tipo=$1',["Condomino"]);

        return usuarios.rows;
    }
}
