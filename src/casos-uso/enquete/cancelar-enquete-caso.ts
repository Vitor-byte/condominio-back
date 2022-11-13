import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class cancelarEnqueteCaso{
    async handle(reqParams:any){      
        const {id} = reqParams;

        const enquete = await client.query('UPDATE enquete SET situacao=$2 WHERE id_enquete=$1 RETURNING *',[id, "Cancelada"]);

        return enquete.rows;
    }
}

