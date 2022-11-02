"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const condomino_controlador_1 = require("../controladores/condomino-controlador");
const aviso_controlador_1 = require("../controladores/aviso-controlador");
const sindico_controlador_1 = require("../controladores/sindico-controlador");
const router = (0, express_1.Router)();
exports.router = router;
// Condomino
router.post("/condomino", new condomino_controlador_1.condominoControlador().incluir);
router.delete("/condomino/:id", new condomino_controlador_1.condominoControlador().excluir);
router.patch("/condomino/:id", new condomino_controlador_1.condominoControlador().alterar);
router.get("/condominos", new condomino_controlador_1.condominoControlador().consultar);
//Aviso
router.post("/aviso", new aviso_controlador_1.avisoControlador().incluir);
router.delete("/aviso/:id", new aviso_controlador_1.avisoControlador().excluir);
router.patch("/aviso/:id", new aviso_controlador_1.avisoControlador().alterar);
router.get("/avisos", new aviso_controlador_1.avisoControlador().consultar);
//Sindico
router.post("/sindico", new sindico_controlador_1.sindicoControlador().incluir);
router.delete("/sindico/:id", new sindico_controlador_1.sindicoControlador().excluir);
router.patch("/sindico/:id", new sindico_controlador_1.sindicoControlador().alterar);
router.get("/sindico", new sindico_controlador_1.sindicoControlador().consultar);
