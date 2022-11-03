import {client} from '../../conexao-banco/postgres';
export class incluirChamadoCaso{
    async handle(reqParams:any, reqbody:any){  
        const {id_condomino} = reqParams;
        const {titulo, descricao} = reqbody;
           
        const chamado = await client.query('INSERT INTO chamado(titulo, descricao, situacao, id_condomino) VALUES ($1, $2, $3, $4) RETURNING *',
        [titulo, descricao, "Aberto", id_condomino]);

        return chamado.rows;
    }
}

  
