function displayMantra(response) {
  new Typewriter("#mantra", {
    strings: response.data.answer,
    autoStart: true,
    delay: 90,
    cursor: " 🕉️",
  });
}

function generateMantra(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let key = "oa503cb248d231a90f14935068e8t36f";
  let prompt = `Write a positive affirmation with the topic of ${instructionsInput.value}"`;
  let context =
    "You are a yoga AI assistant who is focused on wellbeing and mindfullness. Please make your answer short and sweet. Please behave.";
  let URL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  console.log("AI is running");
  console.log(`Prompt: ${prompt}`);

  axios.get(URL).then(displayMantra);
}

let mantraFormElement = document.querySelector("#form-input");
mantraFormElement.addEventListener("submit", generateMantra);
