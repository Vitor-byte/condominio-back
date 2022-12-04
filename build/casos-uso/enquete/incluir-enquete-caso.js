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
exports.incluirEnqueteCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
class incluirEnqueteCaso {
    handle(reqbody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, descricao, opcao1, opcao2, opcao3, opcao4, opcao5 } = reqbody;
            const enquete = yield postgres_1.client.query('INSERT INTO enquete(titulo, descricao, situacao) VALUES ($1, $2, $3) RETURNING *', [titulo, descricao, "Aberta"]);
            const id_enquete = enquete.rows[0].id_enquete;
            //for(let opcao in opcoes){
            //  const opcoes_enquete = await client.query('INSERT INTO opcoes_enquete(opcao, id_enquete) VALUES ($1, $2) RETURNING *',
            //  [opcoes[opcao], id_enquete]);
            //}
            const opcoes_enquete1 = yield postgres_1.client.query('INSERT INTO opcoes_enquete(opcao, id_enquete) VALUES ($1, $2) RETURNING *', [opcao1, id_enquete]);
            const opcoes_enquete2 = yield postgres_1.client.query('INSERT INTO opcoes_enquete(opcao, id_enquete) VALUES ($1, $2) RETURNING *', [opcao2, id_enquete]);
            const opcoes_enquete3 = yield postgres_1.client.query('INSERT INTO opcoes_enquete(opcao, id_enquete) VALUES ($1, $2) RETURNING *', [opcao3, id_enquete]);
            const opcoes_enquete4 = yield postgres_1.client.query('INSERT INTO opcoes_enquete(opcao, id_enquete) VALUES ($1, $2) RETURNING *', [opcao4, id_enquete]);
            const opcoes_enquete5 = yield postgres_1.client.query('INSERT INTO opcoes_enquete(opcao, id_enquete) VALUES ($1, $2) RETURNING *', [opcao5, id_enquete]);
            const enquetexopcoes = yield postgres_1.client.query('SELECT enquete.id_enquete,enquete.titulo, enquete.descricao, opcoes_enquete.opcao FROM opcoes_enquete INNER JOIN enquete ON opcoes_enquete.id_enquete = enquete.id_enquete WHERE enquete.id_enquete=$1', [id_enquete]);
            return enquetexopcoes.rows;
        });
    }
}
exports.incluirEnqueteCaso = incluirEnqueteCaso;
