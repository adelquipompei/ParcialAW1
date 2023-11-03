let menu = document.getElementById('menu');



function mostrarMenu(){
    let menuAbierto=false;
    menu.style.width='100%';
    menu.style.padding='20px';
    document.getElementById('men').classList.add('d-none');
    document.getElementById('cerrar').classList.remove('d-none');
    document.body.style.overflowY='hidden';
}

function cerrarMenu(){
   menu.style.width='0%';
   menu.style.padding='0';
   document.getElementById('men').classList.remove('d-none');
    document.getElementById('cerrar').classList.add('d-none');
    document.body.style.overflowY='visible';
}

function mostrarCaja(bxRopaId,imagenID){
    let bxRopa = document.getElementById(bxRopaId)
    let imagen = document.getElementById(imagenID)
    bxRopa.style.display='flex';
    imagen.classList.add('shadow');
    
    
}
 

function cerrarCaja(bxRopaId,imagenID){
    let bxRopa = document.getElementById(bxRopaId)
    let imagen = document.getElementById(imagenID)
    bxRopa.style.display='none';
    imagen.classList.remove('shadow');
    
}

    