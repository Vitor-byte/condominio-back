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
exports.alterarAreaCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
const api_erros_1 = require("../../helpers/api-erros");
class alterarAreaCaso {
    handle(reqParams, reqbody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = reqParams;
            const { nome, descricao, preco, imagem, situacao } = reqbody;
            const areaExiste = yield postgres_1.client.query('SELECT COUNT(1) FROM area_comum WHERE id_area_comum=$1', [id]);
            ;
            if (areaExiste.rows[0].count == 0) {
                throw new api_erros_1.BadRequestError('Aviso não existe!');
            }
            const area = yield postgres_1.client.query('UPDATE area_comum SET nome=$2, descricao=$3, preco=$4, imagem=$5, situacao=$6 WHERE id_area_comum=$1 RETURNING *', [id, nome, descricao, preco, imagem, situacao]);
            return area.rows;
        });
    }
}
exports.alterarAreaCaso = alterarAreaCaso;
