import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class incluirAreaCaso{
    async handle(reqbody:any){      
        const {nome, descricao, preco} = reqbody;

        const area = await client.query('INSERT INTO area_comum( nome, descricao, preco, situacao) VALUES ($1, $2, $3, $4) RETURNING *',
        [nome, descricao, preco, "Aberta"]);
        
        return area.rows;
    }
}

