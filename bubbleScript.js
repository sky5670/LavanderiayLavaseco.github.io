function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    
    const size = Math.random() * 50 + 20; // Tamaño entre 20px y 70px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.left = `${Math.random() * 100}vw`;

    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 2000);
}


setInterval(createBubble, 600);