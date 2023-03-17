let menuVisible = false;

/*
*   Funcion para mostrar/ocultar el menu 
*   Cuando aparece el menu responsivo
*   y yo lo clickeo, entonces corre esta funcion
*/
function mostrarOcultarMenu(){

    if(menuVisible){
        document.getElementById("nav").classList = "";// Reescribe el HTML para desvincularlo con el CSS
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";// Reescribe el HTML para vincularlo con el CSS
        menuVisible = true;
    }
}

/*
*   Oculto el menu cuando selecciono
*   esta opcion
*/
function seleccionar(){
    document.getElementById("nav").classList ="";// Reescribe el HTML para desvincularlo con el CSS
    menuVisible = false;
}

/*
*   Con esta funcion aplico animaciones a las
*   barras de habilidades
*/
function efectoSkills(){
    var skills = document.getElementById("skills");
    var distancia_skill = window.innerHeight - skills.getBoundingClientRect().top;
    
    if(distancia_skill >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("Cpp");
        habilidades[3].classList.add("C");
        habilidades[4].classList.add("MatLab");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoEnequipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("projectManagement");
    }
}
/*
*   Detecto el scrolling para aplicar las animaciones
*/
window.onscroll = function(){
    efectoSkills();
}