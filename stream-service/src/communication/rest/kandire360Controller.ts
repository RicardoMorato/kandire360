import { Request, Response } from 'express'
import { Kandire360Repository } from '../../infrastructure/repository/kandire_360'

const ListKandire360Controller = async (req: Request, res: Response) => {
    const repository = new Kandire360Repository()

    return res.send(await repository.listAll())
}

const ListEstadosController = async (req: Request, res: Response) => {
    const repository = new Kandire360Repository()

    return res.send(await repository.listEstados())
}

const listMunicipiosController = async (req: Request, res:Response) => {
    const repository = new Kandire360Repository()
    const { codUF } = req.query
    let codParse = 0
    if (typeof codUF === 'string') {
        codParse = codUF ? parseInt(codUF, 10) : 1
    }

    return res.send(await repository.listMunicipios(codParse))
}


export {
    ListKandire360Controller,
    ListEstadosController,
    listMunicipiosController
}