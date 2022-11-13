import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class atenderChamadoCaso{
    async handle(reqParams: any, reqBody:any){
        const {id} = reqParams;
        const {situacao, data_previsao, resolucao} = reqBody;

        const chamadoExiste = await client.query('SELECT COUNT(1) FROM chamado WHERE id_chamado=$1',[id]);

        if(chamadoExiste.rows[0].count == 0){
            throw new BadRequestError('Chamado não existe!');
        }

        if(situacao === "Cancelado"){
            const chamado = await client.query('UPDATE chamado SET situacao=$2 WHERE id_chamado=$1 RETURNING *',
            [id, situacao]);

            return chamado.rows;
        }

        if(situacao === "Em andamento"){
            const chamado = await client.query('UPDATE chamado SET situacao=$2, data_previsao=$3 WHERE id_chamado=$1 RETURNING *',
            [id, situacao, data_previsao]);

            return chamado.rows;
        }

        if(situacao === "Finalizado"){
            const chamado = await client.query('UPDATE chamado SET situacao=$2, resolucao=$3 WHERE id_chamado=$1 RETURNING *',
            [id, situacao, resolucao]);

            return chamado.rows;
        }
    

    }
}

