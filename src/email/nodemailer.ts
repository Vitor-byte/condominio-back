import {Request, Response} from 'express' 
var nodemailer = require('nodemailer');


export class Nodemailer{
    remetente: string;
    destinatario: string; 
    assunto: string;
    corpo:string; 

    constructor(remetente: string, destinatario: string, assunto: string, corpo:string ) {
        console.log(this.remetente = remetente);
        console.log(this.destinatario = destinatario);
        console.log(this.assunto = assunto);
        this.corpo = corpo;
    }

    async enviarEmail(): Promise<void>{
        let configurar = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: "fd0023d2fff78b",
                pass: "5d39b1234cb9ad"
              }
          });
	
        let dados = await configurar.sendMail({
            from: this.remetente, 
            to: this.destinatario, 
            subject: this.assunto, 
            text: this.corpo, 
            html: "<b>Hello world?</b>"
        });  

	}
}

