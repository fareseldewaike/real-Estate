// Select all favorite buttons
const favoriteButtons = document.querySelectorAll('.favorite-btn');

favoriteButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active'); 
        const icon = button.querySelector('i');
        icon.classList.toggle('active'); // Toggle the 'active' class
    });
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const cards = document.querySelectorAll('.property-card');
    
    if (scrollPosition > 200) {
        cards.forEach((card, index) => {
            // Add delay for each card
            setTimeout(() => {
                card.classList.add('show');
            }, index * 100); // 100ms delay between each card
        });
    }
});
