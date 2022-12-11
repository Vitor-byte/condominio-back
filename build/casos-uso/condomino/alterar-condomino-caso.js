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
const api_erros_1 = require("../../helpers/api-erros");
class alterarCondominoCaso {
    handle(reqParams, reqbody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = reqParams;
            const { rg, nome, bloco, inadimplente, situacao, unidade, senha } = reqbody;
            const usuarioExiste = yield postgres_1.client.query('SELECT COUNT(1) FROM usuario WHERE id_usuario=$1', [id]);
            if (usuarioExiste.rows[0].count == 0) {
                throw new api_erros_1.BadRequestError("Usuario não existe!");
            }
            const rgExiste = yield postgres_1.client.query('SELECT COUNT(1) FROM usuario WHERE rg=$1 AND id_usuario !=$2', [rg, id]);
            if (rgExiste.rows[0].count > 0) {
                throw new api_erros_1.BadRequestError('RG inválido!');
            }
            const usuario = yield postgres_1.client.query('UPDATE usuario SET rg=$2, nome=$3, inadimplente=$4, situacao=$5, bloco=$6, unidade=$7,senha=$8 WHERE id_usuario=$1 RETURNING *', [id, rg, nome, inadimplente, situacao, bloco, unidade, senha]);
            return usuario.rows;
        });
    }
}
exports.alterarCondominoCaso = alterarCondominoCaso;
