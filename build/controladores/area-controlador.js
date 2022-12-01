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
exports.areaControlador = void 0;
const alterar_area_caso_1 = require("../casos-uso/area/alterar-area-caso");
const cancelar_reserva_caso_1 = require("../casos-uso/area/cancelar-reserva-caso");
const consulta_id_reserva_caso_1 = require("../casos-uso/area/consulta-id-reserva-caso");
const consultaId_area_caso_1 = require("../casos-uso/area/consultaId-area-caso");
const consultaId_reserva_caso_1 = require("../casos-uso/area/consultaId-reserva-caso");
const consultar_area_caso_1 = require("../casos-uso/area/consultar-area-caso");
const consultar_horario_caso_1 = require("../casos-uso/area/consultar-horario-caso");
const incluir_area_caso_1 = require("../casos-uso/area/incluir-area-caso");
const reservar_area_caso_1 = require("../casos-uso/area/reservar-area-caso");
class areaControlador {
    incluir(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new incluir_area_caso_1.incluirAreaCaso().handle(request.body);
            return response.status(200).json(resultado);
        });
    }
    alterar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new alterar_area_caso_1.alterarAreaCaso().handle(request.params, request.body);
            return response.status(201).json(resultado);
        });
    }
    consultar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new consultar_area_caso_1.consultarAreaCaso().handle();
            return response.status(201).json(resultado);
        });
    }
    consultaId(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new consultaId_area_caso_1.consultaIdAreaCaso().handle(request.params);
            return response.status(201).json(resultado);
        });
    }
    consultaReservaId(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new consulta_id_reserva_caso_1.consultaReservaIdAreaCaso().handle(request.params);
            return response.status(201).json(resultado);
        });
    }
    reservar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new reservar_area_caso_1.reservarAreaCaso().handle(request.body);
            return response.status(200).json(resultado);
        });
    }
    consultarHorario(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new consultar_horario_caso_1.consultarHorarioCaso().handle(request.params);
            return response.status(200).json(resultado);
        });
    }
    consultaIdReserva(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new consultaId_reserva_caso_1.consultaIdReservaCaso().handle(request.params);
            return response.status(200).json(resultado);
        });
    }
    cancelarReserva(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new cancelar_reserva_caso_1.cancelarReservaCaso().handle(request.params);
            return response.status(200).json(resultado);
        });
    }
}
exports.areaControlador = areaControlador;
