
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    bubble.style.width = bubble.style.height = '100px'; // Random size
    bubble.style.bottom = '-200px'; // Random vertical position
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
    document.body.appendChild(bubble);
    
    setTimeout(() => {
        document.body.removeChild(bubble);
    }, 4000);
}

setInterval(createBubble, 50);
