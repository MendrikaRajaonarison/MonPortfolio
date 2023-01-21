var stliens = document.getElementsByClassName("st-lien");
var conts = document.getElementsByClassName("contenu");
function voir(stnom) {
  for (stlien of stliens) {
    stlien.classList.remove("active-st");
  }
  for (cont of conts) {
    cont.classList.remove("active-contenu");
  }
  event.currentTarget.classList.add("active-st");
  document.getElementById(stnom).classList.add("active-contenu");
}

var menu = document.getElementById("menu");

function ouvrirmenu() {
  menu.style.right = "0";
}

function fermermenu() {
  menu.style.right = "-200px";
}

var telinput = document.getElementById("tel");

telinput.addEventListener("blur", function (event) {
  event.preventDefault();
  var tel = telinput.value;
  if (
    tel.length == 10 &&
    (tel.startsWith("032") ||
      tel.startsWith("034") ||
      tel.startsWith("033") ||
      tel.startsWith("038") ||
      tel.startsWith("039"))
  ) {
    document.getElementById("erreur").style.display = "none";
  } else {
    document.getElementById("erreur").innerHTML =
      "Saisir un numéro valide à madagascar";
  }
});

var emailinput = document.getElementById("mail");

emailinput.addEventListener("blur", function (event) {
  event.preventDefault();
  var email = emailinput.value;
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    document.getElementById("erreur2").innerHTML = "Saisir un email valide";
  } else {
    document.getElementById("erreur2").style.display = "none";
  }
});
