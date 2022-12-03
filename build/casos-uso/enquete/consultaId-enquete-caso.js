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
exports.consultaIdEnqueteCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
class consultaIdEnqueteCaso {
    handle(reqParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = reqParams;
            const enquete = yield postgres_1.client.query('SELECT DISTINCT * FROM enquete, opcoes_enquete WHERE enquete.id_enquete=$1 AND opcoes_enquete.id_enquete=$2', [id, id]);
            return enquete.rows;
        });
    }
}
exports.consultaIdEnqueteCaso = consultaIdEnqueteCaso;
