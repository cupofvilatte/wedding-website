export function startCountdown(targetDateString, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error(`Coundown container not found: ${containerSelector}`);
        return;
    }

    const targetDate = new Date(targetDateString);

    const updateCountdown = () => {
        const now = new Date();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            container.textContent = "It's the big day! 🎉";
            clearInterval(intervalId);
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);

        container.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    updateCountdown();

    const intervalId = setInterval(updateCountdown, 1000);
}