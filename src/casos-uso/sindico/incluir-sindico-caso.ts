import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class incluirSindicoCaso{
    async handle(reqbody:any){      
        const {rg, nome, senha, email} = reqbody;

        const rgExiste = await client.query('SELECT COUNT(1) FROM sindico WHERE rg=$1',[rg]);
        
        if(rgExiste.rows[0].count > 0){
            throw new BadRequestError('RG inválido!');
        }

        const emailExiste = await client.query('SELECT COUNT(1) FROM sindico WHERE email=$1',[email])

        if(emailExiste.rows[0].count > 0){
            throw new BadRequestError('Email inválido!');
        }

        const sindico = await client.query('INSERT INTO sindico(rg, nome, senha, email, situacao) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [rg, nome, senha, email, "Ativo"]);

        return sindico.rows;
    }
}

