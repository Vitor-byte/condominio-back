import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class finalizarEnqueteCaso{
    async handle(reqParams:any){      
        const {id} = reqParams;

        const finalizar = await client.query('UPDATE enquete SET situacao=$2 WHERE id_enquete=$1 RETURNING *',[id, "Finalizar"]);
        const enqueteResultado = await client.query('SELECT count(id_opcao), id_opcao FROM voto_enquete WHERE id_enquete=$1 group by id_opcao',[id]);

        return enqueteResultado.rows;
    }
}

