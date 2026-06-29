function showWish() {
  document.getElementById("wish").innerHTML =
    "🎉 Happy Birthday My Queen Fiza ❤️<br><br>I Love You Forever! 💖<br><br>May Allah bless you with happiness, health and endless smiles. 🌹";

  createConfetti();
}

function createConfetti() {
  for (let i = 0; i < 80; i++) {
    let confetti = document.createElement("div");

    confetti.innerHTML = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.fontSize = (20 + Math.random() * 20) + "px";
    confetti.style.animation = "drop 4s linear forwards";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes drop{
0%{
transform:translateY(-20px) rotate(0deg);
}
100%{
transform:translateY(110vh) rotate(720deg);
}
}
`;
document.head.appendChild(style);
