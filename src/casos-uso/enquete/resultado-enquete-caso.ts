import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class resultadoEnqueteCaso{
    async handle(reqParams:any){      
        const {id} = reqParams;

        const enqueteResultado = await client.query('select count(voto_enquete.id_opcao),opcoes_enquete.opcao from opcoes_enquete left JOIN voto_enquete ON opcoes_enquete.id_opcao = voto_enquete.id_opcao WHERE voto_enquete.id_enquete=$1 group by opcoes_enquete.id_opcao',[id]);

        return enqueteResultado.rows;
    }
}

