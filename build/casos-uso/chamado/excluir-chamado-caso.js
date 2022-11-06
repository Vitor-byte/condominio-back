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
exports.excluirChamadoCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
const api_erros_1 = require("../../helpers/api-erros");
class excluirChamadoCaso {
    handle(reqParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = reqParams;
            const chamadoExiste = yield postgres_1.client.query('SELECT COUNT(1) FROM chamado WHERE id_chamado=$1', [id]);
            if (chamadoExiste.rows[0].count == 0) {
                throw new api_erros_1.BadRequestError("Chamado não existe!");
            }
            const chamadoSituacao = yield postgres_1.client.query('SELECT situacao FROM chamado WHERE id_chamado=$1 AND situacao=$2 OR situacao=$2', [id, "Finalizado", "Em andamento"]);
            if (chamadoSituacao.rows[0].count > 0) {
                throw new api_erros_1.BadRequestError("Chamado não pode ser excluido!");
            }
            const chamado = yield postgres_1.client.query('DELETE FROM chamado WHERE id_chamado=$1 RETURNING *', [id]);
            return chamado;
        });
    }
}
exports.excluirChamadoCaso = excluirChamadoCaso;
