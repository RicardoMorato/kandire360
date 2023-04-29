import express from 'express'
import { ListKandire360Controller } from '../kandire360Controller'

const routerKandire360 = express.Router()

routerKandire360.post('/kandire360', ListKandire360Controller)

export {
    routerKandire360
}