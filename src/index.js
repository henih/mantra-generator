function generateMantra(event) {
  event.preventDefault();

  new Typewriter("#mantra", {
    strings: "Your Mantra will appear here",
    autoStart: true,
    delay: 90,
    cursor: " 🕉️",
  });
}

let mantraFormElement = document.querySelector("#form-input");
mantraFormElement.addEventListener("submit", generateMantra);
