const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Function to move the "No" button randomly
function moveNoButton() {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Generate random positions
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Event listener for Yes button click
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Thanks GOLU MOLU you clicked Yes! Being with you is my biggest blessing. I love you.";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";
    noBtn.style.display = "none"; // Hide No button
});

// Event listener for mouse hover (desktop)
noBtn.addEventListener("mouseover", moveNoButton);

// Event listener for touch (mobile)
noBtn.addEventListener("touchstart", moveNoButton);
