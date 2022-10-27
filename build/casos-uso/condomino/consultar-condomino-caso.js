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
exports.consultarCondominoCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
class consultarCondominoCaso {
    consultarId(reqParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = reqParams;
            const condomino = yield postgres_1.client.query('SELECT * FROM condomino WHERE id=$1', [id]);
            return condomino;
        });
    }
    consultar() {
        return __awaiter(this, void 0, void 0, function* () {
            const condominos = yield postgres_1.client.query('SELECT * FROM condomino LIMIT 10');
            return condominos.rows;
        });
    }
}
exports.consultarCondominoCaso = consultarCondominoCaso;
