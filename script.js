
 
 
const textArea = document.querySelector(".Text-area");
const mensagem = document.querySelector(".mensagem");


// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
 

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";

}




function encriptar (stringEncriptada){
   
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {

        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo [i][0],matrizCodigo[i][1]);

        }

    }

    return stringEncriptada;
}




function btnDesencriptar() {
    const textoDesencriptado = Desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function Desencriptar (stringDesencriptar){
    let matrizCodigo =
    [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"],["u", "ufat"]];

    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i=0 ; i<matrizCodigo.length; i++){

        if (stringDesencriptar.includes(matrizCodigo[i][1])) {
            stringDesencriptar=stringDesencriptar.replaceAll(matrizCodigo [i][1],matrizCodigo[i][0]);

        }

    }

    return stringDesencriptar;
}

function copiarTexto() {
    const textoCopiar = document.getElementById("textoCopiar");
    if (textoCopiar !== null) { // Verifica se o elemento foi encontrado
        textoCopiar.select();
        textoCopiar.setSelectionRange(0, 99999); // Para dispositivos móveis

        try {
            navigator.clipboard.writeText(textoCopiar.value);
            alert("Texto copiado SUCESSO!");
        } catch (err) {
            console.error("Falha ao copiar: ", err);
            alert("Erro ao copiar o texto!");
        }
    } else {
        console.error("Elemento não encontrado!");
        alert("Erro: Elemento não encontrado!");
    }
}









































