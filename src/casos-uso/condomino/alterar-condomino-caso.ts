import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class alterarCondominoCaso{
    async handle(reqParams: any, reqbody: any){
        const {id} = reqParams;
        const {rg, nome, bloco, unidade} = reqbody;

        const rgExiste = await client.query('SELECT COUNT(1) FROM usuario WHERE rg=$1 AND id_usuario !=$2',[rg, id]);
        
        if(rgExiste.rows[0].count > 0){
            throw new BadRequestError('RG inválido!');
        }

        const usuario = await client.query('UPDATE usuario SET rg=$2, nome=$3, bloco=$4, unidade=$5 WHERE id_usuario=$1 RETURNING *',
        [id, rg, nome, bloco, unidade]);

        return usuario.rows;
    }
}

