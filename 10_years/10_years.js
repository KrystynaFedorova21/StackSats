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
    // let b = Number(increase.value) / 100
    // pricePercent[0].innerHTML = '#'
    // pricePercent[1].innerHTML = b * 100
    // let c = 1 - (Number(degression.value) / 100)
    // console.log(c)

    let bitPrice = document.querySelectorAll('.bit_price')
    let a = Number(price.value)
    console.log(a)
    bitPrice[0].innerHTML = a
    console.log(a)

    for (let i = 1; i < 10; i++) {
        // console.log(pricePercent[i].value)
        // let d = Number(pricePercent[i]/100)
        // console.log(b)
        // bitPrice[i].innerHTML = a * (1 + d)
        // a = a * (1 + d)
        // console.log(a)

        // if (b * c * 100 > 3) {
        //     pricePercent[i+1 ].innerHTML = Math.floor(b * c * 100)
        //     b = b * c
            let d = pricePercent[i].innerHTML / 100
            bitPrice[i].innerHTML = Math.floor(a * (1 + d))
            a = a * (1 + d)



            // } else {
            //     pricePercent[i+1].innerHTML = 3
            //     let d = Number(pricePercent[i+1]/100)
            //     bitPrice[i].innerHTML = a * (1 + d)
            //     a = a * (1 + d)
            // }
        }

}

function acquired(){

}







































