


const resumen = document.querySelector("#resumen")
const span = document.querySelector("#span")
const select = document.getElementById('selector')
const cantidad = document.getElementById('cantidad')
const borrar = document.getElementById('borrar')
let contador = 0

 select.addEventListener('change', 
 function(){
 const valorDelSelect = this.options[select.selectedIndex]
 //alert(select.value);
 });

 resumen.addEventListener('click',() => {
 let sel = select.value;
 let cant = cantidad.value;
 contador  = cant * sel ;
 //alert(contador)
 span.textContent = contador
 
    });

 borrar.addEventListener('click',() =>{
   contador = 0
   span.textContent = contador
    })   
