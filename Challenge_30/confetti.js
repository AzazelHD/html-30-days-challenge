const button = document.querySelector("#confetti");

const jsConfetti = new JSConfetti();

document.addEventListener("DOMContentLoaded", () => {
  button.addEventListener("click", () => {
    jsConfetti.addConfetti();
  });
});
