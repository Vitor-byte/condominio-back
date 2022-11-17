"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nodemailer = void 0;
var nodemailer = require('nodemailer');
class Nodemailer {
    constructor(remetente, destinatario, assunto, corpo) {
        console.log(this.remetente = remetente);
        console.log(this.destinatario = destinatario);
        console.log(this.assunto = assunto);
        this.corpo = corpo;
    }
    enviarEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            let configurar = nodemailer.createTransport({
                host: 'smtp.mailtrap.io',
                port: 2525,
                auth: {
                    user: "fd0023d2fff78b",
                    pass: "5d39b1234cb9ad"
                }
            });
            let dados = yield configurar.sendMail({
                from: this.remetente,
                to: this.destinatario,
                subject: this.assunto,
                text: this.corpo,
                html: "<b>Hello world?</b>"
            });
        });
    }
}
exports.Nodemailer = Nodemailer;
