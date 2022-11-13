import {client} from '../../conexao-banco/postgres';
export class incluirAvisoCaso{
    async handle(reqbody:any){  
        const {titulo, descricao} = reqbody;
           
        const aviso = await client.query('INSERT INTO aviso(titulo, descricao, data_emissao) VALUES ($1, $2, CURRENT_DATE) RETURNING *',
        [titulo, descricao]);
        
        return aviso.rows;
    }
}

  
