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
exports.incluirAreaCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
class incluirAreaCaso {
    handle(reqbody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, descricao, preco, imagem } = reqbody;
            const area = yield postgres_1.client.query('INSERT INTO area_comum( nome, descricao, preco, situacao, imagem ) VALUES ($1, $2, $3, $4, $5) RETURNING *', [nome, descricao, preco, "Aberta", imagem]);
            return area.rows;
        });
    }
}
exports.incluirAreaCaso = incluirAreaCaso;
