const menu = document.getElementById("btn-menu");
const sinMenu = document.getElementById("sinMenu");
const conMenu = document.getElementById("conMenu");
const pantallaIndex = document.getElementById("screenIndex");
const pantallaProfesor = document.getElementById("screenProfesor");
const pantallaDepartamento = document.getElementById("screenDepartamento");

function menuOpc(menu){
    if(menu == 0){
        sinMenu.style.display = "none";
        conMenu.style.display = "flex";
    }else if(menu == 1){
        sinMenu.style.display = "flex";
        conMenu.style.display = "none"; 
    }
}

function cambioPantalla(pantalla){
    switch(pantalla){
        case "index": 
        pantallaIndex.style.display = "flex";
        pantallaProfesor.style.display = "none";
        pantallaDepartamento.style.display = "none";
            break;
        case "profesor": 
        pantallaIndex.style.display = "none";
        pantallaProfesor.style.display = "flex";
        pantallaDepartamento.style.display = "none";
            break;
        case "departamento":
            pantallaIndex.style.display = "none";
            pantallaProfesor.style.display = "none";
            pantallaDepartamento.style.display = "flex";
            break;
    }
}