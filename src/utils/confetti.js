export const triggerConfetti = () => {
    const colors = ['#f59e0b', '#ec4899', '#06b6d4', '#10b981', '#ffffff'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Random Properties
        const bg = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100 + 'vw';
        const size = Math.random() * 10 + 5 + 'px';
        const animDuration = Math.random() * 2000 + 1500; // ms

        confetti.style.position = 'fixed';
        confetti.style.top = '-10px';
        confetti.style.left = left;
        confetti.style.width = size;
        confetti.style.height = size;
        confetti.style.backgroundColor = bg;
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';

        // Animation
        confetti.animate([
            { transform: `translate3d(0,0,0) rotateX(0) rotateY(0)` },
            { transform: `translate3d(${Math.random() * 100 - 50}px, 100vh, 0) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)` }
        ], {
            duration: Math.random() * 2000 + 1500,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fill: 'forwards'
        });

        document.body.appendChild(confetti);

        // Cleanup
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
};
