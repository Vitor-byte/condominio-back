import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class alterarAvisoCaso{
    async handle(reqParams: any, reqbody: any){
        const {id} = reqParams;
        const { titulo, descricao} = reqbody;
        
        const avisoExiste = await client.query('SELECT COUNT(1) FROM aviso WHERE id_aviso=$1',[id])
        
        if(avisoExiste.rows[0].count > 0){
            new BadRequestError('Aviso não existe!');
        }

        const condomino = await client.query('UPDATE aviso SET titulo=$2, descricao=$3 WHERE id_aviso=$1 RETURNING *',
        [id, titulo, descricao]);

        return condomino.rows;
    }
}

