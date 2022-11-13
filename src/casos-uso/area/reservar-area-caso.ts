import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class reservarAreaCaso{
    async handle(reqbody:any){      
        const {id_usuario, id_area_comum, data, horario_inicial, horario_final} = reqbody;
        const dataBanco = data.split(" ")[0].split("/").reverse().join('-');

        const reserva = await client.query('INSERT INTO reserva_area_comum(id_usuario, id_area_comum, data, horario_inicial, horario_final, situacao ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [id_usuario, id_area_comum, data, horario_inicial, horario_final, "Reservada"]);
        
        return reserva.rows;
    }
}

