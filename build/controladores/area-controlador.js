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
const incluir_area_caso_1 = require("../casos-uso/area/incluir-area-caso");
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
}
exports.areaControlador = areaControlador;
