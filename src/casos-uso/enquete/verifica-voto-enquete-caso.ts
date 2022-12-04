import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class verificaVotoEnqueteCaso{
    async handle(reqbody:any){      
        const { id_usuario, id_enquete} = reqbody;

        const voto = await client.query('SELECT * FROM voto_enquete WHERE id_usuario=$1 AND id_enquete=$2',[id_usuario, id_enquete]);
        
        return voto.rows;
    }
}

