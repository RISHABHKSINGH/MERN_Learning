import express from "express";
import PublicRouter from "./Routes/public.route.js";
import Privaterouter from "./Routes/private.route.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs, { existsSync } from "fs";
import LogMiddleware from "./Middleware/logs.middleware.js";
const app = express();

//* InBuilt Middleware
app.use(express.json());

//* Global Custom Middleware
app.use(LogMiddleware)


//* Middleware for Routes
app.use("/public", PublicRouter);
app.use("/private", Privaterouter);



//* Filename and Dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ? Here we are checking that if logFolder does not exist create it with using mkdir method of fs module  
const logFolder = path.join(__dirname, "Logs");
if (!existsSync(logFolder)) {
  fs.mkdirSync(logFolder);
}

const port = 8080;
app.listen(port, () => {
  console.log("Server is Running at port ", port);
});
