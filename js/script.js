console.log(tools)

const showAll = document.querySelector('#show-all')
const showEletric = document.querySelector('#only-eletric')
const showAdd = document.querySelector('#add-all')
const showDiscount = document.querySelector('#map-all')

let descountValue = document.querySelector('.input-porcent')

const items = document.querySelector('ul')
const showTotalValue = document.querySelector('.showValueAll')

function realCoin(coin){
    return coin.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function showAllItens(arrayProducts) {

    items.innerHTML = ""

    arrayProducts.forEach(element => {

        items.innerHTML +=
            `
        <li>
        
            <img src="${element.src}" alt="ferramenta">
            <p>${element.name}</p>
            <p class="item-price">${realCoin(element.price)}</p>

        </li>
        `
    });
}

function showEletricItens() {

    items.innerHTML = ""

    tools.filter(element => {

        if (element.electric === true) {
            items.innerHTML +=
                `
            <li>
            
                <img src="${element.src}" alt="ferramenta">
                <p>${element.name}</p>
                <p class="item-price">${realCoin(element.price)}</p>

            </li>
        `
        } else {
            return false
        }

    })
}

function showAddItems() {

    const all = tools.reduce((acc, element) => {
        return acc + element.price
    }, 0)

    showTotalValue.innerHTML = `O valor tota de todos os itens é de: ${realCoin(all)}`
}

function showDiscountItems() {

    const discount = tools.map(element => ({
        ...element, //Spread Operator (matem todos os items de um array sem alteração)
        price: element.price * (1 - (descountValue.value / 100))
    }))

    showAllItens(discount)

}


showAll.addEventListener('click', () => showAllItens(tools))
showEletric.addEventListener('click', showEletricItens)
showAdd.addEventListener('click', showAddItems)
showDiscount.addEventListener('click', showDiscountItems)