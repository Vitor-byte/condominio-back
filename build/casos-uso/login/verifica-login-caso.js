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
exports.verificaLoginCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
const api_erros_1 = require("../../helpers/api-erros");
class verificaLoginCaso {
    handle(reqBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, senha } = reqBody;
            const usuarioExiste = yield postgres_1.client.query('SELECT * FROM usuario WHERE email=$1 AND senha=$2', [email, senha]);
            if (usuarioExiste.rows[0] == 0) {
                throw new api_erros_1.BadRequestError('Email ou senha incorretos!');
            }
            return usuarioExiste.rows;
        });
    }
}
exports.verificaLoginCaso = verificaLoginCaso;
