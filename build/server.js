"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const rotas_1 = require("./rotas/rotas");
var cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use(rotas_1.router);
app.listen(process.env.PORT || 6000, () => console.log("Server rodando"));
console.log(process.env.DATABASE_URL);
