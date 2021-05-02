class UnidadeElements {
    // retorna caminho exato do menu Unidades
    menuUnidades = () => { 
        return '.boxcomponentstyle__HboxStyled-sc-43ermp-0 > :nth-child(16)' 
    }

    // retorna o caminho exato do select das facilidades
    campoFiltroFacilidade = () => { 
        return '.checkbox-selectcomponentstyle__CheckboxSelectPlaceholderStyled-sc-7ktrvg-2' 
    }

    // retorna o caminho de todos os item, para ser clicado com o nome
    itemFiltroFacilidade = () => { 
        return '.checkbox-selectcomponentstyle__CheckboxSelectScrollStyled-sc-7ktrvg-4' 
    }

    //retorna o caminho do nome da unidade para ser validado
    nomeUnidade = () => { 
        return '.typographycomponentstyle__H3-sc-1oox73n-3'
    }
}

export default UnidadeElements;