var clickImp = false;
var clickFil = false;
var auxA;
var auxB;
var auxC;
var impresora, filamento, costoPieza;

function calcularConsumo(){
    clickImp = true;
    impresora = consumo();
}
function consumo(){
    auxA = document.getElementById("corriente").value;
    alert("auxA: " + auxA);
    auxB = document.getElementById("tension").value;
    alert("auxB: " + auxB);
    return ((auxA*auxB)/1000);
}

function calcularMaterial(){
    clickFil = true;
    filamento = material();
}
function material(){
    auxA = document.getElementById("precioFilamento").value;
    auxB = document.getElementById("pesoBobina").value;
    return (auxA/auxB);
}

function calcularCosto(){
    if(clickFil & clickImp){
        costoPieza = costo();
    }else{
        alert("Calcule los consumos primero!");
    }
}
function costo(){
    auxA = document.getElementById("horas").value;
    auxB = document.getElementById("minutos").value;
    auxC = document.getElementById("pesoPieza").value;
    return (((auxA+(auxB*100/60)) * impresora) + (filamento * auxC));
}