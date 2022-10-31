import {client} from '../../conexao-banco/postgres';
export class incluirAvisoCaso{
    async handle(data: AvisoRequest){  
            
        const aviso = await client.query('INSERT INTO aviso(titulo, descricao) VALUES ($1, $2) RETURNING *',
        [data.titulo, data.descricao]);

        return aviso.rows;
    }
}

  
