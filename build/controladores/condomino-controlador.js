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
exports.condominoControlador = void 0;
const incluir_condomino_caso_1 = require("../casos-uso/condomino/incluir-condomino-caso");
const excluir_condomino_caso_1 = require("../casos-uso/condomino/excluir-condomino-caso");
const alterar_condomino_caso_1 = require("../casos-uso/condomino/alterar-condomino-caso");
const consultar_condomino_caso_1 = require("../casos-uso/condomino/consultar-condomino-caso");
const consultaId_condomino_caso_1 = require("../casos-uso/condomino/consultaId-condomino-caso");
class condominoControlador {
    incluir(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new incluir_condomino_caso_1.incluirCondominoCaso().handle(request.body);
            return response.status(200).json(resultado);
        });
    }
    excluir(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new excluir_condomino_caso_1.excluirCondominoCaso().handle(request.params);
            return response.status(201).json(resultado);
        });
    }
    alterar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new alterar_condomino_caso_1.alterarCondominoCaso().handle(request.params, request.body);
            return response.status(201).json(resultado);
        });
    }
    consultar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new consultar_condomino_caso_1.consultarCondominoCaso().handle();
            return response.status(201).json(resultado);
        });
    }
    consultaId(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new consultaId_condomino_caso_1.consultaIdCondominoCaso().handle(request.params);
            return response.status(201).json(resultado);
        });
    }
}
exports.condominoControlador = condominoControlador;
