function criarItem () {
    // lembrar de adicionar o replace do . e ,
    const inputProduto = document.querySelector('#nome').value
    const inputQuantidade = document.querySelector('#quantidade').value
    const inputValor = document.querySelector('#valor').value
    const valorTotal = parseFloat(inputQuantidade * inputValor).toFixed(2)


    produtos.push({
        id: produtos.length + 1,
        produto: inputProduto,
        qtd: inputQuantidade,
        vlr: inputValor,
        vlrTotal: valorTotal
    })

}


function inserirItemNaTela () {

        const divSection = document.querySelector('#inserirItens')
        const indice = produtos.length - 1

        const paragrafoNome = document.createTextNode(`${produtos[indice].produto}`)
        const paragrafoQtd = document.createTextNode(`${produtos[indice].qtd}`)
        const paragrafoValor = document.createTextNode(`${produtos[indice].vlrTotal}`)

        const pNome = document.createElement("p") 
        const pQtd = document.createElement("p")
        const pValor = document.createElement("p")
        pNome.classList.add('item')
        pQtd.classList.add('quantidade')
        pValor.classList.add('valor')

        pNome.appendChild(paragrafoNome)
        pQtd.appendChild(paragrafoQtd)
        pValor.appendChild(paragrafoValor)
        
        
        const mainDiv = document.createElement('div')
        mainDiv.classList.add('display-produto')

        mainDiv.appendChild(pNome)
        mainDiv.appendChild(pQtd)
        mainDiv.appendChild(pValor)
        
        divSection.appendChild(mainDiv)
        
    
}

function limparTela (){
    const inserirItens = document.querySelector('#inserirItens')
    inserirItens.innerText = ''

    const precoDisplay = document.querySelector('#preco')
    precoDisplay.innerText = '00,00'

}

function somarTotal () {
    
    const displayPreco = document.querySelector('#preco')

    let valores = 0

    produtos.forEach(e => {
        valores += parseFloat(e.vlrTotal)
    })

    displayPreco.innerHTML = valores
    
}

const produtos = [] 
let valores = 0


const butaoLimpar = document.querySelector('#clearAll')
butaoLimpar.onclick = e => {
    e.preventDefault()
    limparTela()
}

const enviarItem = document.querySelector('#lancarItem')
enviarItem.onclick = e => {
    e.preventDefault()
    criarItem()
    inserirItemNaTela()
    somarTotal()

}