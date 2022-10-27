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
exports.alterarCondominoCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
class alterarCondominoCaso {
    alterar(reqParams, reqBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = reqParams;
            const { rg, nome, senha, bloco, unidade } = reqBody;
            const verifica_rg = yield postgres_1.client.query('SELECT COUNT(1) FROM condomino WHERE rg=$1', [rg]);
            if (verifica_rg.rows[0].count != 0) {
                return "RG invalido!";
            }
            const condomino = yield postgres_1.client.query('UPDATE condomino SET rg=$2, nome_completo=$3, senha=$4, bloco=$5, unidade=$6 WHERE id_condomino=$1 RETURNING *', [id, rg, nome, bloco, unidade]);
            return condomino;
        });
    }
}
exports.alterarCondominoCaso = alterarCondominoCaso;
