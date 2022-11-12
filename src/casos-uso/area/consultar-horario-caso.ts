import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class consultarHorarioCaso{
    async handle(reqbody:any){      
        const {data} = reqbody;

        const dataBanco = data.split(" ")[0].split("/").reverse().join('-');

        const horarios = await client.query('SELECT concat(horario_inicial,horario_final) FROM reserva_area_comum WHERE data=$1',[dataBanco]);
        console.log(horarios);
        const horariosReservados: string[] = []; 

        const horas: string[] = [];
        for(let i =0;i <= 24;i++){
           console.log( horas[i]=i+":00:00-"+(i+1)+":00:00");
 
        }
        console.log(horarios.rows);

        return horarios.rows;
    }
}

