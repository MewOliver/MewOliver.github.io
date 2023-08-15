
const fadeInSection = document.querySelectorAll('.fade-in'); 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-active');
        }
    });
}, {
    threshold: 0.5 
});

fadeInSection.forEach(section => {
    observer.observe(section);
});
