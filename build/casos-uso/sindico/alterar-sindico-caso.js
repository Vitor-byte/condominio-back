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
exports.alterarSindicoCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
const api_erros_1 = require("../../helpers/api-erros");
class alterarSindicoCaso {
    handle(reqParams, reqbody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = reqParams;
            const { rg, nome } = reqbody;
            const sindicoExiste = yield postgres_1.client.query('SELECT COUNT(1) FROM sindico WHERE id_sindico=$1', [id]);
            if (sindicoExiste.rows[0].count == 0) {
                throw new api_erros_1.BadRequestError("Síndico não existe!");
            }
            const rgExiste = yield postgres_1.client.query('SELECT COUNT(1) FROM sindico WHERE rg=$1', [rg]);
            if (rgExiste.rows[0].count > 0) {
                throw new api_erros_1.BadRequestError('RG inválido!');
            }
            const sindico = yield postgres_1.client.query('UPDATE sindico SET rg=$2, nome=$3 WHERE id_sindico=$1 RETURNING *', [id, rg, nome]);
            return sindico.rows;
        });
    }
}
exports.alterarSindicoCaso = alterarSindicoCaso;
