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
exports.sindicoControlador = void 0;
const alterar_sindico_caso_1 = require("../casos-uso/sindico/alterar-sindico-caso");
const consultar_sindico_caso_1 = require("../casos-uso/sindico/consultar-sindico-caso");
const excluir_sindico_caso_1 = require("../casos-uso/sindico/excluir-sindico-caso");
const incluir_sindico_caso_1 = require("../casos-uso/sindico/incluir-sindico-caso");
class sindicoControlador {
    incluir(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new incluir_sindico_caso_1.incluirSindicoCaso().handle(request.body);
            return response.status(200).json(resultado);
        });
    }
    excluir(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new excluir_sindico_caso_1.excluirSindicoCaso().handle(request.params);
            return response.status(201).json(resultado);
        });
    }
    alterar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new alterar_sindico_caso_1.alterarSindicoCaso().handle(request.params, request.body);
            return response.status(201).json(resultado);
        });
    }
    consultar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new consultar_sindico_caso_1.consultarSindicoCaso().handle();
            return response.status(201).json(resultado);
        });
    }
}
exports.sindicoControlador = sindicoControlador;
