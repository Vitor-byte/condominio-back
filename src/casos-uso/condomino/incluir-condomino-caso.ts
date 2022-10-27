import {client} from '../../conexao-banco/postgres';
export class incluirCondominoCaso{
    async incluir(reqBody:any){      
        const {rg, nome, senha, email, inadimplente } = reqBody;
        
        const verifica_rg = await client.query('SELECT COUNT(1) FROM condomino WHERE rg=$1',[rg])
        if(verifica_rg.rows[0].count != 0){
            return "RG invalido!";
        }

        const verifica_email = await client.query('SELECT COUNT(1) FROM condomino WHERE rg=$1',[email])
        if(verifica_email.rows[0].count != 0){
            return "Email invalido!";
        }

        const condomino = await client.query('INSERT INTO condomino(rg, nome_completo, senha, email, situacao) VALUES ($1, $2, $3, $4, $5) RETURNING *',
       [rg, nome, senha, email, "Ativo"]);
        return condomino.rows;
    }
}
    

function validaEmail(email: any) {
    const emailRegex =  /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(String(email).toLowerCase())
  }
  
