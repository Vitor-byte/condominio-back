import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres';


export class consultarAreaCaso{
    async handle(){
        const areas = await client.query('SELECT * FROM area_comum');
        
        return areas.rows;
    }
}
