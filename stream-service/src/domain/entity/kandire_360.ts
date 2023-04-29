class Kandire360Entity {
    public ID: number
    public ano: number
    public codGrandeRegiao: number
    public nomeGrandeRegiao: string
    public codUF: number
    public siglaUF: string
    public nomeUF: string
    public codMunicipio: number
    public nomeMunicipio: string
    public regiaoMetropolitana: string
    public codMesorregiao: number
    public nomeMesorregiao: string
    public codMicrorregiao: number
    public nomeMicrorregiao: string
    public codRegiaoGeograficaImediata: number
    public nomeRegiaoGeograficaimediata: string
    public municipioRegiaoGeograficaImediata: string
    public codRegiaoGeograficaIntermediaria: number
    public nomeRegiaoGeograficaIntermediaria: string
    public municipioRegiaoGeograficaIntermediaria: string
    public codConcentracaoUrbana: number
    public nomeConcentracaoUrbana: string
    public tipoConcentracaoUrbana: string
    public codArranjoPopulacional: number
    public nomeArranjoPopulacional: string
    public hierarquiaUrbana: string
    public hierarquiaUrbanaPrincipaisCategorias: string
    public codRegiaoRural: number
    public nomeRegiaoRural: string
    public regiaoRuralSegundoClassificacaoNucleo: string
    public amazoniaLegal: string
    public semiarido: string
    public cidadeRegiaoSaoPaulo: string
    public valorAdicionadoBrutoAgropecuaria: number
    public valor_adicionado_bruto_industria: number
    public valorAdicionadoBrutoServicosExcetoAdministracaoDefesaEdu: number
    public valorAdicionadoBrutoAdministracaoDefesaSaudeEducacaoSaude: number
    public valorAdicionadoBrutoTotal: number
    public impostosLiquidosDeSubsidiosSobreProdutos: number
    public pib: number
    public pibPerCapita: number
    public atividadePrimeiroMaiorValorAdicionadoBruto: string
    public atividadeSegundoMaiorValorBruto: string
    public atividadeTerceiroMaiorValorBruto: string

    constructor(ID: number, ano: number, codGrandeRegiao: number, nomeGrandeRegiao: string,
        codUF: number, siglaUF: string, nomeUF: string,
        codMunicipio: number, nomeMunicipio: string, regiaoMetropolitana: string,
        codMesorregiao: number, nomeMesorregiao: string, codMicrorregiao: number,
        nomeMicrorregiao: string, codRegiaoGeograficaImediata: number,
        nomeRegiaoGeograficaimediata: string,
        municipioRegiaoGeograficaImediata: string, codRegiaoGeograficaIntermediaria: number,
        nomeRegiaoGeograficaIntermediaria: string, municipioRegiaoGeograficaIntermediaria: string,
        codConcentracaoUrbana: number, nomeConcentracaoUrbana: string,
        tipoConcentracaoUrbana: string, codArranjoPopulacional: number,
        nomeArranjoPopulacional: string, hierarquiaUrbana: string,
        hierarquiaUrbanaPrincipaisCategorias: string, codRegiaoRural: number,
        nomeRegiaoRural: string, regiaoRuralSegundoClassificacaoNucleo: string,
        amazoniaLegal: string, semiarido: string, cidadeRegiaoSaoPaulo: string,
        valorAdicionadoBrutoAgropecuaria: number, valor_adicionado_bruto_industria: number,
        valorAdicionadoBrutoServicosExcetoAdministracaoDefesaEdu: number,
        valorAdicionadoBrutoAdministracaoDefesaSaudeEducacaoSaude: number,
        valorAdicionadoBrutoTotal: number, impostosLiquidosDeSubsidiosSobreProdutos: number,
        pib: number, pibPerCapita: number, atividadePrimeiroMaiorValorAdicionadoBruto: string,
        atividadeSegundoMaiorValorBruto: string, atividadeTerceiroMaiorValorBruto: string) {
        this.ID = ID
        this.ano = ano;
        this.codGrandeRegiao = codGrandeRegiao;
        this.nomeGrandeRegiao = nomeGrandeRegiao;
        this.codUF = codUF;
        this.siglaUF = siglaUF;
        this.nomeUF = nomeUF;
        this.codMunicipio = codMunicipio;
        this.nomeMunicipio = nomeMunicipio;
        this.regiaoMetropolitana = regiaoMetropolitana;
        this.codMesorregiao = codMesorregiao;
        this.nomeMesorregiao = nomeMesorregiao;
        this.codMicrorregiao = codMicrorregiao;
        this.nomeMicrorregiao = nomeMicrorregiao;
        this.codRegiaoGeograficaImediata = codRegiaoGeograficaImediata
        this.nomeRegiaoGeograficaimediata = nomeRegiaoGeograficaimediata;
        this.municipioRegiaoGeograficaImediata = municipioRegiaoGeograficaImediata
        this.codRegiaoGeograficaIntermediaria = codRegiaoGeograficaIntermediaria
        this.nomeRegiaoGeograficaIntermediaria = nomeRegiaoGeograficaIntermediaria
        this.municipioRegiaoGeograficaIntermediaria = municipioRegiaoGeograficaIntermediaria
        this.codConcentracaoUrbana = codConcentracaoUrbana
        this.nomeConcentracaoUrbana = nomeConcentracaoUrbana
        this.tipoConcentracaoUrbana = tipoConcentracaoUrbana
        this.codArranjoPopulacional = codArranjoPopulacional
        this.nomeArranjoPopulacional = nomeArranjoPopulacional
        this.hierarquiaUrbana = hierarquiaUrbana
        this.hierarquiaUrbanaPrincipaisCategorias = hierarquiaUrbanaPrincipaisCategorias
        this.codRegiaoRural = codRegiaoRural
        this.nomeRegiaoRural = nomeRegiaoRural
        this.regiaoRuralSegundoClassificacaoNucleo = regiaoRuralSegundoClassificacaoNucleo
        this.amazoniaLegal = amazoniaLegal
        this.semiarido = semiarido
        this.cidadeRegiaoSaoPaulo = cidadeRegiaoSaoPaulo
        this.valorAdicionadoBrutoAgropecuaria = valorAdicionadoBrutoAgropecuaria
        this.valor_adicionado_bruto_industria = valor_adicionado_bruto_industria
        this.valorAdicionadoBrutoServicosExcetoAdministracaoDefesaEdu = valorAdicionadoBrutoServicosExcetoAdministracaoDefesaEdu
        this.valorAdicionadoBrutoAdministracaoDefesaSaudeEducacaoSaude = valorAdicionadoBrutoAdministracaoDefesaSaudeEducacaoSaude
        this.valorAdicionadoBrutoTotal = valorAdicionadoBrutoTotal
        this.impostosLiquidosDeSubsidiosSobreProdutos = impostosLiquidosDeSubsidiosSobreProdutos
        this.pib = pib
        this.pibPerCapita = pibPerCapita
        this.atividadePrimeiroMaiorValorAdicionadoBruto = atividadePrimeiroMaiorValorAdicionadoBruto
        this.atividadeSegundoMaiorValorBruto = atividadeSegundoMaiorValorBruto
        this.atividadeTerceiroMaiorValorBruto = atividadeTerceiroMaiorValorBruto
    }
}

export {
    Kandire360Entity
}