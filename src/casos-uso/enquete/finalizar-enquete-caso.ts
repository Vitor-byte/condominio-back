import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class finalizarEnqueteCaso{
    async handle(reqParams:any){      
        const {id} = reqParams;

        const finalizar = await client.query('UPDATE enquete SET situacao=$2 WHERE id_enquete=$1 RETURNING *',[id, "Fechada"]);
        const enqueteResultado = await client.query('SELECT opcoes_enquete.opcao,enquete.titulo, enquete.descricao, opcoes_enquete.opcao, opcoes_enquete.id_opcao FROM opcoes_enquete LEFT JOIN enquete ON opcoes_enquete.id_enquete = enquete.id_enquete WHERE enquete.situacao=$1',["Aberta"]);

        return finalizar.rows;
    }
}

