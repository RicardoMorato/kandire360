import express from 'express'
import {
    ListKandire360Controller, ListEstadosController,
    ListMunicipiosByCodeUFController, GetMunicipioDashboardByCodMunicipioAndAno
} from '../kandire360Controller'

const routerKandire360 = express.Router()

routerKandire360.get('/kandire360', ListKandire360Controller)

routerKandire360.get('/estados', ListEstadosController)

routerKandire360.get('/municipiosByCodUF', ListMunicipiosByCodeUFController)

routerKandire360.get('/municipioDashboardByCodMunicipioAndAno', GetMunicipioDashboardByCodMunicipioAndAno)

export {
    routerKandire360
}