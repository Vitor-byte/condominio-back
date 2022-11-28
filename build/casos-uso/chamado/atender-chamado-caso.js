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
class atenderChamadoCaso {
    handle(reqParams, reqBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = reqParams;
            const { situacao, resposta } = reqBody;
            const chamadoExiste = yield postgres_1.client.query('SELECT COUNT(1) FROM chamado WHERE id_chamado=$1', [id]);
            const atualizaChamado = yield postgres_1.client.query('UPDATE chamado SET situacao=$2 WHERE id_chamado=$1 RETURNING *', [id, situacao]);
            const incluiChamado = yield postgres_1.client.query('INSERT INTO resposta(id_chamado, resposta) VALUES ($1, $2) RETURNING *', [id, resposta]);
            return atualizaChamado.rows;
        });
    }
}
exports.atenderChamadoCaso = atenderChamadoCaso;
