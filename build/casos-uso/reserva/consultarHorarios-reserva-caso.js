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
exports.consultarHorariosCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
class consultarHorariosCaso {
    handle(reqbody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = reqbody;
            const dataBanco = data.split(" ")[0].split("/").reverse().join('-');
            const horarios = yield postgres_1.client.query('SELECT concat(horario_inicial,"-",horario_final) FROM reserva_area_comum WHERE data=$1', [dataBanco]);
            console.log(horarios);
            const horariosReservados = [];
            const horas = [];
            for (let i = 0; i <= 24; i++) {
                console.log(horas[i] = i + ":00:00-" + (i + 1) + ":00:00");
            }
            console.log(horarios.rows);
            return horarios.rows;
        });
    }
}
exports.consultarHorariosCaso = consultarHorariosCaso;
