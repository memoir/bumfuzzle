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

  const colors = ["blue", "green", "red"];
  const words = [
    "yellow", "blue", "white", "orange", "red",
    "fumbuzzle", "fumblebuzz", "bumblefuzz", "fuzzlebum",
    "buzzyfum", "bumfuzzle"
  ];
  const span = document.querySelector(".large-text");
  let interval;
  let elapsed = 0;
  const duration = 300; // ms
  const frame = 50; // ms

  // Pick final background color immediately
  const finalColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = finalColor;

  interval = setInterval(() => {
    // Only animate the text
    if (span) span.textContent = words[Math.floor(Math.random() * words.length)].toUpperCase();
    elapsed += frame;
    if (elapsed >= duration) {
      clearInterval(interval);
      // Settle on final random word
      if (span) span.textContent = words[Math.floor(Math.random() * words.length)].toUpperCase();
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
