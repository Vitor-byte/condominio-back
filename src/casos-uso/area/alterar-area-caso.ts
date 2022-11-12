import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class alterarAreaCaso{
    async handle(reqParams: any, reqbody: any){
        const {id} = reqParams;
        const {nome, descricao, preco, imagem, situacao} = reqbody;
        
        const areaExiste = await client.query('SELECT COUNT(1) FROM area_comum WHERE id_area_comum=$1',[id]);;
        if(areaExiste.rows[0].count == 0){
            throw new BadRequestError('Area não existe!');
        }

        const area = await client.query('UPDATE area_comum SET nome=$2, descricao=$3, preco=$4, imagem=$5, situacao=$6 WHERE id_area_comum=$1 RETURNING *',
        [id, nome, descricao, preco, imagem, situacao]);

        return area.rows;
    }
}

