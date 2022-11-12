import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class reservarAreaCaso{
    async handle(reqbody:any){      
        const {id_usuario, id_area_comum, data, horario} = reqbody;
        const dataBanco = data.split(" ")[0].split("/").reverse().join('-');
        const horarios = await client.query('SELECT COUNT(1) FROM reserva_area_comum WHERE data=$1 AND horario=$2',[dataBanco, horario]);
        const reservaExiste = await client.query('SELECT COUNT(1) FROM reserva_area_comum WHERE data=$1 AND horario=$2',[dataBanco, horario]);

        if(reservaExiste.rows[0].count == 0){
            throw new BadRequestError("!");
        }

        const area = await client.query('INSERT INTO reserva_area_comum(id_usuario, id_area_comum, data, horario, situacao ) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [id_usuario, id_area_comum, data, horario, "Reservada"]);
        
        return area.rows;
    }
}

