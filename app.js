function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o que busca</p>"
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada item do resultado da pesquisa
            resultados += `
            <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a> 
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p> 
                        <a href=${dado.link} target="_blank">Mais Informações</a> 
            </div>
            `;
        } 
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados
}


//console.log(campoPesquisa);
