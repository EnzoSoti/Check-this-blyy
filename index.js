const sweetMessages = [
    "Your smile brightens up my darkest days ✨",
    "Every moment with you is a blessing 💝",
    "You make my heart skip a beat 💓",
    "You're the missing piece to my puzzle 🧩",
    "Your love is all I need 💖"
];

const nurseMessages = [
    "My favorite nursing student! Get some rest, cutie 👩‍⚕️💕",
    "Can't stop thinking about how amazing you'll be when you become a nurse! 🌙",
    "Future nurse of my dreams, let me take care of you for once 🤗",
    "The way you care for others makes my heart skip a beat! 💪",
    "Missing you during your long clinical hours... finally get to chat! 💝"
];

const motivationalMessages = [
    "You're stronger than you know, keep going! 💪",
    "Every patient you help makes the world better 🌟",
    "Your dedication inspires everyone around you ✨",
    "You're making a difference, one shift at a time 👩‍⚕️",
    "Your compassion is your superpower 💖"
];

const congratsMessages = [
    "You've captured all the hearts, just like you captured mine! 💝",
    "Your love makes every day brighter! 🌟",
    "You're the sweetest person I know! 💕",
    "My heart belongs to you, always! ❤️",
    "You make my world complete! 💖"
];

let heartsCollected = 0;
let currentMessageType = 'sweet';

function updateMessage(type) {
    currentMessageType = type;
    if (document.querySelector('.envelope').classList.contains('open')) {
        toggleEnvelope();
    }
}

function toggleEnvelope() {
    const envelope = document.querySelector('.envelope');
    const message = document.querySelector('.message');
    
    if (!envelope.classList.contains('open')) {
        let messages;
        switch(currentMessageType) {
            case 'nurse':
                messages = nurseMessages;
                break;
            case 'motivation':
                messages = motivationalMessages;
                break;
            default:
                messages = sweetMessages;
        }
        message.textContent = messages[Math.floor(Math.random() * messages.length)];
    }
    
    envelope.classList.toggle('open');
}

function initGame() {
    heartsCollected = 0;
    document.getElementById('hearts-collected').textContent = '0';
    document.getElementById('game-area').innerHTML = '';
    spawnHeart();
}

function spawnHeart() {
    if (heartsCollected >= 5) return;
    
    const heart = document.createElement('div');
    heart.className = 'heart-target';
    heart.textContent = '💖';
    heart.onclick = collectHeart;
    
    const gameArea = document.getElementById('game-area');
    gameArea.appendChild(heart);
}

function collectHeart() {
    this.remove();
    heartsCollected++;
    document.getElementById('hearts-collected').textContent = heartsCollected;
    
    if (heartsCollected < 5) {
        setTimeout(spawnHeart, 500);
    } else {
        showCongratulations();
    }
}

function showCongratulations() {
    const congratsDiv = document.querySelector('.congratulations');
    const congratsMessage = document.querySelector('.congrats-message');
    congratsMessage.textContent = congratsMessages[Math.floor(Math.random() * congratsMessages.length)];
    congratsDiv.style.display = 'block';
}

function hideCongratulations() {
    document.querySelector('.congratulations').style.display = 'none';
    initGame();
}

// Initialize the game when the page loads
window.onload = function() {
    initGame();
};