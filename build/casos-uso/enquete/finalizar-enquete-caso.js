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
exports.finalizarEnqueteCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
class finalizarEnqueteCaso {
    handle(reqParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = reqParams;
            const finalizar = yield postgres_1.client.query('UPDATE enquete SET situacao=$2 WHERE id_enquete=$1 RETURNING *', [id, "Fechada"]);
            const enqueteResultado = yield postgres_1.client.query('SELECT count(id_opcao), id_opcao FROM voto_enquete WHERE id_enquete=$1 group by id_opcao', [id]);
            return enqueteResultado.rows;
        });
    }
}
exports.finalizarEnqueteCaso = finalizarEnqueteCaso;
