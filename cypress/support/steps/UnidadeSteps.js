import {Given} from "cypress-cucumber-preprocessor/steps"

import UnindadePage from '../pageobjects/UnidadePage'
const unidadesPage = new UnindadePage

Given("que Fulano acessou o site Fleury", () => {
    unidadesPage.acessarSite();
})

When("clicar no menu Unidades", () => {
    unidadesPage.clicarMenuUnidades();
})

And("abrir filtro por facilidade", () => {
    unidadesPage.abrirFiltroPorFacilidade();
})

// seleciona os filtros de acordo com a feature
And("selecionar {string}", nomeFiltro => {
    unidadesPage.selecionaFiltro(nomeFiltro);
})

// valida a unidade de acordo com o que foi passado na feature
Then("validar se a Unidade {string}", nomeUnidade => {
    unidadesPage.validaUnidadeFiltrada(nomeUnidade);
})
