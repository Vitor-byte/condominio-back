import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';

export class consultaIdEnqueteCaso{
    async handle(reqParams: any){     
         const {id} = reqParams;
        const enquete = await client.query('SELECT * FROM enquete WHERE id_enquete=$1',
       [id]);
        return enquete.rows;
    }
}

