// ARRAY DE IMAGENS
let imagens = [
    "src/assets/Foto_Slide_Show.jpg", 
    "src/assets/Foto_Slide_Show2.jpg", 
    "src/assets/Foto_Slide_Show3.jpg", 
    "src/assets/Foto_Slide_Show4.jpg", 
    "src/assets/Foto_Slide_Show5.jpg", 
];

// POSIÇÃO QUE VAI INICIAR AS IMAGENS
let index=0;

// TEMPO PARA TROCAR AS IMAGENS
let tempo = 3000; //3 segundos

// FUNÇÃO DO SLIDESHOW
function SlideShow(){
    // DOM - PEGA O ID E PASSA O CAMINHO DAS IMAGENS
    document.getElementById("imgBanner").src=imagens[index];
    // INCREMENTO (++ = +1)
    index++;

    // ESTRUTURA CONDICIONAL IF
    if(index == imagens.length){
        index=0;
    }
    // MÉTODO SETTIMEOUT PARA EXECUTAR A FUNÇÃO E CHAMAR O TEMPO
    setTimeout('SlideShow()', tempo)
}
// EXECUTANDO A FUNÇÃO
SlideShow();

const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener('click',()=>{
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open");
})