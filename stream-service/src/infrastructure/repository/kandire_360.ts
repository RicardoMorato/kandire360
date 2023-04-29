import { Sequelize } from 'sequelize'
import { Kandire360Entity, MunicipioEntity, EstadoEntity } from '../../domain/entity/kandire_360'
import { Kandire360Model, kandire360ModelSequelize } from '../database/postgres/model/kandire_360'
import { Kandire360Transformer } from '../database/postgres/transformer/kandire360'

class Kandire360Repository {
    async listAll(): Promise<Kandire360Entity[]> {
        const transformer = new Kandire360Transformer()

        const data = await kandire360ModelSequelize.findAll({ where: { ano: '2010' } })

        return data ? data.map((el: any) => transformer.toKandire360Entity(el)) : []
    }

    async listEstados(): Promise<EstadoEntity[]> {
        const transformer = new Kandire360Transformer()
        const data = await kandire360ModelSequelize.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('sigla_uf')), 'sigla_uf'],
                ['cod_uf', 'cod_uf'],
                ['nome_uf', 'nome_uf']
            ],
            where: {
                ano: '2010'
            },
            order: [
                ['nome_uf', 'ASC']
            ]
        })

        return data ? data.map((el: any) => transformer.toEstadoEntity(el)) : []
    }

    async listMunicipios(codeUF: number): Promise<MunicipioEntity[]> {
        const transformer = new Kandire360Transformer()
        const data = await kandire360ModelSequelize.findAll({
            attributes: [
                ['cod_municipio', 'cod_municipio'],
                ['nome_municipio', 'nome_municipio']
            ], where: {
                ano: '2010',
                cod_uf: codeUF
            },
            order: [
                ['nome_municipio', 'ASC']
            ]
        })

        return data ? data.map((el: any) => transformer.toMunicipioEntity(el)): []
    }
}

export {
    Kandire360Repository
}