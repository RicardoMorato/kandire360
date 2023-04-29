import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { routerKandire360 } from '../router/kandire360'

const app = express()
const PORT = 8080

function initRestServer() {
    const options: cors.CorsOptions = {
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
        allowedHeaders: ['x-requested-with, content-type', 'authorization', 'origin', 'accept', 'x-access-token'],
        credentials: true,
        maxAge: 86400,
        preflightContinue: true
    }
    app.use(cors(options))
    app.options('*', cors(options))
    app.use(morgan('dev'))
    app.use(express.json())
    app.use(cors(options), routerKandire360)

    app.listen(PORT, () => {
        console.log(`Rest Server on ${PORT}`)
    })
}

export {
    initRestServer
}