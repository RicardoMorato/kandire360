import express from 'express'
import {
    ListKandire360Controller, ListEstadosController,
    ListMunicipiosByCodeUFController, GetMunicipioDashboardByCodMunicipioAndAnoController
} from '../kandire360Controller'

const routerKandire360 = express.Router()

routerKandire360.get('/kandire360', ListKandire360Controller)

routerKandire360.get('/estados', ListEstadosController)

routerKandire360.get('/municipiosByCodUF', ListMunicipiosByCodeUFController)

routerKandire360.get('/municipioDashboardByCodMunicipioAndAno', GetMunicipioDashboardByCodMunicipioAndAnoController)

export {
    routerKandire360
}