import express from "express";
import dotenv from "dotenv";
import goalRoutes from "./routes/goalRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import ConnectDB from "./config/db.js";
import colors from 'colors';

dotenv.config()

ConnectDB()


const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', goalRoutes)
app.use('/api', userRoutes)


app.use(errorHandler)

app.listen(port, () => console.log("server is listening to port: ", port))