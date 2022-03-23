console.log("Stel hier uw unieke zegelring samen.");

//knoppen
var steenElement = document.querySelector("#steen");
var vormElement = document.querySelector("#vorm");
var ringElement = document.querySelector("#ring");
var goudElement = document.querySelector("#goud");
var zilverElement = document.querySelector("#zilver");
var rosegoudElement = document.querySelector("#rosegoud");

// voorbeeldnamen
var voorbeeldnamen = [
  "met steen - ovale - gouden zegelring",
  "met steen - stomphoekige - roségouden zegelring",
  "zonder steen - stomphoekige - zilveren zegelring",
  "met steen - ovale - roségouden zegelring",
];
console.log(voorbeeldnamen);
var h4Element = document.querySelector("h4");
console.log(h4Element);
h4Element.textContent = voorbeeldnamen[1];

// vb btn
var btn1 = document.querySelector(".manualbtn1");
var btn2 = document.querySelector(".manualbtn2");
var btn3 = document.querySelector(".manualbtn3");
var btn4 = document.querySelector(".manualbtn4");
console.log(btn1);

// audio
var audio = document.querySelector("#audio");
var audio2 = document.querySelector("#audio2");

// steen + vorm + kleur = resultaat
var steenKeuze = "zondersteen"; // 'metsteen'
var vormKeuze = "ovaal"; // 'stomphoek'
var kleurKeuze = "goud"; // 'zilver', 'rosegoud'

//eventListeners
steenElement.addEventListener("click", omenomsteen);
vormElement.addEventListener("click", omenomvorm);
goudElement.addEventListener("click", goudkleur);
zilverElement.addEventListener("click", zilverkleur);
rosegoudElement.addEventListener("click", rosegoudkleur);
// vb met pijljestoetsen
document.addEventListener("keyup", toetsgeklikt);
// eventListeners voor naam met klik
btn1.addEventListener("click", checkbtn1);
btn2.addEventListener("click", checkbtn2);
btn3.addEventListener("click", checkbtn3);
btn4.addEventListener("click", checkbtn4);
// functions
function toonResultaat() {
  console.log("toonResultaat");
  ringElement.src =
    "images/resultaat/" +
    steenKeuze +
    "-" +
    vormKeuze +
    "-" +
    kleurKeuze +
    ".png";
}

// knoppen
function omenomsteen() {
  console.log("omenomsteen");
  audio.play();
  if (steenKeuze == "metsteen") {
    steenKeuze = "zondersteen";
  } else {
    steenKeuze = "metsteen";
  }
  toonResultaat();
}
function omenomvorm() {
  console.log("omenomsteen");
  audio.play();
  if (vormKeuze == "ovaal") {
    vormKeuze = "stomphoek";
  } else {
    vormKeuze = "ovaal";
  }
  toonResultaat();
}
// kleur
function goudkleur() {
  console.log("goudkleur");
  audio.play();
  kleurKeuze = "goud";
  toonResultaat();
}
function zilverkleur() {
  console.log("zilverkleur");
  audio.play();
  kleurKeuze = "zilver";
  toonResultaat();
}
function rosegoudkleur() {
  console.log("rosegoud");
  audio.play();
  kleurKeuze = "rosegoud";
  toonResultaat();
}
// voorbeeld klik voor naam
function checkbtn1() {
  // document.querySelector("#radio1").checked = true;
  h4Element.textContent = voorbeeldnamen[0];
}
function checkbtn2() {
  // document.querySelector("#radio1").checked = true;
  h4Element.textContent = voorbeeldnamen[1];
}
function checkbtn3() {
  // document.querySelector("#radio1").checked = true;
  h4Element.textContent = voorbeeldnamen[2];
}
function checkbtn4() {
  // document.querySelector("#radio1").checked = true;
  h4Element.textContent = voorbeeldnamen[3];
}
// voorbeeldpijltjestoetsen
function toetsgeklikt(event) {
  console.log(event);
  if (event.keyCode == 39) {
    if (document.querySelector("#radio1").checked == true) {
      audio2.play();
      document.querySelector("#radio2").checked = true;
      h4Element.textContent = voorbeeldnamen[1];
    } else if (document.querySelector("#radio2").checked == true) {
      audio2.play();
      document.querySelector("#radio3").checked = true;
      h4Element.textContent = voorbeeldnamen[2];
    } else if (document.querySelector("#radio3").checked == true) {
      audio2.play();
      document.querySelector("#radio4").checked = true;
      h4Element.textContent = voorbeeldnamen[3];
    } else if (document.querySelector("#radio4").checked == true) {
      audio2.play();
      document.querySelector("#radio1").checked = true;
      h4Element.textContent = voorbeeldnamen[0];
    }
  }
  if (event.keyCode == 37) {
    if (document.querySelector("#radio2").checked == true) {
      audio2.play();
      document.querySelector("#radio1").checked = true;
      h4Element.textContent = voorbeeldnamen[0];
    } else if (document.querySelector("#radio3").checked == true) {
      audio2.play();
      document.querySelector("#radio2").checked = true;
      h4Element.textContent = voorbeeldnamen[1];
    } else if (document.querySelector("#radio4").checked == true) {
      audio2.play();
      document.querySelector("#radio3").checked = true;
      h4Element.textContent = voorbeeldnamen[2];
    } else if (document.querySelector("#radio1").checked == true) {
      audio2.play();
      document.querySelector("#radio4").checked = true;
      h4Element.textContent = voorbeeldnamen[3];
    }
  }
}
