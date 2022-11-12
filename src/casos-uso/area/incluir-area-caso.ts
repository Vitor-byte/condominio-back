import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class incluirAreaCaso{
    async handle(reqbody:any){      
        const {nome, descricao, preco, imagem} = reqbody;

        const area = await client.query('INSERT INTO area_comum( nome, descricao, preco, situacao, imagem ) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [nome, descricao, preco, "Aberta", imagem]);
        
        return area.rows;
    }
}

