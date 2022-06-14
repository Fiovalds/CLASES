const refranes = [
    "A CABALLO REGALADO NO SE LE MIRA EL DIENTE",
    "AL QUE MADRUGA DIOS LE AYUDA",
    "CAMARON QUE SE DUERME SE LO LLEVA LA CORRIENTE"
]

const seleccionarRefran = function(){
    //Seleccionar refram
    const indice = parseInt(Math.floor(Math.random() * refranes.length) )
    refranSeleccionado = refranes[indice]
    //Mostrar refran
    //const divRefran = document.getElementById("divRefran")
    //divRefran.innerText = refranSeleccionado
}

let refranSeleccionado = ""
let refranOcultado = ""
let numeroEquivocaciones = 0
let terminado = false

const ocultarRefran = function(){

    /*for(let i=0; i<refranSeleccionado.length; i++){} */

    //va ir recorriendo letra x letra del refran
    for (let letra of refranSeleccionado){
        if(letra == " "){
            refranOcultado += letra
        } else{
            refranOcultado += "_"
        }
    }

    document.getElementById("divRefran").innerText = refranOcultado

}

const buscarDescubrirCaracter = function(caracter){
    let refranTemp = ""
    let encontrado = false

    for(let i in refranSeleccionado){
        if (refranSeleccionado[i] == caracter) {
            //Se debe descubrir
            encontrado = true
            refranTemp += refranSeleccionado[i]
        }else {
            refranTemp += refranOcultado[i]
        }
    }
    refranOcultado = refranTemp 
    document.getElementById("inputLetras").value += caracter
    document.getElementById("divRefran").innerText = refranOcultado
    return encontrado
}

const crearDivMensajeGanador = function(){
    const div = document.createElement("div")
    div.setAttribute("class","alert alert-success")
    div.innerText = "Gano"

    return div
}

const crearDivMensajePerdedor = function(){
    const div = document.createElement("div")
    div.setAttribute("class","alert alert-danger")
    div.innerText = "Perdió"

    return div
}

const onKeyPressed = function(event){
    if (terminado) return 

    const caracterSeleccionado = event.key
    const encontrado = buscarDescubrirCaracter(caracterSeleccionado.toUpperCase())

    if (!encontrado){
        numeroEquivocaciones++
        //Modificar la imagen 
        const imagen = document.getElementById("imagen")
        imagen.setAttribute("src", `/Imagenes/Hangman-${numeroEquivocaciones}.png`)
        
        if(numeroEquivocaciones == 6){
            //Perdio
           /* const mensajePerdedor = document.getElementById("mensajePerdedor")
            mensajePerdedor.setAttribute("class","alert alert-danger")*/
            const div = crearDivMensajePerdedor()
            const divPadre = document.getElementById("divMensajes")
            divPadre.appendChild(div)
            terminado = true
            
        }
    }
    else{
        if(refranOcultado == refranSeleccionado){
            //Gane
            /*const mensajePerdedor = document.getElementById("mensajeGanador")
            mensajePerdedor.setAttribute("class","alert alert-success")*/
            const div = crearDivMensajeGanador()
            const divPadre = document.getElementById("divMensajes")
            divPadre.appendChild(div)
            terminado = true
            
        }
    }

}



const main = function() {
    seleccionarRefran()
    ocultarRefran()
    window.addEventListener("keypress",onKeyPressed)
}

window.addEventListener("load",main)