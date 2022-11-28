"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const condomino_controlador_1 = require("../controladores/condomino-controlador");
const aviso_controlador_1 = require("../controladores/aviso-controlador");
const sindico_controlador_1 = require("../controladores/sindico-controlador");
const chamado_controlador_1 = require("../controladores/chamado-controlador");
const login_controlador_1 = require("../controladores/login-controlador");
const enquete_controlador_1 = require("../controladores/enquete-controlador");
const area_controlador_1 = require("../controladores/area-controlador");
const router = (0, express_1.Router)();
exports.router = router;
// Condomino
router.post("/condomino", new condomino_controlador_1.condominoControlador().incluir);
router.delete("/condomino/:id", new condomino_controlador_1.condominoControlador().excluir);
router.patch("/condomino/:id", new condomino_controlador_1.condominoControlador().alterar);
router.get("/condominos", new condomino_controlador_1.condominoControlador().consultar);
router.get("/condomino/:id", new condomino_controlador_1.condominoControlador().consultaId);
//Aviso
router.post("/aviso", new aviso_controlador_1.avisoControlador().incluir);
router.delete("/aviso/:id", new aviso_controlador_1.avisoControlador().excluir);
router.patch("/aviso/:id", new aviso_controlador_1.avisoControlador().alterar);
router.get("/avisos", new aviso_controlador_1.avisoControlador().consultar);
router.get("/aviso/:id", new aviso_controlador_1.avisoControlador().consultaId);
//Chamado 
router.post("/chamado", new chamado_controlador_1.chamadoControlador().incluir);
router.delete("/chamado/:id", new chamado_controlador_1.chamadoControlador().excluir);
router.patch("/chamado/cancelar/:id", new chamado_controlador_1.chamadoControlador().cancelar);
router.patch("/chamado/finalizar/:id", new chamado_controlador_1.chamadoControlador().finalizar);
router.get("/chamado/:id", new chamado_controlador_1.chamadoControlador().consultaId);
router.get("/chamados/abertos", new chamado_controlador_1.chamadoControlador().consultarAbertos);
router.get("/chamados/andamento", new chamado_controlador_1.chamadoControlador().consultarEmAndamento);
router.get("/chamados/finalizados", new chamado_controlador_1.chamadoControlador().consultarFinalizados);
router.get("/chamado:id", new chamado_controlador_1.chamadoControlador().consultaUsuario);
router.patch("/chamado/:id", new chamado_controlador_1.chamadoControlador().atender);
// Enquete 
router.post("/enquete", new enquete_controlador_1.enqueteControlador().incluir);
router.get("/enquetes", new enquete_controlador_1.enqueteControlador().consultar);
router.post("/enquete/votar", new enquete_controlador_1.enqueteControlador().votar);
router.post("/enquete/finalizar/:id", new enquete_controlador_1.enqueteControlador().finalizar);
router.patch("/enquete/cancelar/:id", new enquete_controlador_1.enqueteControlador().cancelar);
//Area
router.post("/area", new area_controlador_1.areaControlador().incluir);
router.patch("/area/:id", new area_controlador_1.areaControlador().alterar);
router.get("/areas", new area_controlador_1.areaControlador().consultar);
router.get("/area/:id", new area_controlador_1.areaControlador().consultaId);
//Reserva
router.get("/horarios", new area_controlador_1.areaControlador().consultarHorario);
router.post("/reservar", new area_controlador_1.areaControlador().reservar);
router.get("/reservas/:id", new area_controlador_1.areaControlador().consultaIdReserva);
router.patch("/cancelar/reserva/:id", new area_controlador_1.areaControlador().cancelarReserva);
//Login 
router.get("/login", new login_controlador_1.loginControlador().verificaLogin);
//Sindico
router.post("/sindico", new sindico_controlador_1.sindicoControlador().incluir);
router.delete("/sindico/:id", new sindico_controlador_1.sindicoControlador().excluir);
router.patch("/sindico/:id", new sindico_controlador_1.sindicoControlador().alterar);
router.get("/sindicos", new sindico_controlador_1.sindicoControlador().consultar);
