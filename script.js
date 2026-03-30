let step = 0;

function sendMessage() {
  let input = document.getElementById("userInput").value;
  let chat = document.getElementById("chat");

  chat.innerHTML += "<p><b>You:</b> " + input + "</p>";

  let reply = "";

  if (step === 0) {
    reply = "Welcome to Bishnoi Restaurant! How many people?";
    step++;
  } 
  else if (step === 1) {
    reply = "What date would you like to book?";
    step++;
  } 
  else if (step === 2) {
    reply = "What time?";
    step++;
  } 
  else {
    reply = "Your table is booked! ✅ See you soon.";
  }

  chat.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";
  document.getElementById("userInput").value = "";
}
