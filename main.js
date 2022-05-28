
function typeWriter(elemento){ // funcao adicionar animacao no texto
    const textoArray=elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) =>{
        setTimeout(function(){
            elemento.innerHTML += letra;
        },100 * i)
})
};
typeWriter(document.querySelector ('.home'));


