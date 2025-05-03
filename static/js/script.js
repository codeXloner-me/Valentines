function startMusic() {
    const audio = document.getElementById("backgroundMusic");
    audio.muted = false;  // Unmute the audio
    audio.play().catch(error => console.log("Autoplay blocked:", error));
    document.getElementById("startMusic").style.display = "none";  // Hide the button after clicking
  }


  function revealMessage() {
    document.getElementById("hiddenMessage").style.display = "block";
  }

  function finalReveal() {
    document.getElementById("finalMessage").style.display = "block";
  }

  function createHearts() {
    for (let i = 0; i < 10; i++) {
      let heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.classList.add("heart");
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${2 + Math.random() * 4}s`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }
  }
  setInterval(createHearts, 1000);

  const quotes = [
    "You are my sun, my moon, and all my stars. ✨",
    "With you, every moment is magical. ❤️",
    "You make my world brighter. 🌍💖",
    "Every love story is beautiful, but ours is my favorite. 💞",
    "I would choose you in every lifetime. 💕"
  ];
  document.getElementById("loveQuote").innerText = quotes[Math.floor(Math.random() * quotes.length)];

  const message = "My Love, I cherish you beyond words! 💖";
  let i = 0;
  function typeMessage() {
    if (i < message.length) {
      document.getElementById("loveMessage").innerHTML += message.charAt(i);
      i++;
      setTimeout(typeMessage, 100);
    }
  }
  setTimeout(typeMessage, 2000);