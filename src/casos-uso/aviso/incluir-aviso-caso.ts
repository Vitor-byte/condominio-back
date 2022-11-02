import {client} from '../../conexao-banco/postgres';
export class incluirAvisoCaso{
    async handle(reqbody:any){  
        const {titulo, descricao} = reqbody;
           
        const aviso = await client.query('INSERT INTO aviso(titulo, descricao) VALUES ($1, $2) RETURNING *',
        [titulo, descricao]);
        
        return aviso.rows;
    }
}

  
