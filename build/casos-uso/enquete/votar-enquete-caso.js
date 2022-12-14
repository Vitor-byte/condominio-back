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
exports.votarEnqueteCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
const api_erros_1 = require("../../helpers/api-erros");
class votarEnqueteCaso {
    handle(reqbody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_opcao, id_usuario, id_enquete } = reqbody;
            const voto = yield postgres_1.client.query('SELECT * FROM voto_enquete WHERE id_usuario=$1 AND id_opcao=$2 AND id_enquete=$3', [id_usuario, id_opcao, id_enquete]);
            if (voto.rowCount > 0) {
                throw new api_erros_1.BadRequestError("Não é possivel votar de novo!");
            }
            const votoEnquete = yield postgres_1.client.query('INSERT INTO voto_enquete( id_opcao, id_usuario, id_enquete)  VALUES ($1, $2, $3) RETURNING *', [id_opcao, id_usuario, id_enquete]);
            return votoEnquete.rows;
        });
    }
}
exports.votarEnqueteCaso = votarEnqueteCaso;
