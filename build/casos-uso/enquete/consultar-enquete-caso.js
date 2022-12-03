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
exports.consultarEnqueteCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
class consultarEnqueteCaso {
    handle() {
        return __awaiter(this, void 0, void 0, function* () {
            //const enquetes = await client.query('SELECT enquete.id_enquete,enquete.titulo, enquete.descricao, opcoes_enquete.opcao, opcoes_enquete.id_opcao FROM opcoes_enquete LEFT JOIN enquete ON opcoes_enquete.id_enquete = enquete.id_enquete WHERE enquete.situacao=$1',
            //["Aberta"]);
            const enquetes = yield postgres_1.client.query('SELECT * FROM enquete ORDER BY id_enquete DESC');
            return enquetes.rows;
        });
    }
}
exports.consultarEnqueteCaso = consultarEnqueteCaso;
