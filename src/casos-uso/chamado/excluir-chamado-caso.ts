import {Request, Response} from 'express' 
import { ParamsDictionary } from 'express-serve-static-core';
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';


export class excluirChamadoCaso{
    async handle(reqParams: any){
        const {id} = reqParams;
        
        const chamadoExiste = await client.query('SELECT COUNT(1) FROM chamado WHERE id_chamado=$1',[id]);

        if(chamadoExiste.rows[0].count == 0){
            throw new BadRequestError("Chamado não existe!");
        }

        const chamadoSituacao = await client.query('SELECT situacao FROM chamado WHERE id_chamado=$1 AND situacao=$2',[id, "Aberto"]);

        if(chamadoSituacao.rows[0].count > 0){
            throw new BadRequestError("Chamado não pode ser excluido!");

        }
        const chamado = await client.query('DELETE FROM chamado WHERE id_chamado=$1 RETURNING *',[id]);

        return chamado;
    }
}
