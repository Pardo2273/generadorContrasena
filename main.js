let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

let debil = document.getElementById('debil');
let fuerte = document.getElementById('fuerte');

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar(){
    let numeroDigitado = parseInt(cantidad.value);

    if(numeroDigitado <= 8){
        alert("La cantidad de caracteres tienen que ser mayor a 8");
    }

    // la cree afuera del for porque sino se me iba a resetear con cada valor que le iba a estar asignando, por ende tambien esta vacia
    let password = '';

    // recordar que como el iniciador esta en 0, en teoria el bucle arrabca en -1 por lo que que se pone en la condicion que i sea menor al numeroDigitado
    for(let i = 0; i < numeroDigitado; i++){
        //Math.floor es para redondear, recordar que la operacion que hacemos con el numero aleatorio y la multiplicacion por la longitud de la cadena es con el fin de llegar a obtener la pocision (el indice), por eso se llama a la constante y se ponen los []
        let caracterAleatorio= cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        //concateno y asigno
        password += caracterAleatorio;
    }

    //aqui es para que se le asigne al valor de la contra generada al input donde debe aparecer en el frontend
    contrasena.value = password;
    
    //llama a la funcion para verificar si la contrasena es segura
    validacion(password);
}

// funcion para limpiar la contrasena
function limpiar(){
    contrasena.value= '';
}

//funcion de validacion para determinar si la contrasenna es segura o no
function validacion(Contrasena){
    let validacionMinusculas = 0;
    let validacionMayusculas = 0;
    let validacionNumeros= 0;
    let validacionCaracteres = 0;

    //El método match() devuelve todas las ocurrencias de una expresión regular dentro de una cadena.
    if(Contrasena.match(/[a-z]/)){
        validacionMinusculas += 1;
    }
    if(Contrasena.match(/[A-Z]/)){
        validacionMayusculas += 1;
    }
    if(Contrasena.match(/[0-9]/)){
        validacionNumeros += 1;
    }
    if(Contrasena.match(/[!@#$%^&*()]/)){
        validacionCaracteres += 1;
    }
           
    if(validacionMinusculas >= 1 && validacionMayusculas >= 1 && validacionNumeros >= 1 && validacionCaracteres >= 1){
        debil.innerHTML = "";
        fuerte.innerHTML = "La contraseña es segura";
    } else{
        fuerte.innerHTML = "";
        debil.innerHTML = "La contraseña no es segura, favor volverla a generar";
    };
}

