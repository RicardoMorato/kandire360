import { Sequelize, QueryTypes } from 'sequelize'
import { Kandire360Entity, MunicipioEntity, EstadoEntity, MunicipioDashboardEntity } from '../../domain/entity/kandire_360'
import { Kandire360Model, kandire360ModelSequelize } from '../database/postgres/model/kandire_360'
import { Kandire360Transformer } from '../database/postgres/transformer/kandire360'
import { sequelize } from '../database/postgres/config/connect'

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

    async listMunicipiosByCodeUF(codUF: number): Promise<MunicipioEntity[]> {
        const transformer = new Kandire360Transformer()
        const data = await sequelize.query(`
            SELECT pm.cod_municipio, pm.nome_municipio, MAX(CAST(REPLACE(pm.pib, '.', '') AS NUMERIC)) AS "maxPib" 
            FROM register.pib_municipos_tb pm
            WHERE pm.cod_uf = :codUF
            GROUP BY pm.nome_municipio, pm.cod_municipio
            ORDER BY pm.nome_municipio
            `, {
            replacements: { codUF },
            type: QueryTypes.SELECT
        });

        return data ? data.map((el: any) => transformer.toMunicipioEntity(el)) : []
    }
    async getMunicipioByCodMunicipio(codMunicipio: number, ano: number): Promise<MunicipioDashboardEntity> {
        const transformer = new Kandire360Transformer()
        const data = await kandire360ModelSequelize.findOne({
            attributes: [
                ['ano', 'ano'],
                ['pib', 'pib']
            ], where: {
                ano,
                cod_municipio: codMunicipio
            }
        })

        return data ? transformer.toMunicipioDashboard(data) : null
    }

    async getMunicipioNameByCodMunicipio(codMunicipio: number): Promise<MunicipioDashboardEntity> {
        const data:any = await kandire360ModelSequelize.findOne({
            attributes: [
                ['nome_municipio', 'nome_municipio'],
            ], where: {
                cod_municipio: codMunicipio
            }
        })

        return data ? data.nome_municipio : null
    }

}

export {
    Kandire360Repository
}