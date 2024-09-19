document.getElementById('zoomBtn').addEventListener('click', function() {
    const container = document.querySelector('.container-hero');
    const parallax = document.querySelector('.parallax');
    const description = document.getElementById('description');
    const bubbleContainer = document.querySelector('.bubble-container_menu');
    // const bubbleContainersmall = document.querySelector('.bubble-container_menu_small');
    const lavadora = document.querySelector(".lavadora-inter");
    const lavadora_boton = document.getElementById("zoomBtn");
    const texto_burbujas = document.querySelector(".content");
    const texto_principal = document.querySelector(".intro-except");   
    
    setTimeout(() => {
        //== Mostrar las burbujas con transición
        bubbleContainer.style.display = 'flex';
        // bubbleContainer.style.flexDirection = 'column';
        bubbleContainer.style.flexFlow = 'column wrap';
        // bubbleContainer.style.flexWrap = 'wrap';
        bubbleContainer.style.alignContent = 'center';
        bubbleContainer.style.opacity = '0.8';
        // bubbleContainersmall.style.display = 'flex';
        // bubbleContainersmall.style.opacity = '0.8';

        //== baja la opacidad a 0 a la lavadora
        opacidadActual = 0;
        lavadora.style.opacity = opacidadActual.toFixed(1);

        //Deshabilitar despues de presionarlo
        // lavadora_boton.disabled = true;
        lavadora_boton.style.display = 'none';
        texto_principal.style.display = 'none';

        texto_burbujas.style.opacity = '0.8';
    }, 2000);

    if (parallax.classList.contains('zoomed')) {
        // Revertir los cambios
        parallax.classList.remove('zoomed');
        bubbleContainer.classList.remove('show-bubbles');
        // bubbleContainersmall.classList.remove('show-bubbles');
        
        
    }else {
        parallax.classList.add('zoomed');
        setTimeout(() => {
            parallax.classList.remove('zoomed');
            bubbleContainer.style.opacity = "1"; //== Asegura que el contenedor de burbujas sea visible
            bubbleContainer.classList.add('show-bubbles');
            // bubbleContainersmall.classList.add('show-bubbles');
        }, 2000);
    }
});

window.addEventListener('load', function() {
    const imagen = document.getElementById('imagen');
    setTimeout(() => {
        imagen.classList.add('active');
    }, 500);
})

window.addEventListener('load', function() {
    const titulo1 = document.getElementById('titulo1');
    const titulo2 = document.getElementById('titulo2');
    const titulo3 = document.getElementById('titulo3');
    const titulo4 = document.getElementById('titulo4');
    const titulo5 = document.getElementById('titulo5');
    
    setTimeout(() => {
        titulo1.classList.add('active_text');
    }, 500);

    setTimeout(() => {
        titulo2.classList.add('active_text');
    }, 1000);

    setTimeout(() => {
        titulo3.classList.add('active_text');
    }, 1500);

    setTimeout(() => {
        titulo4.classList.add('active_text');
    }, 2000);
    
    setTimeout(() => {
        titulo5.classList.add('active_text');
    }, 2000);
});
