import {client} from '../../conexao-banco/postgres';
import { BadRequestError } from '../../helpers/api-erros';
export class  verificaLoginCaso{
    async handle(reqBody:any){  
        const {email, senha} = reqBody;
        
        const usuarioExiste = await client.query('SELECT * FROM usuario WHERE email=$1 AND senha=$2',[email, senha]);

        if(usuarioExiste.rowCount == 0){
            throw new BadRequestError('Email ou senha incorretos!');    
        }

        return usuarioExiste.rows;
    }
}
