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
exports.enqueteControlador = void 0;
const consultar_enquete_caso_1 = require("../casos-uso/enquete/consultar-enquete-caso");
const incluir_enquete_caso_1 = require("../casos-uso/enquete/incluir-enquete-caso");
const votar_enquete_caso_1 = require("../casos-uso/enquete/votar-enquete-caso");
class enqueteControlador {
    incluir(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new incluir_enquete_caso_1.incluirEnqueteCaso().handle(request.body);
            return response.status(200).json(resultado);
        });
    }
    consultar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new consultar_enquete_caso_1.consultarEnqueteCaso().handle();
            return response.status(200).json(resultado);
        });
    }
    votar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield new votar_enquete_caso_1.votarEnqueteCaso().handle(request.body);
            return response.status(200).json(resultado);
        });
    }
}
exports.enqueteControlador = enqueteControlador;
