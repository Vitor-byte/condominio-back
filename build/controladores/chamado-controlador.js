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
exports.chamadoControlador = void 0;
const atender_chamado_caso_1 = require("../casos-uso/chamado/atender-chamado-caso");
const cancelar_chamado_caso_1 = require("../casos-uso/chamado/cancelar-chamado-caso");
const consulta_chamado_usuario_caso_1 = require("../casos-uso/chamado/consulta-chamado-usuario-caso");
const consulta_id_chamado_caso_1 = require("../casos-uso/chamado/consulta-id-chamado-caso");
const consulta_resposta_chamado_caso_1 = require("../casos-uso/chamado/consulta-resposta-chamado-caso");
const consultar_chamado_aberto_caso_1 = require("../casos-uso/chamado/consultar-chamado-aberto-caso");
const consultar_chamado_andamento_caso_1 = require("../casos-uso/chamado/consultar-chamado-andamento-caso");
const consultar_chamado_finalizado_caso_1 = require("../casos-uso/chamado/consultar-chamado-finalizado-caso");
const excluir_chamado_caso_1 = require("../casos-uso/chamado/excluir-chamado-caso");
const finalizar_chamado_caso_1 = require("../casos-uso/chamado/finalizar-chamado-caso");
const incluir_chamado_caso_1 = require("../casos-uso/chamado/incluir-chamado-caso");
class chamadoControlador {
    incluir(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new incluir_chamado_caso_1.incluirChamadoCaso().handle(request.body);
            return response.status(200).json(resultado);
        });
    }
    excluir(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new excluir_chamado_caso_1.excluirChamadoCaso().handle(request.params);
            return response.status(201).json(resultado);
        });
    }
    consultaResposta(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new consulta_resposta_chamado_caso_1.consultaRespostaChamadoCaso().handle(request.params);
            return response.status(201).json(resultado);
        });
    }
    consultaUsuario(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new consulta_chamado_usuario_caso_1.consultaUsuarioChamadoCaso().handle(request.params);
            return response.status(201).json(resultado);
        });
    }
    consultaIdChamado(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new consulta_id_chamado_caso_1.consultaIdChamadoCaso().handle(request.params);
            return response.status(201).json(resultado);
        });
    }
    consultarAbertos(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new consultar_chamado_aberto_caso_1.consultarChamadoAbertoCaso().handle();
            return response.status(201).json(resultado);
        });
    }
    consultarEmAndamento(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new consultar_chamado_andamento_caso_1.consultarChamadoEmAndamentoCaso().handle();
            return response.status(201).json(resultado);
        });
    }
    consultarFinalizados(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new consultar_chamado_finalizado_caso_1.consultarChamadoFinalizadosCaso().handle();
            return response.status(201).json(resultado);
        });
    }
    cancelar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new cancelar_chamado_caso_1.cancelarChamadoCaso().handle(request.params);
            return response.status(201).json(resultado);
        });
    }
    finalizar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new finalizar_chamado_caso_1.finalizarChamadoCaso().handle(request.params, request.body);
            return response.status(201).json(resultado);
        });
    }
    atender(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new atender_chamado_caso_1.atenderChamadoCaso().handle(request.params, request.body);
            return response.status(201).json(resultado);
        });
    }
}
exports.chamadoControlador = chamadoControlador;
