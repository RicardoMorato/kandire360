import { Request, Response } from 'express'
import { Kandire360Repository } from '../../infrasctructure/repository/kandire_360'

const ListKandire360Controller = async (req: Request, res: Response) => {
    console.log('chegou aq')
    const repository = new Kandire360Repository()

    return res.send(repository.listAll())
}

export {
    ListKandire360Controller
}