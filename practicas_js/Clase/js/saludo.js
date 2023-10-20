let btn = document.querySelector("#enviar"); //Cuando se pone entre "" se refiere a la etiqueta en si.
//Cuando ponemos la # delante se refiere al id.
//Cuando ponemos un . delante se refiere a la class.


btn.onclick = saludoPersonal; //Orientado a eventos. Esta pendiente de lo que pasa en la web.
//Listeners.



function saludoPersonal() {

    let miNombre = document.getElementById("nombre"); //Te sale por pantalla una pregunta.

    let body = document.body;
    const saludo = document.createElement("h1");//Crea un elemento h1 lo asignamos a saludo.
    saludo.textContent = `Hola ${miNombre}, que tal estas?`; //Le metemos dentro el siguiente texto.
    //Template text (Plantillas de texto) con comillas inversas, te permite meter la variable dentro sin tener con concatenar.
    body.appendChild(saludo); //Lo insertamos en el documento.
}

