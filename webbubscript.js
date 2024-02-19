
if (window.matchMedia("(min-width: 601px)").matches) {
    const footer = document.querySelector('footer');
    const bubbleContainer = document.getElementById('bubble-container');

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        if (window.innerWidth < 768) {
            bubble.classList.add('mobile');
        }
        bubble.style.left = Math.random() * bubbleContainer.offsetWidth + 'px'; // Random horizontal position
        bubble.style.width = bubble.style.height = Math.random() * 100 + 'px'; // Random size
        const footerHeight = document.querySelector('footer').offsetHeight;
        const viewportHeight = window.innerHeight;
        const bubbleStartPos = document.body.scrollHeight - footerHeight;

        // bubble.style.bottom = bubbleStartPos + 'px'; // Random vertical position
        bubble.style.top = bubbleStartPos + 'px';

        bubbleContainer.appendChild(bubble);
        const span = document.createElement('span');
        bubble.appendChild(span);
        const span1 = document.createElement('span');
        bubble.appendChild(span1);
        const span2 = document.createElement('span');
        bubble.appendChild(span2);
        const span3 = document.createElement('span');
        bubble.appendChild(span3);
        const span4 = document.createElement('span');
        bubble.appendChild(span4);
        const span5 = document.createElement('span');
        bubble.appendChild(span5);
        
        setTimeout(() => {
            bubbleContainer.removeChild(bubble);
        }, 40000);
    }

    setInterval(createBubble, 1000);
}


// window.addEventListener('scroll', updateBubblePosition);

// function updateBubblePosition() {
//     const bubbles = document.querySelectorAll('.bubble');
//     const scrollPos = window.scrollY;
//     bubbles.forEach(bubble => {
//         bubble.style.bottom = (parseInt(bubble.style.bottom) + scrollPos) + 'px';
//     });
// }