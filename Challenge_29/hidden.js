function main() {
  const nextSectionButtons = document.querySelectorAll(".next-section");
  for (const button of nextSectionButtons) {
    button.addEventListener("click", (event) => {
      const currentSection = event.target.parentElement;
      const nextSection = currentSection.nextElementSibling;
      currentSection.hidden = true;
      nextSection.hidden = false;
    });
  }
}

document.addEventListener("DOMContentLoaded", main);
