document.getElementById('zoomBtn').addEventListener('click', function() {
    const container = document.querySelector('.container');
    const parallax = document.querySelector('.parallax');
    const description = document.getElementById('description');
    const bubbleContainer = document.querySelector('.bubble-container');
    const imagen_web = document.getElementById("imagen_lavadora");
    const contentImg = document.querySelector('.content');

    let opacidadActual = parseFloat(contentImg.style.opacity) || 1;
    
    setTimeout(() => {
        
    }, 100);

    
    setTimeout(() => {
        opacidadActual = 0;  // Reduce la opacidad en 0.1
        contentImg.style.opacity = opacidadActual.toFixed(1);  // Actualiza la opacidad de la imagen
    }, 1000);
    

    setTimeout(() => {
        // Mostrar las burbujas con transición
        // bubbleContainer.style.display = 'flex';
        // bubbleContainer.style.opacity = '0.8';
    }, 2000);
    

    if (parallax.classList.contains('zoomed')) {
        // Revertir los cambios
        parallax.classList.remove('zoomed');
        bubbleContainer.classList.remove('show-bubbles');
        
    } else {
        // Realizar zoom, mostrar descripción, imagen y burbujas, y hacer scroll
        parallax.classList.add('zoomed');
        setTimeout(() => {
            description.classList.add('show-description');
            setTimeout(() => {
                
                bubbleContainer.style.opacity = "1"; // Asegura que el contenedor de burbujas sea visible
                bubbleContainer.classList.add('show-bubbles'); // Muestra las burbujas con la animación de crecimiento
                //window.scrollTo({
                    //top: description.offsetTop,
                    //behavior: 'smooth'  Hace scroll suave hacia la descripción
               // });

                // Espera a que el scroll termine y luego restaura la opacidad
                setTimeout(() => {
                    parallax.classList.remove('zoomed');
                }, 10); // Tiempo suficiente para que termine el scroll
            }, 1000); // Espera un poco antes de mostrar la imagen y las burbujas y hacer scroll
        }, 500); // Muestra la descripción después de la animación de zoom y desvanecimiento
    }
});
let mostrandoImagen1 = true;
let segundoFondo = true;

document.getElementById('WebChange').addEventListener('click', function() {
    const container = document.querySelector('.container');
    
    if(segundoFondo){
        if(mostrandoImagen1){
            container.style.backgroundImage = "url('tu-imagen.jpg')";
        }else{
            container.style.backgroundImage = "url('otra-imagen.jpg')";
        }
    }
    if(!segundoFondo){
        if(mostrandoImagen1){
            container.style.backgroundImage = "url('SinLavadora2.jpg')";
        }else{
            container.style.backgroundImage = "url('tu-imagen2.jpg')";
        }
    }
    

    mostrandoImagen1 = !mostrandoImagen1;
});