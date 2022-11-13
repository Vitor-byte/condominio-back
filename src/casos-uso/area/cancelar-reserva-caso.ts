import {Request, Response} from 'express' 
import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class cancelarReservaCaso{
    async handle(reqParams: any){
        const {id} = reqParams;

        const reserva = await client.query('UPDATE reserva_area_comum SET situacao=$2 WHERE id_reserva=$1 RETURNING *',
        [id, "Cancelada"]);

        return reserva.rows;
    }
}

