// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");
let charImg = document.getElementById("char-img");

//Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase();

  // If Statement - Test the Input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
    charImg.src = "img/po.png";
  } else if (name === "tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was hardcore!";
    charImg.src = "img/tigress.png";
  } else if (name === "mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Fear the Bug!";
    charImg.src = "img/mantis.png";
  } else if (name === "monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML = "We should hang out!";
    charImg.src = "img/monkey.png";
  } else if (name === "viper") {
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "I don't need to bite to fight";
    charImg.src = "img/viper.png";
  } else if (name === "crane") {
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "Wings of Justice!";
    charImg.src = "img/crane.png";
  } else {
    charNameEl.innerHTML = "?????";
    charQuoteEl.innerHTML = "";
    charImg.src = "img/question-mark.png";
  }
}
