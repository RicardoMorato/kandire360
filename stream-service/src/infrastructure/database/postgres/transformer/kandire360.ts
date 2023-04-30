import { Kandire360Entity, MunicipioEntity, EstadoEntity, MunicipioDashboardEntity } from '../../../../domain/entity/kandire_360'
import { Kandire360Model } from '../model/kandire_360'

class Kandire360Transformer {
    toKandire360Entity(m: Kandire360Model): Kandire360Entity {
        return new Kandire360Entity(
            m.ID,
            m.ano, m.codGrandeRegiao, m.nomeGrandeRegiao, m.codUF,
            m.siglaUF, m.nomeUF, m.codMunicipio, m.nomeMunicipio,
            m.regiaoMetropolitana, m.codMesorregiao, m.nomeMesorregiao,
            m.codMicrorregiao, m.nomeMicrorregiao, m.codRegiaoGeograficaImediata,
            m.nomeRegiaoGeograficaimediata, m.municipioRegiaoGeograficaImediata,
            m.codRegiaoGeograficaIntermediaria, m.nomeRegiaoGeograficaIntermediaria,
            m.municipioRegiaoGeograficaIntermediaria, m.codConcentracaoUrbana,
            m.nomeConcentracaoUrbana, m.tipoConcentracaoUrbana, m.codArranjoPopulacional,
            m.nomeArranjoPopulacional, m.hierarquiaUrbana, m.hierarquiaUrbanaPrincipaisCategorias,
            m.codRegiaoRural, m.nomeRegiaoRural, m.regiaoRuralSegundoClassificacaoNucleo,
            m.amazoniaLegal, m.semiarido, m.cidadeRegiaoSaoPaulo, m.valorAdicionadoBrutoAgropecuaria,
            m.valorAdicionadoBrutoIndustria, m.valorAdicionadoBrutoServicosExcetoAdministracaoDefesaEdu,
            m.valorAdicionadoBrutoAdministracaoDefesaSaudeEducacaoSaud, m.valorAdicionadoBrutoTotal,
            m.impostosLiquidosDeSubsidiosSobreProdutos, m.pib, m.pibPerCapita,
            m.atividadePrimeiroMaiorValorAdicionadoBruto, m.atividadeSegundoMaiorValorBruto,
            m.atividadeTerceiroMaiorValorBruto
        )
    }

    toEstadoEntity(row: any): EstadoEntity {
        const { sigla_uf, cod_uf, nome_uf } = row.dataValues
        return new EstadoEntity(sigla_uf, cod_uf, nome_uf)
    }

    toMunicipioEntity(row: any): MunicipioEntity {
        const { cod_municipio, nome_municipio, maxPib } = row

        return new MunicipioEntity(cod_municipio, nome_municipio, Number(maxPib))
    }

    formatedMinVlaue(value: number) {
        if (value < 10) return '0' + value

        return value
    }

    toMunicipioDashboard(row: any): any {
        const { ano, pib } = row.dataValues

        const map = {
            mm: () => {
                const mm = Math.floor((Math.random() * 12) + 1)

                return this.formatedMinVlaue(mm)
            },
            dd: () => {
                const dd = Math.floor((Math.random() * 30) + 1)

                return this.formatedMinVlaue(dd)
            },
            aaaa: ano,
            hh: () => {
                const hh = Math.floor((Math.random() * 24) + 1)

                return this.formatedMinVlaue(hh)
            },
            m: () => {
                const m = Math.floor((Math.random() * 60) + 0)

                return this.formatedMinVlaue(m)
            }
        }
        const formatDate = `${map.aaaa}/${map.mm()}/${map.dd()}`
        return new MunicipioDashboardEntity(formatDate, Number(pib.replaceAll('.', '')))
    }
}

export {
    Kandire360Transformer
}