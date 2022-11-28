import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class atenderChamadoCaso{
    async handle(reqParams: any, reqBody:any){
        const {id} = reqParams;
        const {situacao, resposta} = reqBody;

        const chamadoExiste = await client.query('SELECT COUNT(1) FROM chamado WHERE id_chamado=$1',[id]);

    

        
        const atualizaChamado = await client.query('UPDATE chamado SET situacao=$2 WHERE id_chamado=$1 RETURNING *',
        [id, situacao]);

        const incluiChamado = await client.query('INSERT INTO resposta(id_chamado, resposta) VALUES ($1, $2) RETURNING *',
        [id, resposta]);


        return atualizaChamado.rows;
    


}

}