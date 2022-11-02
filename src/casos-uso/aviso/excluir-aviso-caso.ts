import {Request, Response} from 'express' 
import { ParamsDictionary } from 'express-serve-static-core';
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';


export class excluirAvisoCaso{
    async handle(reqParams: any){
        const {id} = reqParams;
        
        const avisoExiste = await client.query('SELECT COUNT(1) FROM aviso WHERE id_aviso=$1',[id]);

        if(avisoExiste.rows[0].count == 0){
            throw new BadRequestError("Aviso não existe!");
        }

        const aviso = await client.query('DELETE FROM aviso WHERE id_aviso=$1 RETURNING *',[id]);
        return aviso.rows;
    }
}
