const card = document.getElementById('card-1');
const rotateBtns = document.getElementsByClassName('rotate-btn');
const avatar = document.querySelector('.avatar');

// Add event listeners to the rotation buttons
Array.from(rotateBtns).forEach(btn => {
    btn.addEventListener('click', () => {
        card.classList.toggle('card-rotating');  // Updated class name here
        avatar.classList.toggle('bubble-animation');
    });
});