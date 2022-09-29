let startYear = document.getElementById("start_year")
const price = document.getElementById("price")
const saving = document.getElementById("saving")
const increase = document.getElementById("increase")
const degression = document.getElementById("degression")

const btnSend = document.getElementById("input")

btnSend.onclick = function () {
    years()
    pricePercent()
    bitPrice()
    savings()
    acquired()
    assetsSat()
    acquiredSat()
    cumulative()
    assetsUSD()
}

function years() {
    let year = document.querySelectorAll('.start_year')
    let a = Number(startYear.value)
    year.innerHTML = a
    for (let i = 0; i < 10; i++) {
        year[i].innerHTML = a
        a += 1
    }
}

function pricePercent() {
    let pricePercent = document.querySelectorAll('.price_percent')

    let b = Number(increase.value) / 100
    pricePercent[0].innerHTML = '#'
    pricePercent[1].innerHTML = b * 100
    let c = 1 - (Number(degression.value) / 100)
    console.log(c)
    for (let i = 2; i < 10; i++) {
        if (b * c * 100 > 3) {
            pricePercent[i].innerHTML = Math.floor(b * c * 100)
            b = b * c
        } else {
            pricePercent[i].innerHTML = 3
        }
    }
    console.log(pricePercent)
}

function savings() {

    let savings = document.querySelectorAll('.saving')
    let a = Number(saving.value)
    for (let i = 0; i < 10; i++) {
        savings[i].innerHTML = a
    }
}

function bitPrice() {
    let pricePercent = document.querySelectorAll('.price_percent')
    let bitPrice = document.querySelectorAll('.bit_price')
    let a = Number(price.value)
    bitPrice[0].innerHTML = a

    for (let i = 1; i < 10; i++) {
        let d = pricePercent[i].innerHTML / 100
        bitPrice[i].innerHTML = Math.floor(a * (1 + d))
        a = a * (1 + d)
    }
}

function acquired() {
    let bitPrice = document.querySelectorAll('.bit_price')
    let savings = document.querySelectorAll('.saving')
    let acquired = document.querySelectorAll('.acquired')
    for (let i = 0; i < 10; i++) {
        acquired[i].innerHTML = Math.floor(savings[i].innerHTML / bitPrice[i].innerHTML * 100000000)
    }
}

function assetsSat() {
    let assetsSat = document.querySelectorAll('.assets')
    let acquired = document.querySelectorAll('.acquired')
    assetsSat[0].innerHTML = acquired[0].innerHTML
    assetsSat[0].innerHTML = Number(assetsSat[0].innerHTML)
    let b = Number(assetsSat[0].innerHTML)
    for (let i = 1; i < 10; i++) {
        assetsSat[i].innerHTML = b + Number(acquired[i].innerHTML)
        b = Number(assetsSat[i].innerHTML)
    }
}

function acquiredSat() {
    let acquiredSat = document.querySelectorAll('.acquired_sat')
    let acquired = document.querySelectorAll('.acquired')
    let assetsSat = document.querySelectorAll('.assets')
    let a = Number(assetsSat[9].innerHTML)
    console.log(a)
    for (let i = 0; i < 10; i++) {
        let b = Number(acquired[i].innerHTML)
        let result = 100 * b / a
        acquiredSat[i].innerHTML = result.toFixed(2)
    }

}

function cumulative() {
    let acquiredSat = document.querySelectorAll('.acquired_sat')
    let cumulative = document.querySelectorAll('.cumulative')
    cumulative[0].innerHTML = acquiredSat[0].innerHTML
    let b = Number(acquiredSat[0].innerHTML)

    for (let i = 1; i < 10; i++) {
        cumulative[i].innerHTML = b + Number(acquiredSat[i].innerHTML)
        b = Number(cumulative[i].innerHTML)
    }

}


function assetsUSD(){
    let assetsUSD = document.querySelectorAll('.assets_usd')
    let bitPrice = document.querySelectorAll('.bit_price')
    let assetsSat = document.querySelectorAll('.assets')

    for (let i = 0; i < 10; i++) {
        let a=assetsSat[i].innerHTML
        let b=bitPrice[i].innerHTML
        assetsUSD[i].innerHTML=Math.floor(a/100000000*b)
    }



}
