// funciones auxiliares


const modificarNombreDeUsuario = (objeto, nuevoNombre) => {
    return objeto.nombreUsuario = nuevoNombre
}

const modificarContrasenia = (objeto, nuevaContrasenia) => {
    return objeto.contrasenia = nuevaContrasenia
}

const convertirAJSON = (objeto) => {
    return JSON.stringify(objeto)
}

const convertirDesdeJSON = (cadenaJSON) => {
    return JSON.parse(cadenaJSON)
}

const guardarEnLocalStorage = (objeto, string) => {
    let objetoJSON = convertirAJSON(objeto)
    localStorage.setItem(string, objetoJSON)
}

const leerDesdeLocalStorage = (string) => {
    let JSONLocalStorage = localStorage.getItem(string)
    const objeto = convertirDesdeJSON(JSONLocalStorage)
    return objeto
}

const HTMLSesionIniciada = () => {
    titulo.textContent = `Hola ${usuario.nombreUsuario}`
    botonInicioSesion.classList.add("esconder")
    formularioInicioSesion.classList.add("esconder")
    formularioCambiarUsuario.classList.remove("esconder")

}
const HTMLSesionCerrada = () => {
    titulo.textContent = "Hola"
    botonInicioSesion.classList.remove("esconder")
    formularioInicioSesion.classList.remove("esconder")
    formularioCambiarUsuario.classList.add("esconder")
}

// Elementos HTML
const titulo = document.getElementById("titulo")
const botonInicioSesion = document.getElementById("boton-iniciar-sesion")
const formularioInicioSesion = document.getElementById("formulario-inicio-sesion")
const botonEnviarFormulario = document.getElementById("enviar-formulario")

const nombreUsuario = document.getElementById("nombre-usuario")
const contraseniaUsuario = document.getElementById("contrasenia-usuario")


const formularioCambiarUsuario = document.getElementById("formulario-cambiar-usuario")
const botonCambiarUsuario = document.getElementById("boton-cambiar-usuario")
const botonCerrarSesion = document.getElementById("boton-cerrar-sesion")

//Usuario

const usuario = {
    nombreUsuario: "lala",
    contraseniaUsuario: "lala"
}

// Variable

let sesionEstaIniciada = false


// Codigo

//primero leemos que tenemos, para eso estamos creando un objeto con la propiedad que leemos
const sesionEstaIniciadaLocalS = leerDesdeLocalStorage("sesion")
console.log(sesionEstaIniciadaLocalS)
// la sesion esta iniciada
if (sesionEstaIniciadaLocalS.sesionEstaIniciada === true) {
    HTMLSesionIniciada()
}
else {
    HTMLSesionCerrada()
}


botonInicioSesion.onclick = () => {
    formularioInicioSesion.classList.toggle("esconder")

}

botonEnviarFormulario.onclick = () => {
    if (sesionEstaIniciada === false) {
        if (nombreUsuario.value === usuario.nombreUsuario && contraseniaUsuario.value === usuario.contraseniaUsuario) {
            sesionEstaIniciada = true
            guardarEnLocalStorage( { sesionEstaIniciada: true }, "sesion" )
            // esto no lo entiendo muy bien
            HTMLSesionIniciada()
        }
        else {
            console.log("error usuario")
        }
    }
    else { 
        usuario.nombreUsuario = nombreUsuario.value
        usuario.contraseniaUsuario = contraseniaUsuario.value
    }
    
}

botonCerrarSesion.onclick = () => {
    sesionEstaIniciada = false
    guardarEnLocalStorage( { sesionEstaIniciada: false }, "sesion" )
    HTMLSesionCerrada()
}

botonCambiarUsuario.onclick = () => {
    botonInicioSesion.classList.remove("esconder")
    formularioInicioSesion.classList.remove("esconder")
    formularioCambiarUsuario.classList.add("esconder")
}
