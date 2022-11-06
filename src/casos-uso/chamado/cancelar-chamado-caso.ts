import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class cancelarChamadoCaso{
    async handle(reqParams: any){
        const {id} = reqParams;
        
        const chamadoExiste = await client.query('SELECT COUNT(1) FROM chamado WHERE id_chamado=$1',[id]);

        if(chamadoExiste.rows[0].count == 0){
            throw new BadRequestError('Chamado não existe!');
        }

        const chamadoSituacao = await client.query('SELECT COUNT(1) FROM chamado WHERE id_chamado=$1 AND situacao=$2',[id, "Finalizado"]);

        if(chamadoSituacao.rows[0].count > 0){
            throw new BadRequestError('Não é possivel cancelar o chamado!');
        }

        const chamado = await client.query('UPDATE chamado SET situacao=$2 WHERE id_chamado=$1 RETURNING *',
        [id, "Cancelado"]);

        return chamado.rows;
    }
}

