
 let input = document.querySelector('.input')
 let itemInput = document.querySelector(".item-input")
 let botonAgregar = document.querySelector(".boton-agregar")
 let container = document.querySelector(".container")
 let nuevaTarea
 let newDiv
 let inputItem
 let botonEditar
 let botonRemover
 
 class Item {
   constructor(nuevaTarea) {
     this.crearDiv(nuevaTarea);
   }
   crearDiv(nuevaTarea) {
     //CREA EL DIV
     newDiv = document.createElement("div")
     newDiv.classList.add("item")
     container.appendChild(newDiv);
 
 
     //CREA EL INPUT:TEXT
     inputItem = document.createElement("input")
     inputItem.disabled = true
     inputItem.classList.add("item-input")
     newDiv.appendChild(inputItem);
     inputItem.value = nuevaTarea
 
 
     //CREA EL BOTON "EDITAR"
     botonEditar = document.createElement("button")
     botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
     botonEditar.classList.add('boton-editar')
     newDiv.appendChild(botonEditar);
 
 
     //CREA EL BOTON "REMOVER"
     botonRemover = document.createElement("button")
     botonRemover.innerHTML = "<i class='fas fa-trash'></i>"
     botonRemover.classList.add("boton-remover")
     newDiv.appendChild(botonRemover);
 
 
     let editarAll = document.querySelectorAll(".boton-editar")
     let removerAll = document.querySelectorAll(".boton-remover")
     let inputAll = document.querySelectorAll(".item-input")
     let divsAll = document.querySelectorAll(".item")
 
     //AGREGA EVENTOS A LOS BOTONES "EDITAR" Y "REMOVER"
     for (let i = 0; i < divsAll.length; i++) {
       editarAll[i].addEventListener('click', function () {
         for (let i = 0; i < inputAll.length; i++) {
           if (!inputAll[i].disabled) {
             inputAll[i].disabled = true
             this.innerHTML = "<i class='fas fa-lock'></i>"
           } else {
             inputAll[i].disabled = false;
             this.innerHTML = "<i class='fas fa-lock-open'></i>";
           }
         }
       })
       removerAll[i].addEventListener('click', function () {
         divsAll[i].remove()
       }
       )
     }
   }
 }
 
 
 
 //FUNCION QUE CHEQUEA SI EL INPUT ESTA VACIO
 function chequearInput(str) {
   if (str) {
     let nuevaTarea = new Item(str)
     input.value = ""
   } else input.placeholder = "La tarea no puede estar vacia"
   input.classList.add(".input-invalid")
 }
 
 botonAgregar.addEventListener('click', function () {
   chequearInput(input.value)
 })
 