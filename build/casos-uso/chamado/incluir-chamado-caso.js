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
exports.incluirChamadoCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
class incluirChamadoCaso {
    handle(reqParams, reqbody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_usuario } = reqParams;
            const { titulo, descricao } = reqbody;
            const chamado = yield postgres_1.client.query('INSERT INTO chamado(titulo, descricao, situacao, id_usuario) VALUES ($1, $2, $3, $4) RETURNING *', [titulo, descricao, "Aberto", id_usuario]);
            return chamado.rows;
        });
    }
}
exports.incluirChamadoCaso = incluirChamadoCaso;
