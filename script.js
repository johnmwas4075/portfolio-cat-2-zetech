// Typing effect for homepage
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.typing-text')) {
        const text = "Welcome to my personal journey through life...";
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                document.querySelector('.typing-text').innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        typeWriter();
    }

    // Read More button functionality
    const readMoreBtn = document.querySelector('.read-more');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function() {
            const aboutText = document.querySelector('.about-text');
            if (aboutText.classList.contains('expanded')) {
                aboutText.classList.remove('expanded');
                this.textContent = 'Read More';
            } else {
                aboutText.classList.add('expanded');
                this.textContent = 'Read Less';
            }
        });
    }

    // Timeline animation for childhood page
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });

        timelineItems.forEach(item => {
            observer.observe(item);
        });
    }
}); 