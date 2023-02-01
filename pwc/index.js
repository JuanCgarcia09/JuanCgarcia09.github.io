var slideIndex = 0;
var cuenta = 0
class user{
    usuario;
    contraseña;
    constructor(usuario,contraseña){
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
}
var usuarios

function inicializar(){
    showSlides();
    usuarios = new user("pwc_prueba","pwc_contraseña")  
}


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slider__object");

    for (i = 0; i < slides.length; i++) {

    slides[i].style.display = "none";
    }
    slideIndex++;

    if(slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";
    actualizarpuntos(slideIndex)
    setTimeout(showSlides,6000);

}

function plusSlides(a){
    var i;
    var slides = document.getElementsByClassName("slider__object");
    slideIndex = slideIndex+a
    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
        }
    if(slideIndex > slides.length) {slideIndex = 1}
    if(slideIndex < 1) {slideIndex = 4}
    slides[slideIndex-1].style.display = "block";
    actualizarpuntos(slideIndex)
}

function actualizarpuntos(a){
    let puntos =$('.dot')
    var i;
    var slides = document.getElementsByClassName("slider__object");
    puntos.removeClass("activo");
    $(puntos[a-1]).addClass("activo");
    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
        }
    if(slideIndex > slides.length) {slideIndex = 1}

    slides[a-1].style.display = "block";
}
function revisar(){
    let usuario = document.getElementById('usuario').value
    let contrasena = document.getElementById('contrasena').value
    if(usuario==usuarios.usuario && contrasena==usuarios.contraseña){
        window.location = "./psi.html"
    }
    else{
        window.alert("Usuario y/o contaseña incorrecta")
    }
}

function abrirmodal(){
    modal = document.querySelector(".modal");
    modal.classList.add('modal--show')
}


document.addEventListener("click", function(e){ 
    var clic = e.target;
    modal = document.querySelector(".modal");
    modal_container = document.querySelector(".modal__container");
    modal_container2 = document.querySelector(".modal__tittle");
    modal_container3 = document.querySelector("#usuario");
    modal_container4 = document.querySelector("#contrasena");
    modal_container5 = document.querySelector("#botonsino");
    if(modal.classList.contains("modal--show") && clic != modal_container && clic != modal_container2 && clic != modal_container3 && clic != modal_container4 && clic != modal_container5 ){
        cuenta++
        if(cuenta==2)
        {
            modal.classList.remove('modal--show')
            cuenta=0
        }
    }
},false)

