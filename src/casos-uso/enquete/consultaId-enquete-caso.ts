import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';

export class consultaIdEnqueteCaso{
    async handle(reqParams: any){     
         const {id} = reqParams;
        const enquete = await client.query('SELECT DISTINCT * FROM enquete, opcoes_enquete WHERE enquete.id_enquete=$1 AND opcoes_enquete.id_enquete=$2',
       [id, id]);
        return enquete.rows;
    }
}

