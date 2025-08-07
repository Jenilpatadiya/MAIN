let secret = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  let guess = +document.getElementById("guessInput").value;
  let msg = document.getElementById("message");

  if (guess === secret) msg.textContent = "🎉 Correct!";
  else msg.textContent = guess < secret ? "📉 Too low!" : "📈 Too high!";
}
