import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class alterarChamadoCaso{
    async handle(reqParams: any, reqbody: any){
        const {id} = reqParams;
        const {titulo, descricao, situacao} = reqbody;
        
        const chamadoExiste = await client.query('SELECT COUNT(1) FROM chamado WHERE id_chamado=$1',[id]);

        if(chamadoExiste.rows[0].count == 0){
            throw new BadRequestError('Chamado não existe!');
        }

        const chamado = await client.query('UPDATE chamado SET titulo=$2, descricao=$3, situacao=$3 WHERE id_chamado=$1 RETURNING *',
        [id, titulo, descricao, situacao]);

        return chamado.rows;
    }
}

