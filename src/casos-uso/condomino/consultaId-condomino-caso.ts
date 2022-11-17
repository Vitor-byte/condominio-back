import { Console } from 'console';
import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';


export class consultaIdCondominoCaso{
    async handle(reqParams: any){
        const {id} = reqParams;

        const usuario= await client.query('SELECT * FROM usuario WHERE id_usuario=$1',[id]);
        
        if(usuario.rowCount == 0){
            throw new BadRequestError("Usuario não existe!");
        }

        return usuario.rows;
    }
}
