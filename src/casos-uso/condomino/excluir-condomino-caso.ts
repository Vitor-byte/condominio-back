import {Request, Response} from 'express' 
import { ParamsDictionary } from 'express-serve-static-core';
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';


export class excluirCondominoCaso{
    async handle(reqParams: any){
        const {id} = reqParams;

        const verifica_relacao= await client.query('SELECT COUNT(1) FROM chamado WHERE id_usuario=$1',[id]);

        const usuarioExiste = await client.query('SELECT COUNT(1) FROM usuario WHERE id_usuario=$1',[id]);
        if(usuarioExiste.rows[0].count == 0){
            throw new BadRequestError("Usuario não existe!");
        }

        const usuario = await client.query('DELETE FROM usuario WHERE id_usuario=$1 RETURNING *',[id]);
        
        return usuario.rows;
    }
}
