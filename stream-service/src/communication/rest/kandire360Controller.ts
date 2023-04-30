import { Request, Response } from 'express'
import { Kandire360Repository } from '../../infrastructure/repository/kandire_360'
import { sendEmail } from '../../domain/usecase/rabbitmq';

const ListKandire360Controller = async (req: Request, res: Response) => {
    const repository = new Kandire360Repository()

    return res.send(await repository.listAll())
}

const ListEstadosController = async (req: Request, res: Response) => {
    const repository = new Kandire360Repository()

    return res.send(await repository.listEstados())
}

const ListMunicipiosByCodeUFController = async (req: Request, res: Response) => {
    const repository = new Kandire360Repository()
    const { codUF } = req.query

    let codParse = 0

    if (typeof codUF === 'string') {
        codParse = codUF ? parseInt(codUF, 10) : 1
    }

    return res.send(await repository.listMunicipiosByCodeUF(codParse))
}

const GetMunicipioDashboardByCodMunicipioAndAnoController = async (req: Request, res: Response) => {
    const repository = new Kandire360Repository()

    const { codMunicipio } = req.query

    let codMunicipioParse = 0
    let anoParse = 0

    if (typeof codMunicipio === 'string') {
        codMunicipioParse = parseInt(codMunicipio, 10)
    }

    return res.send(await repository.getMunicipioByCodMunicipio(codMunicipioParse, 2010))
}

const sendEmailController = async (req: Request, res: Response) => {
    const { email, payload } = req.body;

    return res.send(await sendEmail(email, payload))
}

export {
    ListKandire360Controller,
    ListEstadosController,
    ListMunicipiosByCodeUFController,
    GetMunicipioDashboardByCodMunicipioAndAnoController,
    sendEmailController,
}