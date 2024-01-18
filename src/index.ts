import express, { Request, Response } from "express";
import dotenv from "dotenv";
import routesApi from "./routes/index.routes";

//Cargo variables de entorno
dotenv.config();
//Destructuring de variables de entorno
const { PORT } = process.env;
//Asignamos servidor express a variable server.
const server = express();
//Iniciamos servidor express en puerto 3000
server.use(express.json());
//Aplicamos middlware para consumir rutas de la api.
server.use("/", routesApi)


server.listen(PORT, () => {
  console.log(`Servidor iniciando en el puerto ${PORT ?? 3000}`);
});
