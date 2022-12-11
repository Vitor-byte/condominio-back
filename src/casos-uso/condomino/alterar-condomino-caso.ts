import {client} from '../../conexao-banco/postgres'
import { BadRequestError } from '../../helpers/api-erros';

export class alterarCondominoCaso{
    async handle(reqParams: any, reqbody: any){
        const {id} = reqParams;
        const {rg, nome, bloco, email, inadimplente, situacao, unidade, senha} = reqbody;

        
        const usuarioExiste = await client.query('SELECT COUNT(1) FROM usuario WHERE id_usuario=$1',[id]);
        
        if(usuarioExiste.rows[0].count == 0){
            throw new BadRequestError("Usuario não existe!");
        }
        
        const rgExiste = await client.query('SELECT COUNT(1) FROM usuario WHERE rg=$1 AND id_usuario !=$2',[rg, id]);
        
        if(rgExiste.rows[0].count > 0){
            throw new BadRequestError('RG inválido!');
        }

        const usuario = await client.query('UPDATE usuario SET rg=$2, nome=$3, inadimplente=$4, situacao=$5, bloco=$6, unidade=$7,senha=$8 email=$9 WHERE id_usuario=$1 RETURNING *',
        [id, rg, nome, inadimplente, situacao, bloco, unidade, senha, email]);

        return usuario.rows;
    }
}

