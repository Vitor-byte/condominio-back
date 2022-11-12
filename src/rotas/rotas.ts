import {Router} from "express";
import {condominoControlador} from "../controladores/condomino-controlador";
import {avisoControlador} from "../controladores/aviso-controlador";
import {sindicoControlador} from "../controladores/sindico-controlador";
import { chamadoControlador } from "../controladores/chamado-controlador";
import { loginControlador } from "../controladores/login-controlador";
import { enqueteControlador } from "../controladores/enquete-controlador";
import { areaControlador } from "../controladores/area-controlador";
import { reservaControlador } from "../controladores/reserva-controlador";

const router = Router();

// Condomino
router.post("/condomino", new condominoControlador().incluir);
router.delete("/condomino/:id", new condominoControlador().excluir);
router.patch("/condomino/:id", new condominoControlador().alterar);
router.get("/condominos", new condominoControlador().consultar);
router.get("/condomino/:id", new condominoControlador().consultaId);


//Aviso
router.post("/aviso", new avisoControlador().incluir);
router.delete("/aviso/:id", new avisoControlador().excluir);
router.patch("/aviso/:id", new avisoControlador().alterar);
router.get("/avisos", new avisoControlador().consultar);
router.get("/aviso/:id", new avisoControlador().consultaId);
//Chamado 
router.post("/chamado", new chamadoControlador().incluir);
router.delete("/chamado/:id", new chamadoControlador().excluir);
router.patch("/chamado/:id", new chamadoControlador().alterar);
router.patch("/chamado/cancelar/:id", new chamadoControlador().cancelar);
router.patch("/chamado/finalizar/:id", new chamadoControlador().finalizar);
router.get("/chamado/:id", new chamadoControlador().consultaId);

// Enquete 
router.post("/enquete", new enqueteControlador().incluir);
router.get("/enquetes", new enqueteControlador().consultar);
router.post("/enquete/votar", new enqueteControlador().votar);
router.post("/enquete/finalizar/:id", new enqueteControlador().finalizar);

//Area
router.post("/area", new areaControlador().incluir);
router.patch("/area/:id", new areaControlador().alterar);
router.get("/areas", new areaControlador().consultar);
router.get("/area/:id", new areaControlador().consultaId);

//Reserva
router.get("/horarios", new reservaControlador().consultarHorarios);


//Login 
router.get("/login", new loginControlador().verificaLogin);



//Sindico
router.post("/sindico", new sindicoControlador().incluir);
router.delete("/sindico/:id", new sindicoControlador().excluir);
router.patch("/sindico/:id", new sindicoControlador().alterar);
router.get("/sindicos", new sindicoControlador().consultar);

export{router};