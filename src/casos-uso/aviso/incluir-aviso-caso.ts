import {client} from '../../conexao-banco/postgres';
import {Nodemailer} from '../../email/nodemailer'
export class incluirAvisoCaso{
    async handle(reqbody:any){  
        const {titulo, descricao} = reqbody;
           
        const aviso = await client.query('INSERT INTO aviso(titulo, descricao, data_emissao) VALUES ($1, $2, CURRENT_DATE) RETURNING *',
        [titulo, descricao]);
        
        const enivar = await new Nodemailer( 'vitorgabrielcl@outlook.com','vitor.cost77@gmail.com','Aviso','Aviso teste ').enviarEmail;

        return aviso.rows;
    }
}

  
