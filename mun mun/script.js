// Function to display the next card with a smooth transition
function showCard(cardNumber) {
    // Hide all cards
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active');
    });

    // Show the specific card
    const nextCard = document.getElementById(`card${cardNumber}`);
    if (nextCard) {
        nextCard.classList.add('active');
    }
}

// Final surprise function
function finalSurprise() {
    alert('🥰 More surprises coming soon, Muna! i love your mine mwahhhhhhhhhhh 🥰');
}
