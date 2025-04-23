// Simple animation trigger on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.animate-fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('opacity-100');
    }
  });
});
