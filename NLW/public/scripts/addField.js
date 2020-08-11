//document.querySelector('#container').style.backgroundColor ="red"

//Procurar botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)                            //"Ouvidor de enventos"
//Quando clicar no botão

//Executar uma ação
function cloneField() {
  //console.log("cheguei aqui") escreve no console
   // variável fields = document.querySelector('.schedule-item').cloneNode(true), const variável constante 
    //Node se referencia a elementos html Node = nó
    //boolean: true ou false
  //Duplicar os campos. Que campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
  //Pegar os campos/limpar campos. que campos?
 const fields = newFieldContainer.querySelectorAll('input')

 //fields[0].value =""  fields[1].value ="" maneira burra
 //para cada campo, limpar
fields.forEach(function(field){
    //pega o field do momento e limpa ele
    field.value = ""
})
  //Colocar na página. Onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)


}
// Toda vez que eu executar um click cloneField será aberto e executado
//criando função nãoé necessário argumentar mas precisa ter espaço para argumentos
  