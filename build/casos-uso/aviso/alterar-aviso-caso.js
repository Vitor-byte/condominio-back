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
exports.alterarAvisoCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
const api_erros_1 = require("../../helpers/api-erros");
class alterarAvisoCaso {
    handle(reqParams, reqbody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = reqParams;
            const { titulo, descricao } = reqbody;
            const avisoExiste = yield postgres_1.client.query('SELECT COUNT(1) FROM aviso WHERE id_aviso=$1', [id]);
            if (avisoExiste.rows[0].count > 0) {
                new api_erros_1.BadRequestError('Aviso não existe!');
            }
            const condomino = yield postgres_1.client.query('UPDATE aviso SET titulo=$2, descricao=$3 WHERE id_aviso=$1 RETURNING *', [id, titulo, descricao]);
            return condomino.rows;
        });
    }
}
exports.alterarAvisoCaso = alterarAvisoCaso;
