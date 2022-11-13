import {client} from '../../conexao-banco/postgres';
export class incluirChamadoCaso{
    async handle(reqBody:any){  
        const {titulo, descricao, id_usuario} = reqBody;
        
        const chamado = await client.query('INSERT INTO chamado(titulo, descricao, situacao, id_usuario, data_emissao) VALUES ($1, $2, $3, $4, CURRENT_DATE) RETURNING *',
        [titulo, descricao, "Aberto", id_usuario]);

        return chamado.rows;
    }
}

  
