import {Request, Response} from 'express' 
import { ParamsDictionary } from 'express-serve-static-core';
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';


export class excluirAreaCaso{
    async handle(reqParams: any){
        const {id} = reqParams;
        
        const areaExiste = await client.query('SELECT COUNT(1) FROM area_comum WHERE id_area_comum=$1',[id]);

        if(areaExiste.rows[0].count == 0){
            throw new BadRequestError("Area não existe!");
        }

        const area = await client.query('DELETE FROM area WHERE id_area_comum=$1 RETURNING *',[id]);
        return area.rows;
    }
}
