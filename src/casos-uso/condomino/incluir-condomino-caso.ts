import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class incluirCondominoCaso{
    async handle(data: CondominoRequest){      
        const rgExiste = await client.query('SELECT COUNT(1) FROM condomino WHERE rg=$1',[data.rg])
        
        if(rgExiste.rows[0].count > 0){
            throw new BadRequestError('RG inválido!');
        }

        const emailExiste = await client.query('SELECT COUNT(1) FROM condomino WHERE email=$1',[data.email])
        if(emailExiste.rows[0].count > 0){
            throw new BadRequestError('Email inválido!');
        }

        const condomino = await client.query('INSERT INTO condomino(rg, nome, senha, email, situacao, inadimplente) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [data.rg, data.nome, data.senha, data.email, "Ativo", data.inadimplente]);

        return condomino.rows;
    }
}

