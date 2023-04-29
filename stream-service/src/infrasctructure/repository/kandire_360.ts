import { Kandire360Entity } from '../../domain/entity/kandire_360'
import { Kandire360Model, kandire360ModelSequelise } from '../database/postgres/model/kandire_360'
import { Kandire360Transformer } from '../database/postgres/transformer/kandire360'

class Kandire360Repository {
    async listAll(): Promise<Kandire360Entity[]> {
        const transformer = new Kandire360Transformer()
        const data = await kandire360ModelSequelise.findAll()

        return data ? data.map((el: any) => transformer.toKandire360Entity(el)): []
    }
}

export {
    Kandire360Repository
}