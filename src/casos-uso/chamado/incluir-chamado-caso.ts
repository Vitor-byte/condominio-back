import {client} from '../../conexao-banco/postgres';
export class incluirChamadoCaso{
    async handle(reqBody:any){  
        const {titulo, descricao, tipo, id_usuario} = reqBody;
        
        const chamado = await client.query('INSERT INTO chamado(titulo, descricao, situacao, tipo, id_usuario) VALUES ($1, $2, $3, $4,$5) RETURNING *',
        [titulo, descricao, "Aberto", tipo, id_usuario]);

        return chamado.rows;
    }
}

  
