import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class consultarHorarioCaso{
    async handle(reqbody:any){      
        const {data} = reqbody;

        const dataBanco = data.split(" ")[0].split("/").reverse().join('-');

        const horarios = await client.query('SELECT horario_inicial, horario_final FROM reserva_area_comum WHERE data=$1 AND situacao=$2',[dataBanco,"Reservada"]);
        
        const horariosReservados: string[] = [];

        const horas: string[] = 
        [
            '00:00:00-01:00:00', '01:00:00-02:00:00',
            '02:00:00-03:00:00', '03:00:00-04:00:00',
            '04:00:00-05:00:00', '05:00:00-06:00:00',
            '06:00:00-07:00:00', '07:00:00-08:00:00',
            '08:00:00-09:00:00', '09:00:00-10:00:00',
            '10:00:00-11:00:00', '11:00:00-12:00:00',
            '12:00:00-13:00:00', '13:00:00-14:00:00',
            '14:00:00-15:00:00', '15:00:00-16:00:00',
            '16:00:00-17:00:00', '17:00:00-18:00:00',
            '18:00:00-19:00:00', '19:00:00-20:00:00',
            '20:00:00-21:00:00', '21:00:00-22:00:00',
            '22:00:00-23:00:00', '23:00:00-24:00:00'
          ];

        horarios.rows.map(function(element: { horario_inicial: string; horario_final: string;}, i:number){
            horariosReservados[i] = element.horario_inicial+"-"+element.horario_final;
        })

        for(let i =0;i <= horariosReservados.length;i++){
            for(let j =0;j <=horas.length;j++){
            if(horas[j] ===horariosReservados[i]){
                horas.splice(j,1);
            }
  
         }  
        }

        return horas;
    }
}

