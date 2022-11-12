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
exports.reservaControlador = void 0;
const consultarHorarios_reserva_caso_1 = require("../casos-uso/reserva/consultarHorarios-reserva-caso");
class reservaControlador {
    consultarHorarios(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new consultarHorarios_reserva_caso_1.consultarHorariosCaso().handle(request.body);
            return response.status(200).json(resultado);
        });
    }
}
exports.reservaControlador = reservaControlador;
