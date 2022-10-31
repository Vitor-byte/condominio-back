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
const api_erros_1 = require("../../helpers/api-erros");
class incluirCondominoCaso {
    handle(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const rgExiste = yield postgres_1.client.query('SELECT COUNT(1) FROM condomino WHERE rg=$1', [data.rg]);
            if (rgExiste.rows[0].count > 0) {
                throw new api_erros_1.BadRequestError('RG inválido!');
            }
            const emailExiste = yield postgres_1.client.query('SELECT COUNT(1) FROM condomino WHERE email=$1', [data.email]);
            if (emailExiste.rows[0].count > 0) {
                throw new api_erros_1.BadRequestError('Email inválido!');
            }
            const condomino = yield postgres_1.client.query('INSERT INTO condomino(rg, nome, senha, email, situacao, inadimplente) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [data.rg, data.nome, data.senha, data.email, "Ativo", data.inadimplente]);
            return condomino.rows;
        });
    }
}
exports.incluirCondominoCaso = incluirCondominoCaso;
