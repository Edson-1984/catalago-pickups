let anteriorButton = document.getElementById('anterior')
let proximoButton = document.getElementById('proximo')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicadores = document.querySelector('.indicadores')
let dots = indicadores.querySelectorAll('ul li')
let list = container.querySelector('.list')

let ativo = 0
let primeiraPosicao = 0
let ultimaPosicao = items.length -1


proximoButton.onclick = () => {
    list.style.setProperty('--calcular', 1)
    let itemVelho = container.querySelector('.list .item.ativo')
    itemVelho.classList.remove('ativo')

    ativo = ativo + 1 > ultimaPosicao ? 0 : ativo +1
    items [ativo].classList.add('ativo')

    let dotsVelho = indicadores.querySelector('ul li.ativo')
    dotsVelho.classList.remove('ativo')
    dots[ativo].classList.add('ativo')

    indicadores.querySelector('.numero').innerHTML = '0' + (ativo + 1)
}



anteriorButton.onclick = () => {
    list.style.setProperty('--calcular', -1)
    let itemVelho = container.querySelector('.list .item.ativo')
    itemVelho.classList.remove('ativo')

    ativo = ativo - 1 < primeiraPosicao ? ultimaPosicao : ativo -1
    items [ativo].classList.add('ativo')

    let dotsVelho = indicadores.querySelector('ul li.ativo')
    dotsVelho.classList.remove('ativo')
    dots[ativo].classList.add('ativo')

    indicadores.querySelector('.numero').innerHTML = '0' + (ativo + 1)
}