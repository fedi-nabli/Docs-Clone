import express from 'express'
import cors from 'cors'
import http from 'http'
import socket from 'socket.io'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import userRouter from './routes/userRoutes.js'
import documentRouter from './routes/documentRoutes.js'

dotenv.config()
connectDB()

const app = express()
var server = http.createServer(app)
var io = socket(server)

app.use(cors());
app.use(express.json())

app.use(userRouter)
app.use(documentRouter)

io.on('connection', (socket) => {
  socket.on('join', (documentId) => {
    socket.join(documentId)
  })
})

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
server.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))