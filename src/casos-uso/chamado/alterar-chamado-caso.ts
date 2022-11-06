import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class alterarChamadoCaso{
    async handle(reqParams: any, reqbody: any){
        const {id} = reqParams;
        const {titulo, descricao} = reqbody;
        
        const chamadoExiste = await client.query('SELECT COUNT(1) FROM chamado WHERE id_chamado=$1',[id]);

        if(chamadoExiste.rows[0].count == 0){
            throw new BadRequestError('Chamado não existe!');
        }

        const chamadoSituacao = await client.query('SELECT COUNT(1) FROM chamado WHERE id_chamado=$1 AND situacao=$2',[id, "Em andamento"]);
    
        if(chamadoSituacao.rows[0].count > 0){
            throw new BadRequestError('Não é possivel alterar o chamado!');
        }
        
        const chamado = await client.query('UPDATE chamado SET titulo=$2, descricao=$3 WHERE id_chamado=$1 RETURNING *',
        [id, titulo, descricao]);

        return chamado.rows;
    }
}

