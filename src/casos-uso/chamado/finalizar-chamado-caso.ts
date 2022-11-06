import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class finalizarChamadoCaso{
    async handle(reqParams: any, reqBody: any){
        const {id} = reqParams;
        const {resposta} = reqBody;
        const chamadoExiste = await client.query('SELECT COUNT(1) FROM chamado WHERE id_chamado=$1',[id]);

        if(chamadoExiste.rows[0].count == 0){
            throw new BadRequestError('Chamado não existe!');
        }

        const chamadoSituacao = await client.query('SELECT COUNT(1) FROM chamado WHERE id_chamado=$1 AND situacao=$2',[id, "Cancelado"]);

        if(chamadoSituacao.rows[0].count > 0){
            throw new BadRequestError('Chamado cancelado não pode ser finalizado!');
        }


        const chamado = await client.query('UPDATE chamado SET situacao=$2, resposta=$3 WHERE id_chamado=$1 RETURNING *',
        [id, "Finalizado", resposta]);

        return chamado.rows;
    }
}

