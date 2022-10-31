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
exports.avisoControlador = void 0;
const alterar_aviso_caso_1 = require("../casos-uso/aviso/alterar-aviso-caso");
const consultar_aviso_caso_1 = require("../casos-uso/aviso/consultar-aviso-caso");
const excluir_aviso_caso_1 = require("../casos-uso/aviso/excluir-aviso-caso");
const incluir_aviso_caso_1 = require("../casos-uso/aviso/incluir-aviso-caso");
class avisoControlador {
    incluir(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new incluir_aviso_caso_1.incluirAvisoCaso().handle(request.body);
            return response.status(200).json(resultado);
        });
    }
    excluir(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new excluir_aviso_caso_1.excluirAvisoCaso().handle(request.params);
            return response.status(201).json(resultado);
        });
    }
    alterar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new alterar_aviso_caso_1.alterarAvisoCaso().handle(request.params, request.body);
            return response.status(201).json(resultado);
        });
    }
    consultar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new consultar_aviso_caso_1.consultarAvisoCaso().handle();
            return response.status(201).json(resultado);
        });
    }
}
exports.avisoControlador = avisoControlador;
