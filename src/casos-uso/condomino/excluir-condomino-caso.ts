import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';


export class excluirCondominoCaso{
    async excluir(reqParams:any){
        const {id} = reqParams;

        const verifica_relacao= await client.query('SELECT COUNT(1) FROM chamado WHERE id_condomino=$1',[id]);
        if(verifica_relacao.rows[0].count != 0){
            return new BadRequestError('Email invalido!');
        }
        const condomino = await client.query('DELETE FROM condomino WHERE id_condomino=$1 RETURNING *',[id]);
        return condomino;
    }
}
