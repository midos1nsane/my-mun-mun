// Function to show the next card
function showCard(cardNumber) {
    // Hide all cards
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active');
    });

    // Show the desired card
    const nextCard = document.getElementById(`card${cardNumber}`);
    if (nextCard) {
        nextCard.classList.add('active');
    }
}
