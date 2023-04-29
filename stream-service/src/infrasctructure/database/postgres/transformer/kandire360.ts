import { Kandire360Entity } from '../../../../domain/entity/kandire_360'
import { Kandire360Model } from '../model/kandire_360'

class Kandire360Transformer {
    toKandire360Entity(m: Kandire360Model): Kandire360Entity {
        return new Kandire360Entity(
            m.ID,
            m.ano, m.codGrandeRegiao, m.nomeGrandeRegiao, m.codUF,
            m.siglaUF, m.nomeUF, m.codMunicipio, m.nomeMunicipio,
            m.regiaoMetropolitana, m.codMesorregiao, m.nomeMesorregiao,
            m.codMicrorregiao,m.nomeMicrorregiao, m.codRegiaoGeograficaImediata,
            m.nomeRegiaoGeograficaimediata, m.municipioRegiaoGeograficaImediata,
            m.codRegiaoGeograficaIntermediaria, m.nomeRegiaoGeograficaIntermediaria,
            m.municipioRegiaoGeograficaIntermediaria, m.codConcentracaoUrbana,
            m.nomeConcentracaoUrbana,  m.tipoConcentracaoUrbana, m.codArranjoPopulacional,
            m.nomeArranjoPopulacional, m.hierarquiaUrbana, m.hierarquiaUrbanaPrincipaisCategorias,
            m.codRegiaoRural, m.nomeRegiaoRural, m.regiaoRuralSegundoClassificacaoNucleo,
            m.amazoniaLegal, m.semiarido, m.cidadeRegiaoSaoPaulo, m.valorAdicionadoBrutoAgropecuaria,
            m.valorAdicionadoBrutoIndustria,m.valorAdicionadoBrutoServicosExcetoAdministracaoDefesaEdu,
            m.valorAdicionadoBrutoAdministracaoDefesaSaudeEducacaoSaud, m.valorAdicionadoBrutoTotal,
            m.impostosLiquidosDeSubsidiosSobreProdutos, m.pib, m.pibPerCapita,
            m.atividadePrimeiroMaiorValorAdicionadoBruto, m.atividadeSegundoMaiorValorBruto,
            m.atividadeTerceiroMaiorValorBruto
        )
    }
}

export {
    Kandire360Transformer
}