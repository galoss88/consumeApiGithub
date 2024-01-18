"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//Cargo variables de entorno
dotenv_1.default.config();
//Destructuring de variables de entorno
const { PORT } = process.env;
//Asignamos servidor express a variable server.
const server = (0, express_1.default)();
//Iniciamos servidor express en puerto 3000
server.use(express_1.default.json());
server.get("/", (req, res) => {
    res.send("Primera ruta");
});
server.listen(PORT, () => {
    console.log(`Servidor iniciando en el puerto ${PORT !== null && PORT !== void 0 ? PORT : 3000}`);
});
