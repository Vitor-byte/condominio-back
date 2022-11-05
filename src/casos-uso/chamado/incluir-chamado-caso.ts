import {client} from '../../conexao-banco/postgres';
export class incluirChamadoCaso{
    async handle(reqParams:any, reqbody:any){  
        const {id_usuario} = reqParams;
        const {titulo, descricao} = reqbody;
           
        const chamado = await client.query('INSERT INTO chamado(titulo, descricao, situacao, id_usuario) VALUES ($1, $2, $3, $4) RETURNING *',
        [titulo, descricao, "Aberto", id_usuario]);

        return chamado.rows;
    }
}

  
