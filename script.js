
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
    const bubbleStartPos = viewportHeight - footerHeight;

    bubble.style.bottom = -footerHeight + 'px'; // Random vertical position
    
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
    }, 20000);
}

setInterval(createBubble, 50);

