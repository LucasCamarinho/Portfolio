function copy(){
    let email = ('llucascamarinho2015@gmail.com');
    
    navigator.clipboard.writeText(email);
}

function ActivateCheckbox(){

    checkbox.checked = true;
    html.classList.toggle("darkmode");
}

function DeactivateCheckbox(){

    checkbox.checked = false;
    html.classList.toggle("darkmode");
}


const html = document.querySelector("html")
const checkbox = document.querySelector ("#DM")

//
const btnMobile = document.getElementById("btn-mobile");
const links = document.getElementById("links-menu");

function openMenu(){
    const nav = document.getElementById("main-menu");
    nav.classList.toggle("active")
}

btnMobile.addEventListener("click",openMenu);
links.addEventListener("click",openMenu);

//
// nessa linha chamamos o id que foi definido na tag <strong> no doc html
const textDisplay = document.getElementById('info')
// nessa linha são definidas as tres frases que serão animadas
const phrases = ['Bem vindo ao meu portfolio!', 'Se preferir, use o Dark Mode', 'Descançar o mouse sobre os cards abre mais detalhes sobre os projetos','Essa página é totalmente adaptada para celulares','Fique a vontade para scrollar o site']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 10000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()