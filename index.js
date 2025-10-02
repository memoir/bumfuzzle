document.addEventListener("click", function (e) {
  // Prevent modal/help button clicks from triggering background/text change
  const helpModal = document.getElementById("help-modal");
  const helpBtn = document.getElementById("help-btn");
  if (
    (helpModal && helpModal.style.display === "flex") ||
    (helpBtn && (e.target === helpBtn))
  ) {
    return;
  }
  animateTextAndBackground();
});

let animating = false;

function animateTextAndBackground() {
  if (animating) return;
  animating = true;

  const bgColors = ["blue", "green", "red"];
  const textColors = ["orange", "white", "green", "yellow", "red", "blue"];
  const words = [
    "yellow", "blue", "white", "orange", "red",
    "fumbuzzle", "fumblebuzz", "bumblefuzz", "fuzzlebum",
    "buzzyfum", "bumfuzzle"
  ];
  const span = document.querySelector(".large-text");
  let interval;
  let elapsed = 0;
  const duration = 1000; // ms
  const frame = 50; // ms

  // Pick final background color immediately
  const finalBgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
  document.body.style.background = finalBgColor;

  // Helper to pick a random text color not matching background
  function pickTextColor(bg) {
    const filtered = textColors.filter(c => c !== bg);
    return filtered[Math.floor(Math.random() * filtered.length)];
  }

  interval = setInterval(() => {
    if (span) {
      const word = words[Math.floor(Math.random() * words.length)].toUpperCase();
      const color = pickTextColor(finalBgColor);
      span.textContent = word;
      span.style.color = color;
    }
    elapsed += frame;
    if (elapsed >= duration) {
      clearInterval(interval);
      // Settle on final random word and color
      if (span) {
        const finalWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
        const finalTextColor = pickTextColor(finalBgColor);
        span.textContent = finalWord;
        span.style.color = finalTextColor;
      }
      animating = false;
    }
  }, frame);
}

// Modal logic
document.getElementById("help-btn").addEventListener("click", function (e) {
  e.stopPropagation();
  const modal = document.getElementById("help-modal");
  if (modal) modal.style.display = "flex";
});

document.getElementById("close-help").addEventListener("click", function (e) {
  e.stopPropagation();
  const modal = document.getElementById("help-modal");
  if (modal) modal.style.display = "none";
});

// Optional: close modal when clicking outside modal content
document.getElementById("help-modal").addEventListener("click", function (e) {
  if (e.target === this) {
    this.style.display = "none";
  }
});
