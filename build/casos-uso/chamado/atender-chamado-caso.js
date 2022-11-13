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
exports.atenderChamadoCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
const api_erros_1 = require("../../helpers/api-erros");
class atenderChamadoCaso {
    handle(reqParams, reqBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = reqParams;
            const { situacao, data_previsao, resolucao } = reqBody;
            const chamadoExiste = yield postgres_1.client.query('SELECT COUNT(1) FROM chamado WHERE id_chamado=$1', [id]);
            if (chamadoExiste.rows[0].count == 0) {
                throw new api_erros_1.BadRequestError('Chamado não existe!');
            }
            if (situacao === "Cancelado") {
                const chamado = yield postgres_1.client.query('UPDATE chamado SET situacao=$2 WHERE id_chamado=$1 RETURNING *', [id, situacao]);
                return chamado.rows;
            }
            if (situacao === "Em andamento") {
                const chamado = yield postgres_1.client.query('UPDATE chamado SET situacao=$2, data_previsao=$3 WHERE id_chamado=$1 RETURNING *', [id, situacao, data_previsao]);
                return chamado.rows;
            }
            if (situacao === "Finalizado") {
                const chamado = yield postgres_1.client.query('UPDATE chamado SET situacao=$2, resolucao=$3 WHERE id_chamado=$1 RETURNING *', [id, situacao, resolucao]);
                return chamado.rows;
            }
        });
    }
}
exports.atenderChamadoCaso = atenderChamadoCaso;
