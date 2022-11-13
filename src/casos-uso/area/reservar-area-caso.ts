import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class reservarAreaCaso{
    async handle(reqbody:any){      
        const {id_usuario, id_area_comum, data, horario_inicial, horario_final} = reqbody;
        
        const dataFormatada = data.split(" ")[0].split("/").reverse().join('-');
  
        const reservaExiste = await client.query('SELECT COUNt(1) FROM reserva_area_comum WHERE id_usuario=$1 AND situacao=$2',[id_usuario,"Reservada"]);

        if(reservaExiste.rowCount > 0){
            throw new BadRequestError("Não é possivel fazer outra reserva!");
         }

        const reserva = await client.query('INSERT INTO reserva_area_comum(id_usuario, id_area_comum, data, horario_inicial, horario_final, situacao ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [id_usuario, id_area_comum, dataFormatada, horario_inicial, horario_final, "Reservada"]);
        
        return reserva.rows;
    }
}

