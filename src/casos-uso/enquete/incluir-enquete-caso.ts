import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class incluirEnqueteCaso{
    async handle(reqbody:any){      
        const {titulo, descricao, opcoes} = reqbody;

        const enquete = await client.query('INSERT INTO enquete(titulo, descricao, situacao) VALUES ($1, $2, $3) RETURNING *',
        [titulo, descricao, "Aberta"]);

        const id_enquete = enquete.rows[0].id_enquete;

        for(let opcao in opcoes){
            const opcoes_enquete = await client.query('INSERT INTO opcoes_enquete(opcao, id_enquete) VALUES ($1, $2) RETURNING *',
            [opcoes[opcao], id_enquete]);
        }
        
        const enquetexopcoes = await client.query('SELECT enquete.id_enquete,enquete.titulo, enquete.descricao, opcoes_enquete.opcao FROM opcoes_enquete INNER JOIN enquete ON opcoes_enquete.id_enquete = enquete.id_enquete WHERE enquete.id_enquete=$1',[id_enquete]);
        
        return enquetexopcoes.rows;
    }
}

