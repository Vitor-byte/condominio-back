import {Router} from "express";
import {condominoControlador} from "../controladores/condomino-controlador";
import {avisoControlador} from "../controladores/aviso-controlador";
const router = Router();

// Condomino
router.post("/condomino", new condominoControlador().incluir);
router.delete("/condomino/:id", new condominoControlador().excluir);
router.patch("/condomino/:id", new condominoControlador().alterar);
router.get("/condominos", new condominoControlador().consultar);

router.post("/aviso", new avisoControlador().incluir);
router.delete("/aviso/:id", new avisoControlador().excluir);
router.patch("/aviso/:id", new avisoControlador().alterar);
router.get("/avisos", new avisoControlador().consultar);

export{router};