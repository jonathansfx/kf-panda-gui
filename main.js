//KF Panda Search

//Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Input
  let name = document.getElementById("char-in").value;

  // If Statement - Test the Input
  if (name === "Po") {
    console.log("Yes, Po is a KF Panfa Character");
  }
}
