//KF Panda Search

//Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Input
  let name = document.getElementById("char-in").value;
  console.log(name);
  // If Statement - Test the Input
  if (name === "Po") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "Tigress") {
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-quote").innerHTML = "That was hardcore!";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "Mantis") {
    console.log("Yes, Mantis is a KF Panda character");
  } else if (name === "Monkey") {
    console.log("Yes, Monkey is a KF Panda character");
  } else {
    document.getElementById("char-name").innerHTML = "?????";
    document.getElementById("char-quote");
  }
}
