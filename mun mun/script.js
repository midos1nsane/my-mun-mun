// Show the next card with a smooth animation
function showCard(cardNumber) {
    const currentCard = document.querySelector('.card.active');
    const nextCard = document.getElementById(`card${cardNumber}`);

    if (currentCard) {
        currentCard.classList.remove('active');
    }

    if (nextCard) {
        nextCard.classList.add('active');
        nextCard.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }
}

// Final surprise
function finalSurprise() {
    alert('🎉 More surprises are on their way, Muna! Stay tuned! 🎉');
}
