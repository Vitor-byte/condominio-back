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
exports.incluirCondominoCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
class incluirCondominoCaso {
    incluir(reqBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rg, nome, senha, email, inadimplente } = reqBody;
            const verifica_rg = yield postgres_1.client.query('SELECT COUNT(1) FROM condomino WHERE rg=$1', [rg]);
            if (verifica_rg.rows[0].count != 0) {
                return "RG invalido!";
            }
            const verifica_email = yield postgres_1.client.query('SELECT COUNT(1) FROM condomino WHERE rg=$1', [email]);
            if (verifica_email.rows[0].count != 0) {
                return "Email invalido!";
            }
            const condomino = yield postgres_1.client.query('INSERT INTO condomino(rg, nome_completo, senha, email, situacao, inadimplente) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [rg, nome, senha, email, "Ativo", inadimplente]);
            return condomino.rows;
        });
    }
}
exports.incluirCondominoCaso = incluirCondominoCaso;
function validaEmail(email) {
    const emailRegex = /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
}
