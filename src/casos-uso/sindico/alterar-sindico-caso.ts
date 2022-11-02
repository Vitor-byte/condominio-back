import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class alterarSindicoCaso{
    async handle(reqParams: any, reqbody: any){
        const {id} = reqParams;
        const {rg, nome} = reqbody;

        const sindicoExiste = await client.query('SELECT COUNT(1) FROM sindico WHERE id_sindico=$1',[id]);
        if(sindicoExiste.rows[0].count == 0){
            throw new BadRequestError("Síndico não existe!");
        }
        const rgExiste = await client.query('SELECT COUNT(1) FROM sindico WHERE rg=$1 AND id_sindico!=$2',[rg, id])
        
        if(rgExiste.rows[0].count > 0){
            throw new BadRequestError('RG inválido!');
        }

        const sindico = await client.query('UPDATE sindico SET rg=$2, nome=$3 WHERE id_sindico=$1 RETURNING *',
        [id, rg, nome]);

        return sindico.rows;
    }
}

