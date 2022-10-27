import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'

export class alterarCondominoCaso{
    async alterar(reqParams: any, reqBody:any){
        const {id} = reqParams;
        const {rg, nome, senha, bloco, unidade} = reqBody;

        const verifica_rg = await client.query('SELECT COUNT(1) FROM condomino WHERE rg=$1',[rg])
        if(verifica_rg.rows[0].count != 0){
            return "RG invalido!";
        }

        const condomino = await client.query('UPDATE condomino SET rg=$2, nome_completo=$3, senha=$4, bloco=$5, unidade=$6 WHERE id_condomino=$1 RETURNING *',
        [id, rg, nome, bloco, unidade]);

        return condomino;
    }
}
