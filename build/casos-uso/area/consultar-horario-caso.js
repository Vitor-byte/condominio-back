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
exports.consultarHorarioCaso = void 0;
const postgres_1 = require("../../conexao-banco/postgres");
class consultarHorarioCaso {
    handle(reqbody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = reqbody;
            const dataBanco = data.split(" ")[0].split("/").reverse().join('-');
            const horarios = yield postgres_1.client.query('SELECT horario_inicial, horario_final FROM reserva_area_comum WHERE data=$1', [dataBanco]);
            const horariosReservados = [];
            const horas = [
                '00:00:00-01:00:00', '01:00:00-02:00:00',
                '02:00:00-03:00:00', '03:00:00-04:00:00',
                '04:00:00-05:00:00', '05:00:00-06:00:00',
                '06:00:00-07:00:00', '07:00:00-08:00:00',
                '08:00:00-09:00:00', '09:00:00-10:00:00',
                '10:00:00-11:00:00', '11:00:00-12:00:00',
                '12:00:00-13:00:00', '13:00:00-14:00:00',
                '14:00:00-15:00:00', '15:00:00-16:00:00',
                '16:00:00-17:00:00', '17:00:00-18:00:00',
                '18:00:00-19:00:00', '19:00:00-20:00:00',
                '20:00:00-21:00:00', '21:00:00-22:00:00',
                '22:00:00-23:00:00', '23:00:00-24:00:00'
            ];
            horarios.rows.map(function (element, i) {
                horariosReservados[i] = element.horario_inicial + "-" + element.horario_final;
            });
            for (let i = 0; i <= horariosReservados.length; i++) {
                for (let j = 0; j <= horas.length; j++) {
                    if (horas[j] === horariosReservados[i]) {
                        horas.splice(j, 1);
                    }
                }
            }
            return horas;
        });
    }
}
exports.consultarHorarioCaso = consultarHorarioCaso;
