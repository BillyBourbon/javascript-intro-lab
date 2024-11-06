(function(){
    let pricePounds, priceEuros, exchangeRate

    let conversionForm = document.getElementById("myForm")
    let message = document.getElementById("msg")

    conversionForm.addEventListener("submit", (ev)=>{
        ev.preventDefault()
        pricePounds = document.getElementById("pounds").value

        if(isNaN(parseFloat(pricePounds))){
            message.style.display = "block"
            message.innerHTML = `Invalid Number Entered. You Entered: '${pricePounds}'`
            message.setAttribute("class", "error")
            return
        }

        pricePounds = parseFloat(pricePounds)
        exchangeRate = 0.87

        if(pricePounds <= 0){
            message.style.display = "block"
            message.innerHTML = `Number Must Be Greater Than 0. You Entered: '${pricePounds}'`
            message.setAttribute("class", "error")
        } else{
            priceEuros = pricePounds * exchangeRate
            message.style.display = "block"
            message.innerHTML = `Exchange Rate: ${exchangeRate.toFixed(2)} - Pounds: £${pricePounds.toFixed(2)} -> Euros: &euro;${priceEuros.toFixed(2)} `
            message.removeAttribute("class")
        }
    })
    
    document.getElementById('pounds').addEventListener('focus', () =>{
        this.value = ""
        msg.innerHTML = ""
        msg.removeAttribute("class")
    });

})()