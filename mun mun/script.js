// Function to display the next card with a smooth transition
function showCard(cardNumber) {
    const cards = document.querySelectorAll('.card');
    const currentCard = document.querySelector('.card.active');
    const nextCard = document.getElementById(`card${cardNumber}`);

    if (currentCard) {
        currentCard.classList.remove('active');
        currentCard.classList.add('inactive');
    }

    if (nextCard) {
        nextCard.classList.remove('inactive');
        nextCard.classList.add('active');

        // Auto-scroll to center the card
        nextCard.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }
}

// Final surprise function
function finalSurprise() {
    alert('🥰 More surprises are coming, Muna! Stay tuned! 🥰');
}
