function pesquisar() {
    
            let section = document.getElementById("livros")
console.log(section)

let resultados = ""

for (let dado of coisas) {
resultados += `
    <div> 
        <h2>${dado.titulo}.titulo}</h2>
        <img src=${dado.capa} width="165px 2500px">
        <p><b>Sinopse: </b>${dado.sinopse}</p>

        <p><b>Gênero: </b>${dado.genero}</p>
    </div>`}
    section.innerHTML = resultados}