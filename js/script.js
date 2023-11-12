

let menu = document.getElementById('menu');
let cerrar = false





function mostrarMenu() {

    menu.style.width = '100%';
    menu.style.padding = '20px';
    document.getElementById('men').classList.add('d-none');
    document.getElementById('cerrar').classList.remove('d-none');
    document.body.style.overflowY = 'hidden';
}

function cerrarMenu() {
    menu.style.width = '0';
    menu.style.padding = '0';
    document.getElementById('men').classList.remove('d-none');
    document.getElementById('cerrar').classList.add('d-none');
    cerrar = true
    if(cerrar){
        document.body.style.overflowY = 'visible';
    }

}

function mostrarCaja(bxRopaId, imagenID) {
    let bxRopa = document.getElementById(bxRopaId)
    let imagen = document.getElementById(imagenID)
    bxRopa.style.display = 'flex';
    imagen.classList.add('shadow');
    let shop = document.getElementsByClassName('ti-shopping-cart'); 
}

function cerrarCaja(bxRopaId, imagenID) {
    let bxRopa = document.getElementById(bxRopaId)
    let imagen = document.getElementById(imagenID)
    bxRopa.style.display = 'none';
    imagen.classList.remove('shadow');

}

function mostrarMenuGenero(id){
    let menuBox = document.getElementById(id);
    menuBox.style.display = 'block';
}

function ocultarMenuGenero(id){
    let menuBox = document.getElementById(id);
    menuBox.style.display = 'none';
  
}
function ocultarMenuGeneroCel(id) {
    var menuBox = document.getElementById(id);

    menuBox.style.width = '0';
    menuBox.style.padding = '0';
    
}



function mostrarMenuGeneroCel(id){
    let menuBox = document.getElementById(id);
    menuBox.style.display = 'block';
    menuBox.style.width='100vw';
    menuBox.style.padding='16px';
    //document.getElementById('cerrar').classList.add('d-none');
}

function mostrarHora() {
    var d = new Date();
    let hora = d.getHours();
    let min = d.getMinutes();
    let seg = d.getSeconds();
    let mod = 'a.m';
    
    if(hora > 12){
        mod = 'p.m'
    }

    if (hora == 12){
        hora = 12;
    }

    if (min <= 9){
       min="0"+min;  
    }

    if(seg <= 9){
        seg='0'+seg;
    }


    document.getElementById('clock').value = hora + ' : ' + min + ' : ' + seg + ' ' + mod;
    setTimeout('mostrarHora()',1000)
}

function mostrarFecha(){
    let dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
    let fecha = new Date();
    let getDay = fecha.getDay();
    let dia = dias[getDay-1];
    let numDia = fecha.getDate();
    let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    let mes = meses[fecha.getMonth()]
    let year = fecha.getFullYear()
    document.getElementById('fecha').innerHTML=dia + ' ' + numDia + ' de ' + mes + ' de ' + year; 
   
}
mostrarHora();
mostrarFecha();
