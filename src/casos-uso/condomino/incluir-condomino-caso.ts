import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class incluirCondominoCaso{
    async handle(reqbody:any){      
        const {rg, nome, senha, email, inadimplente, bloco, unidade} = reqbody;

        const rgExiste = await client.query('SELECT COUNT(1) FROM usuario WHERE rg=$1',[rg]);
        
        if(rgExiste.rows[0].count > 0){
            throw new BadRequestError('RG inválido!');
        }

        const emailExiste = await client.query('SELECT COUNT(1) FROM usuario WHERE email=$1',[email])
        
        if(emailExiste.rows[0].count > 0){
            throw new BadRequestError('Email inválido!');
        }

        const usuario = await client.query('INSERT INTO usuario(rg, nome, senha, email, situacao, inadimplente, tipo, bloco, unidade) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [rg, nome, senha, email, "Ativo", inadimplente, "Condomino",bloco, unidade]);

        return usuario.rows;
    }
}

