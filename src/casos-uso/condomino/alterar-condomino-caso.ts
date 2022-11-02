import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class alterarCondominoCaso{
    async handle(reqParams: any, reqbody: any){
        const {id} = reqParams;
        const {rg, nome, bloco, unidade} = reqbody;

        const rgExiste = await client.query('SELECT COUNT(1) FROM condomino WHERE rg=$1 AND id_condominio !=$2',[rg, id]);
        
        if(rgExiste.rows[0].count > 0){
            throw new BadRequestError('RG inválido!');
        }

        const condomino = await client.query('UPDATE condomino SET rg=$2, nome=$3, bloco=$4, unidade=$5 WHERE id_condomino=$1 RETURNING *',
        [id, rg, nome, bloco, unidade]);

        return condomino.rows;
    }
}

