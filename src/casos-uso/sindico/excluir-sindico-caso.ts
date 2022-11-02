import {Request, Response} from 'express' 
import { ParamsDictionary } from 'express-serve-static-core';
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';


export class excluirSindicoCaso{
    async handle(reqParams: any){
        const {id} = reqParams;
        
        const usuarioExiste = await client.query('SELECT COUNT(1) FROM sindico WHERE id_sindico=$1',[id]);
        if(usuarioExiste.rows[0].count == 0){
            throw new BadRequestError("Usuario não existe!");
        }

        const sindico = await client.query('DELETE FROM sindico WHERE id_sindico=$1 RETURNING *',[id]);
        
        return sindico.rows;
    }
}
