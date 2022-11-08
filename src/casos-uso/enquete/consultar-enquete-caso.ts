import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';

export class consultarEnqueteCaso{
    async handle(){      
        const enquetes = await client.query('SELECT enquete.id_enquete,enquete.titulo, enquete.descricao, opcoes_enquete.opcao, opcoes_enquete.id_opcao FROM opcoes_enquete LEFT JOIN enquete ON opcoes_enquete.id_enquete = enquete.id_enquete WHERE enquete.situacao=$1',
        ["Aberta"]);
        console.log(enquetes);
        return enquetes.rows;
    }
}

