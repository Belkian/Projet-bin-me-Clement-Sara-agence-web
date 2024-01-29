//   Géneration de blague grace a une API
async function blague() {
  let container = document.getElementById("blague");

  const response = await fetch("https:v2.jokeapi.dev/joke/Any?lang=fr");
  let blaguefr = await response.json();

  container.innerHTML = `<p>${blaguefr.setup}</p><p>${blaguefr.delivery}</p>`;
}
//  ---FIN----  Géneration de blague grace a une API
let closeFormu = document.querySelector("#closeForm");
let showformu = document.querySelector("#tableauxFormulaire");
function showform() {
  showformu.style.top = 30 + "px";
}
function closeForm() {
  showformu.style.top = '-' +500 + "px";
}

// formulaire d'inscription
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", submit);

let NomDeUtilisateur = document.getElementById("NomUtilisateur").value;
let Password = document.getElementById("Password").value;
let AdressMail = document.getElementById("Email").value;

function submit() {
  event.preventDefault();

  //Récupération de value - utilisateur - password - email
  NomDeUtilisateur = document.getElementById("NomUtilisateur").value;
  Password = document.getElementById("Password").value;
  AdressMail = document.getElementById("Email").value;

  //vérification de value ; je vérifie que c'est bien un string

  // je store les variable utilisateur
  localStorage.setItem("Password", Password);
  localStorage.setItem("email", AdressMail);
  localStorage.setItem("Nom_Utilisateur", NomDeUtilisateur);
  //je créer un tableau avec les variables utilisateurs
}

//connection
const connectBtn = document.querySelector("#connecter");
connectBtn.addEventListener("click", connection, false);
//récuperation des variables utilisateurs
function connection() {
  NomDeUtilisateurConnect = document.getElementById("NomUtilisateur").value;
  PasswordConnect = document.getElementById("Password").value;
  AdressMailConnect = document.getElementById("Email").value;
  if (PasswordConnect === Password) {
    localStorage.getItem("Password", Password);
  } else {
    alert("wrong user");
  }
  if (AdressMailConnect === AdressMail) {
    localStorage.getItem("email", AdressMail);
  } else {
    alert("wrong user");
  }
  if (NomDeUtilisateurConnect === NomDeUtilisateur) {
    localStorage.getItem("Nom_Utilisateur", NomDeUtilisateur);
  } else {
    alert("wrong user");
  }
}
//Création d'un tableau utilisateur
// formulaire de connection
// possibilité de changer le nom utilisateur le mail est le password
// bouton se déconnecter (ce qui fais revenir a la page d'accueil)
// création de plusieur utilisateur avec incrémentation ( si il existe incrémenté sinon créer )
// indice de connection
