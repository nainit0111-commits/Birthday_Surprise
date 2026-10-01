function openSurprise()  {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("surprise").style.display = "block";

    createConfetti();

}

    


function sendWish() {

    let wish = document.getElementById("wishInput").value;

    if (wish.trim() === "") {

        document.getElementById("wishMessage").innerHTML =
            "💭 First write your wish... ✨";

        return;
    }

    document.getElementById("wishMessage").innerHTML =
        "💖 Your wish has been received! ✨<br>" +
        "🌟 Your wish will come true very soon! 💫";

}


function openLetter() {

    document.getElementById("letter").style.display = "block";

}
// CREATE BALLOONS

function createBalloons() {

    const balloons = document.getElementById("balloons");

    const balloonEmojis = [
        "🎈",
        "🎈",
        "🎈",
        "🎈",
        "🎈"
    ];

    balloonEmojis.forEach((emoji, index) => {

        const balloon = document.createElement("div");

        balloon.classList.add("balloon");

        balloon.innerHTML = emoji;

        balloon.style.left = (10 + index * 18) + "%";

        balloon.style.animationDelay = (index * 1.2) + "s";

        balloons.appendChild(balloon);

    });

}


// CREATE CONFETTI

function createConfetti() {

    const confetti = document.getElementById("confetti");

    const emojis = [
        "🎉",
        "✨",
        "💖",
        "🎊",
        "⭐"
    ];

    for (let i = 0; i < 40; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        piece.style.left = Math.random() * 100 + "%";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        piece.style.fontSize =
            (15 + Math.random() * 15) + "px";

        confetti.appendChild(piece);

    }

    setTimeout(() => {

        confetti.innerHTML = "";

    }, 6000);

}


// START BALLOONS

createBalloons();
function blowCandles() {

    const candles = document.querySelectorAll(".candle");

    candles.forEach(function(candle) {

        candle.innerHTML = "💨";

        candle.style.transform = "scale(0.8)";

    });

    document.getElementById("candleMessage").innerHTML =
        "🌟 Yay! The candles are blown! 💫<br>" +
        "May all your wishes come true! ❤️";

    createConfetti();

}