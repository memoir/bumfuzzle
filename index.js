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

  const colors = ["blue", "green", "red"];
  const words = [
    "yellow", "blue", "white", "orange", "red",
    "fumbuzzle", "fumblebuzz", "bumblefuzz", "fuzzlebum",
    "buzzyfum", "bumfuzzle"
  ];

  // Random background color
  document.body.style.background = colors[Math.floor(Math.random() * colors.length)];

  // Random text, always uppercase
  const text = words[Math.floor(Math.random() * words.length)].toUpperCase();
  const span = document.querySelector(".large-text");
  if (span) span.textContent = text;
});

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
