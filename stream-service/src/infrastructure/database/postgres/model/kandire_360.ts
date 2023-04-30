import { DataType, DataTypes, Model } from "sequelize"
import { sequelize } from "../config/connect"

class Kandire360Model extends Model {
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
    public valorAdicionadoBrutoIndustria: number
    public valorAdicionadoBrutoServicosExcetoAdministracaoDefesaEdu: number
    public valorAdicionadoBrutoAdministracaoDefesaSaudeEducacaoSaud: number
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
        valorAdicionadoBrutoAgropecuaria: number, valorAdicionadoBrutoIndustria: number,
        valorAdicionadoBrutoServicosExcetoAdministracaoDefesaEdu: number,
        valorAdicionadoBrutoAdministracaoDefesaSaudeEducacaoSaud: number,
        valorAdicionadoBrutoTotal: number, impostosLiquidosDeSubsidiosSobreProdutos: number,
        pib: number, pibPerCapita: number, atividadePrimeiroMaiorValorAdicionadoBruto: string,
        atividadeSegundoMaiorValorBruto: string, atividadeTerceiroMaiorValorBruto: string) {
        super()
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
        this.valorAdicionadoBrutoIndustria = valorAdicionadoBrutoIndustria
        this.valorAdicionadoBrutoServicosExcetoAdministracaoDefesaEdu = valorAdicionadoBrutoServicosExcetoAdministracaoDefesaEdu
        this.valorAdicionadoBrutoAdministracaoDefesaSaudeEducacaoSaud = valorAdicionadoBrutoAdministracaoDefesaSaudeEducacaoSaud
        this.valorAdicionadoBrutoTotal = valorAdicionadoBrutoTotal
        this.impostosLiquidosDeSubsidiosSobreProdutos = impostosLiquidosDeSubsidiosSobreProdutos
        this.pib = pib
        this.pibPerCapita = pibPerCapita
        this.atividadePrimeiroMaiorValorAdicionadoBruto = atividadePrimeiroMaiorValorAdicionadoBruto
        this.atividadeSegundoMaiorValorBruto = atividadeSegundoMaiorValorBruto
        this.atividadeTerceiroMaiorValorBruto = atividadeTerceiroMaiorValorBruto
    }
}

