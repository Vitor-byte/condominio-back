import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres';


export class consultarCondominoCaso{
    async consultarId(reqParams: any){
        const {id} = reqParams;
        const condomino = await client.query('SELECT * FROM condomino WHERE id=$1',[id]);
        return condomino;
    }
    async consultar(){
        
        const condominos = await client.query('SELECT * FROM condomino LIMIT 10');
        return "teste";
    }
}
