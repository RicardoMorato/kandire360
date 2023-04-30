import express from 'express'
import {
    ListKandire360Controller, ListEstadosController,
    ListMunicipiosByCodeUFController, GetMunicipioDashboardByCodMunicipioAndAnoController, sendEmailController,
} from '../kandire360Controller'

const routerKandire360 = express.Router()

routerKandire360.get('/kandire360', ListKandire360Controller)

routerKandire360.get('/estados', ListEstadosController)

routerKandire360.get('/municipiosByCodUF', ListMunicipiosByCodeUFController)

routerKandire360.get('/municipioDashboardByCodMunicipioAndAno', GetMunicipioDashboardByCodMunicipioAndAnoController)

routerKandire360.post('/send-email', sendEmailController)

export {
    routerKandire360
}