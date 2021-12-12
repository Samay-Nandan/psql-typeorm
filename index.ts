require('dotenv').config()
import express from "express"
import cors from "cors"
import { connection } from "./database/connection";
const api = require("./apis/crud")

const { PORT } = process.env
 
const app = express();

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
    connection();
})

app.use(api);
