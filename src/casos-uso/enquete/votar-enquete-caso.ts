import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class votarEnqueteCaso{
    async handle(reqbody:any){      
        const {id_opcao, id_usuario, id_enquete} = reqbody;

        const voto = await client.query('SELECT * FROM voto_enquete WHERE id_usuario=$1 AND id_opcao=$2 AND id_enquete=$3',[id_usuario, id_opcao, id_enquete]);

        //if(voto.rows[0].count > 0){
       //     throw new BadRequestError("Não é possivel votar de novo");
      //  }
        const votoEnquete = await client.query('INSERT INTO voto_enquete( id_opcao, id_usuario, id_enquete)  VALUES ($1, $2, $3) RETURNING *',
        [id_opcao, id_usuario,id_enquete ]);
        
        return votoEnquete.rows;
    }
}

