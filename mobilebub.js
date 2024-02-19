let bubbleCount = 0;

if (window.matchMedia("(max-width: 600px)").matches) {
    // Listen for touch events
    document.addEventListener('touchstart', createBubble);
    document.addEventListener('touchmove', createBubble);

    function createBubble(event) {
        // Only create a new bubble if the limit has not been reached
        if (bubbleCount < 1000) { // Change 100 to your desired limit
            // Create and add the bubble as before

            // Create a new bubble
            const bubble = document.createElement('div');
            bubble.className = 'bubble';

            // Position the bubble at the touch position
            const touch = event.touches[0];
            bubble.style.left = touch.clientX + 'px';
            bubble.style.top = touch.clientY + 'px';

            // Add the bubble to the document
            document.body.appendChild(bubble);

            // Increment the counter
            bubbleCount++;

            // Remove the bubble after 4 seconds
            setTimeout(() => {
                bubble.remove();

                // Decrement the counter
                bubbleCount--;
            }, 4000);
        }
    }
}

