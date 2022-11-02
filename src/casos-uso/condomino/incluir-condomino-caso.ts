import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class incluirCondominoCaso{
    async handle(reqbody:any){      
        const {rg, nome, senha, email, inadimplente} = reqbody;

        const rgExiste = await client.query('SELECT COUNT(1) FROM condomino WHERE rg=$1',[rg]);
        
        if(rgExiste.rows[0].count > 0){
            throw new BadRequestError('RG inválido!');
        }

        const emailExiste = await client.query('SELECT COUNT(1) FROM condomino WHERE email=$1',[email])
        
        if(emailExiste.rows[0].count > 0){
            throw new BadRequestError('Email inválido!');
        }

        const condomino = await client.query('INSERT INTO condomino(rg, nome, senha, email, situacao, inadimplente) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [rg, nome, senha, email, "Ativo", inadimplente]);

        return condomino.rows;
    }
}

