//Inicio
const Cuadro=document.querySelector(".Cuadrito")
Cuadro.style.backgroundColor='aqua' 


//Pagina 1

//Inicio caja
const Hijo = document.body.firstElementChild
Hijo.style.margin = '15px'
"15px"
Hijo.style.padding = '15px'
"15px"
Hijo.style.border = 'outset'
"outset"
Hijo.style.borderColor = 'violet'
"violet" 
//Modificacion del indice (Es igual para las 3 paginas)
const Hijo1 = Hijo.nextElementSibling
const Hijo2 = Hijo1.nextElementSibling
const Hijo3 = Hijo2.nextElementSibling
const div1 = document.querySelector(".First") 
div1.appendChild(Hijo1 + Hijo2 + Hijo3)
//Modificacion del color de los forms
const FS = document.querySelector('fieldset')
FS.style.backgroundColor = 'MediumPurple'
const FS22= document.querySelector('#Cartel')
FS22.style.backgroundColor = 'aqua' 

//Pagina 2 - Forms
const FS = document.querySelector('fieldset')
FS.style.backgroundColor = 'violet'

//Pagina 3 - Forms
const FS = document.querySelector('fieldset')
FS.style.backgroundColor = 'green'

const Parraf = document.querySelector('p')
Parraf.style.font = 'red' 