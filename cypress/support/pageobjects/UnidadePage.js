import UnidadeElements from '../elements/UnidadeElements'
const unidadeElements = new UnidadeElements
const url = Cypress.config("baseUrl")

class UnidadePage {
    // Acessa o site Fleury
    acessarSite() {
        cy.visit(url)
    }

    // Entra no menu Unidades
    clicarMenuUnidades() {
        cy.get(unidadeElements.menuUnidades()).click();
    }
  
    // Abrir filtro por facilidade para seleção
    abrirFiltroPorFacilidade() {
        cy.get(unidadeElements.campoFiltroFacilidade()).click();
    }

    // Selecionar o filtro de acordo com que vem da faeture
    selecionaFiltro(filtro){
        cy.get(unidadeElements.itemFiltroFacilidade()).contains(filtro).click();
    }

    // Validar se o nome passado na feature esta retornou no sitema
    validaUnidadeFiltrada(unidade){
        cy.get(unidadeElements.nomeUnidade()).should('contain', unidade);
    }
}

export default UnidadePage;