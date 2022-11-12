import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres';


export class consultaIdAreaCaso{
    async handle(reqParams:any){
        const {id} = reqParams;

        const areas = await client.query('SELECT * FROM area_comum WHERE id_area_comum=$1', [id]);
        
        return areas.rows;
    }
}