import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres';


export class consultaReservaIdAreaCaso{
    async handle(reqParams:any){
        const {id} = reqParams;

        const reservas = await client.query('SELECT * FROM reserva_area_comum WHERE id_reserva=$1', [id]);
        
        return reservas.rows;
    }
}