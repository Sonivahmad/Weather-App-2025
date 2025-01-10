document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animated');
    elements.forEach((element) => {
        element.style.visibility = 'visible';
        const animationClass = element.classList[1];
        element.classList.add(animationClass);
    });
});
