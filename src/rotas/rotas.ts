import {Router} from "express";
import {condominoControlador} from "../controladores/condomino-controlador";
import {avisoControlador} from "../controladores/aviso-controlador";
import {sindicoControlador} from "../controladores/sindico-controlador";

const router = Router();

// Condomino
router.post("/condomino", new condominoControlador().incluir);
router.delete("/condomino/:id", new condominoControlador().excluir);
router.patch("/condomino/:id", new condominoControlador().alterar);
router.get("/condominos", new condominoControlador().consultar);

//Aviso
router.post("/aviso", new avisoControlador().incluir);
router.delete("/aviso/:id", new avisoControlador().excluir);
router.patch("/aviso/:id", new avisoControlador().alterar);
router.get("/avisos", new avisoControlador().consultar);

//Sindico
router.post("/sindico", new sindicoControlador().incluir);
router.delete("/sindico/:id", new sindicoControlador().excluir);
router.patch("/sindico/:id", new sindicoControlador().alterar);
router.get("/sindicos", new sindicoControlador().consultar);

export{router};