const kandire360ModelSequelize = sequelize.define('Kandire360Model',{
    ID: {
        type: DataTypes.STRING,
        field: 'id',
        primaryKey: true
    },
    ano: {
        type: DataTypes.INTEGER,
        field: 'ano',
        allowNull: true
    },
    codGrandeRegiao: {
        type: DataTypes.INTEGER,
        field: 'cod_grande_regiao',
        allowNull: true
    },
    nomeGrandeRegiao: {
        type: DataTypes.STRING,
        field: 'nome_grande_regiao',
        allowNull: true
    },
    codUF: {
        type: DataTypes.INTEGER,
        field: 'cod_uf',
        allowNull: true
    },
    siglaUF: {
        type: DataTypes.STRING,
        field: 'sigla_uf',
        allowNull: true
    },
    nomeUF: {
        type: DataTypes.STRING,
        field: 'nome_uf',
        allowNull: true
    },
    codMunicipio: {
        type: DataTypes.INTEGER,
        field: 'cod_municipio',
        allowNull: true
    },
    nomeMunicipio: {
        type: DataTypes.STRING,
        field: 'nome_municipio',
        allowNull: true
    },
    regiaoMetropolitana: {
        type: DataTypes.STRING,
        field: 'regiao_metropolitana',
        allowNull: true
    },
    codMesorregiao: {
        type: DataTypes.INTEGER,
        field: 'cod_mesorregiao',
        allowNull: true
    },
    nomeMesorregiao: {
        type: DataTypes.STRING,
        field: 'nome_mesorregiao',
        allowNull: true
    },
    codMicrorregiao: {
        type: DataTypes.INTEGER,
        field: 'cod_microrregiao',
        allowNull: true
    },
    nomeMicrorregiao: {
        type: DataTypes.STRING,
        field: 'nome_microrregiao',
        allowNull: true
    },
    codRegiaoGeograficaImediata: {
        type: DataTypes.INTEGER,
        field: 'cod_regiao_geografica_imediata',
        allowNull: true
    },
    nomeRegiaoGeograficaImediata: {
        type: DataTypes.STRING,
        field: 'nome_regiao_geografica_imediata',
        allowNull: true
    },
    municipioRegiaoGeograficaImediata: {
        type: DataTypes.STRING,
        field: 'municipio_regiao_geografica_imediata',
        allowNull: true
    },
    codRegiaoGeograficaIntermediaria: {
        type: DataTypes.INTEGER,
        field: 'cod_regiao_geografica_intermediaria',
        allowNull: true
    },
    nomeRegiaoGeograficaIntermediaria: {
        type: DataTypes.STRING,
        field: 'nome_regiao_geografica_intermediaria',
        allowNull: true
    },
    municipioRegiaoGeograficaIntermediaria: {
        type: DataTypes.STRING,
        field: 'municipio_regiao_geografica_intermediaria',
        allowNull: true
    },
    codConcentracaoUrbana: {
        type: DataTypes.INTEGER,
        field: 'cod_concentracao_urbana',
        allowNull: true
    },
    nomeConcentracaoUrbana: {
        type: DataTypes.STRING,
        field: 'nome_concentracao_urbana',
        allowNull: true
    },
    tipoConcentracaoUrbana: {
        type: DataTypes.STRING,
        field: 'nome_concentracao_urbana',
        allowNull: true
    },
    codArranjoPopulacional: {
        type: DataTypes.INTEGER,
        field: 'cod_arranjo_populacional',
        allowNull: true
    },
    nomeArranjoPopulacional: {
        type: DataTypes.STRING,
        field: 'nome_arranjo_populacional',
        allowNull: true
    },
    hierarquiaUrbana: {
        type: DataTypes.STRING,
        field: 'hierarquia_urbana',
        allowNull: true
    },
    hierarquiaUrbanaPrincipaisCategorias: {
        type: DataTypes.STRING,
        field: 'hierarquia_urbana_principais_categorias',
        allowNull: true
    },
    codRegiaoRural: {
        type: DataTypes.STRING,
        field: 'cod_regiao_rural',
        allowNull: true
    },
    nomeRegiaoRural: {
        type: DataTypes.STRING,
        field: 'nome_regiao_rural',
        allowNull: true
    },
    regiaoRuralSegundoClassificacaoNucleo: {
        type: DataTypes.STRING,
        field: 'regiao_rural_segundo_classificacao_nucleo',
        allowNull: true
    },
    amazoniaLegal: {
        type: DataTypes.STRING,
        field: 'amazonia_legal',
        allowNull: true
    },
    semiarido: {
        type: DataTypes.STRING,
        field: 'semiarido',
        allowNull: true
    },
    cidadeRegiaoSaoPaulo: {
        type: DataTypes.STRING,
        field: 'cidade_regiao_sao_paulo',
        allowNull: true
    },
    valorAdicionadoBrutoAgropecuaria: {
        type: DataTypes.REAL,
        field: 'valor_adicionado_bruto_agropecuaria',
        allowNull: true
    },
    valorAdicionadoBrutoIndustria: {
        type: DataTypes.REAL,
        field: 'valor_adicionado_bruto_industria',
        allowNull: true
    },
    valorAdicionadoBrutoServicosExcetoAdministracaoDefesaEdu: {
        type: DataTypes.REAL,
        field: 'valor_adicionado_bruto_servicos_exceto_administracao_defesa_edu',
        allowNull: true
    },
    valorAdicionadoBrutoAdministracaoDefesaSaudeEducacaoSaud: {
        type: DataTypes.REAL,
        field: 'valor_adicionado_bruto_administracao_defesa_saude_educacao_saud',
        allowNull: true
    },
    valorAdicionadoBrutoTotal: {
        type: DataTypes.REAL,
        field: 'valor_adicionado_bruto_total',
        allowNull: true
    },
    impostosLiquidosDeSubsidiosSobreProdutos: {
        type: DataTypes.REAL,
        field: 'impostos_liquidos_de_subsidios_sobre_produtos',
        allowNull: true
    },
    pib: {
        type: DataTypes.REAL,
        field: 'pib',
        allowNull: true
    },
    pibPerCapita: {
        type: DataTypes.REAL,
        field: 'pib_per_capita',
        allowNull: true
    },
    atividadePrimeiroMaiorValorAdicionadoBruto: {
        type: DataTypes.STRING,
        field: 'atividade_primeiro_maior_valor_adicionado_bruto',
        allowNull: true
    },
    atividadeSegundoMaiorValorBruto: {
        type: DataTypes.STRING,
        field: 'atividade_segundo_maior_valor_bruto',
        allowNull: true
    },
    atividadeTerceiroMaiorValorBruto: {
        type: DataTypes.STRING,
        field: 'atividade_terceiro_maior_valor_bruto',
        allowNull: true
    },
}, {
    schema: 'register',
    tableName: 'pib_municipos_tb',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    
})

export {
    Kandire360Model,
    kandire360ModelSequelize
}