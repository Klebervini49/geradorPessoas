/**
 * Autor: Kleberson Vinicius
 * Data: 06/01/2022
 * 
 */

document.querySelector('.gerarPessoa').addEventListener('click', async () => {
    // Pega as informações principais
    let result = await fetch('https://randomuser.me/api/'),
        jsonResult = await result.json(),
        resultsInfo = jsonResult.results[0],

        img = resultsInfo.picture.large,
        primeiroNome = resultsInfo.name.first,
        ultimoNome = resultsInfo.name.last,
        genero = resultsInfo.gender,
        pais = resultsInfo.location.country,
        cidade = resultsInfo.location.city,
        estado = resultsInfo.location.state,

        docImg = document.querySelector('.img'),
        docNome = document.querySelector('.nome'),
        docGenero = document.querySelector('.gender'),

        docCountry = document.querySelector('.country'),
        docCity = document.querySelector('.city'),
        docState = document.querySelector('.state');

    // Mostra na tela as informações
    docImg.setAttribute("src", img);
    docImg.style.display = 'block'

    docNome.innerHTML = `Nome: ${primeiroNome} ${ultimoNome} `

    // Tranforma o genero em portugues 
    if (genero == 'male') {
        genero = 'Masculino'
    } else {
        genero = 'Feminino'
    }
    docGenero.innerHTML = `Gênero: ${genero} `

    docCountry.innerHTML = `País: ${pais}`
    docCity.innerHTML = `Cidade: ${cidade}`
    docState.innerHTML = `Estado: ${estado}`
})