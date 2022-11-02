import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class alterarCondominoCaso{
    async handle(reqParams: any, reqbody: any){
        const {id} = reqParams;
        const {rg, nome, bloco, unidade} = reqbody;

        const rgExiste = await client.query('SELECT COUNT(1) FROM condomino WHERE rg=$1',[rg])
        
        if(rgExiste.rows[0].count > 0){
            throw new BadRequestError('RG inválido!');
        }

        const condomino = await client.query('UPDATE condomino SET rg=$2, nome=$3, senha=$4, bloco=$5, unidade=$6 WHERE id_condomino=$1 RETURNING *',
        [id, rg, nome, bloco, unidade]);

        return condomino.rows;
    }
}

