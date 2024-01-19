let saldo = 1000
document.querySelector("#saldo").value = saldo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

const sacar =() =>{
    let valorSaque = document.querySelector("#inputSacar").value
    if (valorSaque <= 0 ){
        document.querySelector("#inputSacar").value = ""
        window.alert("informe um valor válido")
        throw "valor inválido"
    }
    else if (valorSaque > saldo ){
        document.querySelector("#inputSacar").value = ""
        window.alert("Saldo insuficiente")
        throw "Saldo insuficiente" 
    }

    try{
        saldo = saldo - Number(valorSaque)
        document.querySelector("#saldo").value = saldo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        window.alert("Saque realizado com sucesso")
        console.log(`Saque de ${Number(valorSaque).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}. Saldo de ${saldo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)
        document.querySelector("#inputSacar").value = ""

    }catch(exception){
        console.error("Ocorreu um erro" , exception)
    } 
}
const depositar =() =>{
    let valorDeposito = document.querySelector("#inputDepositar").value
    if (valorDeposito <= 0 ){
        document.querySelector("#inputDepositar").value = ""
        window.alert("informe um valor válido")
        throw "valor inválido"
    }

    try{
        saldo = saldo + Number(valorDeposito)
        document.querySelector("#saldo").value =  saldo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        window.alert("Depósito realizado com sucesso")
        console.log(`Depósito de ${Number(valorDeposito).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}. Saldo de ${saldo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)
        document.querySelector("#inputDepositar").value = ""
    }catch(exception){
        console.error("Ocorreu um erro" , exception)
    }
}


const menuConsultar = () =>{
        document.querySelectorAll('.operacao').forEach(elemento => elemento.setAttribute("hidden", "hidden"))
        document.querySelector('#divSaldo').removeAttribute("hidden")
}
const menuSacar = () =>{
        document.querySelectorAll('.operacao').forEach(elemento => elemento.setAttribute("hidden", "hidden"))
        document.querySelector('#divSaque').removeAttribute("hidden")
}
const menuDepositar = () =>{
        document.querySelectorAll('.operacao').forEach(elemento => elemento.setAttribute("hidden", "hidden"))
        document.querySelector('#divDepositar').removeAttribute("hidden")
}

