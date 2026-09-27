// ARRAY DE IMAGENS

const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener('click',()=>{
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open");
})

function cardapioPeixe() {
    const cardapio = document.getElementsByName("section-cardapio");

    cardapio[0].innerHTML = `
        <section class="cardapio" name="cardapio">
            <article>
                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/lagosta.webp" alt="">
                        <h3 class="nome-cardapio">Lagosta lobo</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>320</p>
                    </div>
                </div>
                
                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/deco-dory.webp" alt="">
                        <h3 class="nome-cardapio">cirurgião pata</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>80</p>
                    </div>
                </div>

                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/deco-nemo.webp" alt="">
                        <h3 class="nome-cardapio">Peixe-Palhaço</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>80</p>
                    </div>
                </div>
            </article>

            <article>
                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/foto-atum.jpg" alt="">
                        <h3 class="nome-cardapio">Peixe Atum</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>250</p>
                    </div>
                </div>

                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/tubarao-tigre.webp" alt="">
                        <h3 class="nome-cardapio">Tubarão-Tigre</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>480</p>
                    </div>
                </div>

                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/caranguejo.webp" alt="">
                        <h3 class="nome-cardapio">Caranguejo</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>400</p>
                    </div>
                </div>
            </article>
        </section>`;
}

function cardapioItem () {

}

function cardapioIngred () {
    
}

function cardapioPrato () {

}

let imagens = [
    "src/assets/Foto_Slide_Show.jpg", 
    "src/assets/Foto_Slide_Show2.jpg", 
    "src/assets/Foto_Slide_Show3.jpg", 
    "src/assets/Foto_Slide_Show4.jpg", 
    "src/assets/Foto_Slide_Show5.jpg", 
];

// POSIÇÃO QUE VAI INICIAR AS IMAGENS
let index = 0;

// TEMPO PARA TROCAR AS IMAGENS
let tempo = 5000; //3 segundos

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