VANTA.BIRDS({
    el: "#birds",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: window.innerHeight,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    quantity: 9.00,
    backgroundAlpha: 0.00,
    birdSize: 3.00,
    wingSpan: 5.00,
    speedLimit: 30.00,
    separation: 100.00,
    alignment: 1.00,
    cohesion: 1.00,
    color1: 0xff58dc,
    color2: 0xa75e5e,
   
    })

const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

let yesScale = 1;
let noScale = 1;

yesButton.addEventListener("click" , () => {
    document.getElementById('joe').src = "https://th.bing.com/th/id/R.baa51113ab3bc4616e812aa33f48abd1?rik=mcCBdv0D8M1PPQ&riu=http%3a%2f%2fimages.huffingtonpost.com%2f2015-09-17-1442457118-6809466-trump2.jpg&ehk=DzubtbZtAHB0NgMTBQgiWgBg1aKdy4HrymS5Is98oqo%3d&risl=&pid=ImgRaw&r=0"
    yesButton.textContent = "YAY"
    noButton.style.display = "none"
    yesButton.style.transform = "scale(1.6)"
})

noButton.addEventListener("click" , () => {
    yesScale += 0.1;
    yesButton.style.transform = `scale(${yesScale})`

    noScale -= 0.1;
    noButton.style.transform = `scale(${noScale})`

    teleportButton(noButton);

    noButton.textContent = messages[currentMessageIndex]
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;


})

function teleportButton(button) {
    const screenWidth = window.innerWidth; // Get the width of the screen
    const screenHeight = window.innerHeight; // Get the height of the screen
    const card = document.querySelector('.card'); // Get the card element
    const cardRect = card.getBoundingClientRect(); // Get the card's position and size
    // Define padding to keep the button within the screen and away from the card
    const padding = 20;
    // Calculate safe boundaries for the button
    const minX = padding;
    const maxX = screenWidth - button.offsetWidth - padding;
    const minY = padding;
    const maxY = screenHeight - button.offsetHeight - padding;
    // Ensure the button doesn't overlap with the card
    let randomX, randomY;
    do {
        randomX = minX + Math.random() * (maxX - minX);
        randomY = minY + Math.random() * (maxY - minY);
    } while (
        // Check if the button overlaps with the card
        randomX + button.offsetWidth > cardRect.left - padding &&
        randomX < cardRect.right + padding &&
        randomY + button.offsetHeight > cardRect.top - padding &&
        randomY < cardRect.bottom + padding
    );
    // Apply the new position
    button.style.position = 'absolute'; // Ensure the button can move freely
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

const messages = [
        "Are you sure?",
        "Really sure?",
        "Pookie Please?",
        "I'm going to cry... :(",
        "You're breaking my heart!",
        "REALLY sure?",
        "please?",
        "pretty please?",
        "PLEASE?",
        "PRETTY PLEASE?",
        "PLEASE PLEASE PLEASE?",
        "PLEASE PLEASE PLEASE PLEASE PL",
        "stop",
        "STOP",
        ":(",
        ":( :(",
        ":( :( :(",
        "I'm sad now",
        "No",
        "No",
        "No",
        "No",
     ];
    
let currentMessageIndex = 0;
