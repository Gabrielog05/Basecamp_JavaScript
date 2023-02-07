const botao = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const darkModeClass = 'dark-mode';


function changeMode() {
    changeClasses();
}

function changeClasses(){
    botao.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function changeText(){
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(darkModeClass)){
        botao.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }

    botao.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

botao.addEventListener("click", changeMode);





