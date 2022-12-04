import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class consultaIdChamadoCaso{
    async handle(reqParams: any){
        const {id} = reqParams;
        
        const chamados = await client.query('SELECT  * FROM usuario LEFT JOIN chamado ON  chamado.id_usuario = usuario.id_usuario WHERE chamado.id_chamado =$1',[id]);

        return chamados.rows;
    }
}

