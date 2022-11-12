import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres';


export class consultaIdAvisoCaso{
    async handle(reqParams:any){
        const {id} = reqParams;
        const avisos = await client.query('SELECT * FROM aviso WHERE id_aviso=$1', [id]);
        
        return avisos.rows;
    }
}
