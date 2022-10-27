"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const condomino_controlador_1 = require("../controladores/condomino-controlador");
const router = (0, express_1.Router)();
exports.router = router;
// Condomino
router.post("/condomino", new condomino_controlador_1.condominoControlador().incluir);
router.delete("/condomino/:id", new condomino_controlador_1.condominoControlador().excluir);
router.patch("/condomino/:id", new condomino_controlador_1.condominoControlador().alterar);
