import {client} from '../../conexao-banco/postgres';
export class incluirChamadoCaso{
    async handle(reqbody:any){  
        const {titulo, descricao} = reqbody;
           
        const chamado = await client.query('INSERT INTO chamado(titulo, descricao, situacao) VALUES ($1, $2, $3) RETURNING *',
        [titulo, descricao, "Aberto"]);

        return chamado.rows;
    }
}

  
