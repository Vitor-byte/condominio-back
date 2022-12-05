import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres';


export class consultaReservaIdAreaCaso{
    async handle(reqParams:any){
        const {id} = reqParams;

        const reservas = await client.query('SELECT  * FROM area_comum LEFT JOIN reserva_area_comum ON  area_comum.id_area_comum = reserva_area_comum.id_area_comum WHERE reserva_area_comum.id_reserva=$1', [id]);
        
        return reservas.rows;
    }
}