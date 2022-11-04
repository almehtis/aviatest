import express from "express";
import { router } from "./routes/index";
import cors from "cors";
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.listen(8080, () => console.log("server has 🚀 at http://localhost:8080"));
