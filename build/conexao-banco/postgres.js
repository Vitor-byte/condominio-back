"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '../.env' });
const isProduction = process.env.NODE_ENV === 'production';
const { Client } = require("pg");
const connectionString = 'postgresql://Vitor:15340154@localhost:5432/teste';
const client = new Client({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString
});
exports.client = client;
client.connect();
