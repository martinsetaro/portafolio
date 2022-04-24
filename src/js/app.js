
let listado = document.querySelector('.listado');
let botonProyecto = document.querySelector('.btn_proyectos');
let informacion = document.querySelector('.informacion');
let modo = document.querySelector('.day_night');
let cambiarmodo = document.querySelector('.cambiarmodo');
let datos = document.querySelector('.datos');
let lettermode = document.querySelector('.letter_mode');
let iconosskills = document.querySelector('.iconos__skills');
let darkmode = document.querySelector('.dark_mode');



        
       
informacion.addEventListener('click', function(e){
    let b = e.target;
    if(b.classList.contains('btn_proyectos')){
        listado.style.overflow = 'visible';
        listado.style.height = '40rem';
      

    }
})


cambiarmodo.addEventListener('click', function(e){
    let b = e.target;
    let mode = b.textContent;
    


    if(mode == "dark_mode"){
        cambiarmodo.textContent = "light_mode";
        darkmode.style.zIndex = "99";
        informacion.style.backgroundColor = "#242525";
        informacion.querySelector('h2').style.color = "#dadada";
        listado.style.background = "#242525";
        listado.style.borderradius = "1rem";
        
    }else { 
        darkmode.style.zIndex = "-1";
        cambiarmodo.textContent = "dark_mode";
        informacion.style.backgroundColor = "#dadada";
        informacion.querySelector('h2').style.color = "#242525";
       
       


    }
    
  
    
})








