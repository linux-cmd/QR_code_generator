window.onload = function() {
  // Intro QR
  new QRCode(document.getElementById("intro-qr"), {
    text: "https://your-site.com",
    width: 150,
    height: 150,
    colorDark: "#FFF",
    colorLight: "#1f1c2c",
    correctLevel: QRCode.CorrectLevel.H
  });

  const startBtn = document.getElementById("start-btn");
  const overlay = document.getElementById("intro-overlay");

  startBtn.addEventListener("click", function() {
    overlay.classList.add("fade-out");
    setTimeout(function() {
      overlay.remove();
      document.body.classList.add("scroll-enabled");
    }, 800);
  });

  // Main QR Generation
  const input = document.getElementById("input-text");
  const generateBtn = document.getElementById("generate-btn");
  const qrContainer = document.getElementById("qr-code");

  generateBtn.addEventListener("click", function() {
    const value = input.value.trim();
    qrContainer.innerHTML = "";
    if (!value) {
      alert("Please enter a URL or text.");
      return;
    }
    new QRCode(qrContainer, {
      text: value,
      width: 250,
      height: 250,
      colorDark: "#000",
      colorLight: "#fff",
      correctLevel: QRCode.CorrectLevel.H
    });
  });

  // Audio Controls
  const music = document.getElementById("bg-music");
  const muteBtn = document.getElementById("mute-btn");
  const volumeSlider = document.getElementById("volume-slider");

  music.volume = parseFloat(volumeSlider.value);

  muteBtn.addEventListener("click", function() {
    music.muted = !music.muted;
    muteBtn.textContent = music.muted ? "🔇" : "🔈";
  });

  volumeSlider.addEventListener("input", function() {
    music.volume = parseFloat(this.value);
    if (music.volume > 0 && music.muted) {
      music.muted = false;
      muteBtn.textContent = "🔈";
    }
  });
};
